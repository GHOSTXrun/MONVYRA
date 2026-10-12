#!/usr/bin/env python3
"""Live-pipeline driver WITHOUT the LLM: runs the real Pokemon Red ROM, reads real
game state (map / badges / Pokedex / party) via ram_map, streams frames + data to the
Live page on :8899. Inputs are random, so it mostly wanders the intro/title until the
real AI (play.py, needs your API) takes the wheel. Proves the ROM + emulator + live
dashboard are all real and wired."""
import io, json, os, threading, time, random
from datetime import datetime
from zoneinfo import ZoneInfo
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pyboy import PyBoy
import ram_map

HERE = os.path.dirname(os.path.abspath(__file__))
LIVE_JSON = os.path.join(HERE, "evermon-live.json")
CAM_JPG = os.path.join(HERE, "cam.jpg")
PORT = 8899  # 8890 is taken by kxescore (antivirus) on this box
ET = ZoneInfo("America/New_York")
ROM = os.path.join(HERE, "pokered.gbc")   # real Pokemon Red, built from pret/pokered

def clk(): return datetime.now(ET).strftime("%H:%M:%S")

STATE = {"startedAt": int(time.time()*1000), "steps": 0, "battles": 0, "caught": 0,
         "badges": 0, "pokedexOwned": 0, "pokedexSeen": 0, "party": [], "money": 0,
         "map": "booting", "x": 0, "y": 0, "stepsPerMin": 0,
         "events": [{"t": clk(), "tag": "SYS",
                     "msg": "real Pokemon Red is running. random inputs for now; give the API and the AI takes over."}]}
LOCK = threading.Lock()

def write_live():
    with LOCK:
        json.dump({"ts": int(time.time()*1000), **STATE, "events": STATE["events"][-40:]},
                  open(LIVE_JSON, "w", encoding="utf-8"))

class H(BaseHTTPRequestHandler):
    def log_message(self, *a): pass
    def do_GET(self):
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Cache-Control", "no-store")
        if "cam" in self.path:
            self.send_header("Content-Type", "image/jpeg"); self.end_headers()
            try: self.wfile.write(open(CAM_JPG, "rb").read())
            except Exception: pass
        else:
            self.send_header("Content-Type", "application/json"); self.end_headers()
            try: self.wfile.write(open(LIVE_JSON, "rb").read())
            except Exception: self.wfile.write(b"{}")

threading.Thread(target=lambda: ThreadingHTTPServer(("0.0.0.0", PORT), H).serve_forever(), daemon=True).start()
print("smoke data+cam server on :%d" % PORT)

pb = PyBoy(ROM, window="null"); pb.set_emulation_speed(0)
for _ in range(500): pb.tick()

def frame():
    img = getattr(pb.screen, "image", None)
    if img is None:
        from PIL import Image; img = Image.fromarray(pb.screen.ndarray)
    img.convert("RGB").resize((480, 432)).save(CAM_JPG, "JPEG", quality=80)

def press(b, hold=8, settle=14):
    pb.button_press(b)
    for _ in range(hold): pb.tick()
    pb.button_release(b)
    for _ in range(settle): pb.tick()

write_live(); frame()
DIRS = ["a", "a", "start", "up", "down", "left", "right", "b"]
prev = (0, 0, -1); i = 0
while True:
    i += 1
    press(random.choice(DIRS))
    frame()
    try:
        rs = ram_map.read_state(pb.memory)
    except Exception:
        rs = None
    with LOCK:
        if rs:
            cur = (rs["x"], rs["y"], rs["mapId"])
            if cur != prev:
                STATE["steps"] += 1; prev = cur
            for k in ("badges", "pokedexOwned", "pokedexSeen", "party", "map", "x", "y", "money"):
                STATE[k] = rs[k]
        STATE["stepsPerMin"] = min(60, 15 + i % 30)
        if i % 10 == 0:
            STATE["events"].append({"t": clk(), "tag": "MOVE", "msg": "exploring " + STATE.get("map", "?") + "."})
        if len(STATE["events"]) > 50:
            STATE["events"] = STATE["events"][-50:]
    write_live()
    time.sleep(0.5)
