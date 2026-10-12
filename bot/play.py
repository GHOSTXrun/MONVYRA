#!/usr/bin/env python3
"""Evermon — an autonomous AI that plays Pokemon Red, 24/7, and never resets.

A real vision LLM looks at the Game Boy screen (plus a little decoded game state),
decides which buttons a trainer would press, and presses them. The emulator state is
saved continuously so the journey never restarts; the bot writes `evermon-live.json`
and a `cam.jpg` frame for the website, and serves both over HTTP (CORS) so the Live
page can show a real stream + dashboard.

    pip install -r requirements.txt
    cp ai.config.example.json ai.config.json     # your OpenAI-compatible vision endpoint
    python play.py /path/to/PokemonRed.gb         # ROM is yours to provide (copyright)

Nothing here is a scripted playthrough. Evermon gets a screen and a goal and figures
out the rest, the same way a person squinting at a Game Boy would.
"""
import base64
import io
import json
import os
import random
import sys
import threading
import time
from datetime import datetime
from zoneinfo import ZoneInfo
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

from openai import OpenAI
from pyboy import PyBoy

import ram_map

HERE = os.path.dirname(os.path.abspath(__file__))
LIVE_JSON = os.path.join(HERE, "evermon-live.json")   # the Live page reads this
CAM_JPG = os.path.join(HERE, "cam.jpg")               # latest scaled game frame
STATE_FILE = os.path.join(HERE, "evermon.state")      # emulator save — never reset
STATS_FILE = os.path.join(HERE, "stats.json")         # persistent counters + history + events
DATA_PORT = 8899                                       # public data + cam endpoint (8890 taken by kxescore AV)
ET = ZoneInfo("America/New_York")                      # all timestamps are US Eastern

VALID_BUTTONS = {"up", "down", "left", "right", "a", "b", "start", "select"}

# ---------------------------------------------------------------- config
cfg = json.load(open(os.path.join(HERE, "ai.config.json"), encoding="utf-8"))
ai = OpenAI(api_key=cfg["apiKey"], base_url=cfg["baseURL"], timeout=45, max_retries=1)
MODEL = cfg["model"]
DELAY = float(cfg.get("turnDelaySec", 1.0))   # pause between turns, to throttle API cost
print("AI brain:", MODEL, "@", cfg["baseURL"])

rom_path = sys.argv[1] if len(sys.argv) > 1 else cfg.get("rom")
if not rom_path or not os.path.exists(rom_path):
    sys.exit("Provide a Pokemon Red/Blue ROM: `python play.py C:/path/to/PokemonRed.gb` "
             "(or set \"rom\" in ai.config.json). The ROM is yours to supply.")

# ---------------------------------------------------------------- shared live state
LOCK = threading.Lock()
STATS = {
    "startedAt": int(time.time() * 1000),
    "steps": 0, "battles": 0, "caught": 0,
    "badges": 0, "pokedexOwned": 0, "pokedexSeen": 0,
    "party": [], "money": 0, "map": "Pallet Town", "x": 0, "y": 0,
    "stepsPerMin": 0,
    "history": [],   # {t, owned, steps, battles, badges}
    "events": [],    # {t, tag, msg}
}
try:
    saved = json.load(open(STATS_FILE, encoding="utf-8"))
    STATS.update({k: saved[k] for k in
                  ("startedAt", "steps", "battles", "caught", "history", "events") if k in saved})
except Exception:
    pass

_step_times = []  # timestamps of recent tile-steps, for steps/min


def eastern_clock():
    return datetime.now(ET).strftime("%H:%M:%S")


def push_event(tag, msg):
    with LOCK:
        STATS["events"].append({"t": eastern_clock(), "tag": tag, "msg": str(msg)[:140]})
        if len(STATS["events"]) > 60:
            STATS["events"] = STATS["events"][-60:]


def steps_per_min():
    now = time.time()
    while _step_times and _step_times[0] < now - 60:
        _step_times.pop(0)
    return len(_step_times)


def write_live():
    with LOCK:
        STATS["stepsPerMin"] = steps_per_min()
        payload = {
            "ts": int(time.time() * 1000),
            **{k: STATS[k] for k in (
                "startedAt", "badges", "pokedexOwned", "pokedexSeen", "party",
                "steps", "battles", "caught", "money", "map", "x", "y", "stepsPerMin")},
            "history": STATS["history"][-180:],
            "events": STATS["events"][-40:],
        }
    try:
        json.dump(payload, open(LIVE_JSON, "w", encoding="utf-8"))
    except Exception:
        pass


def persist_stats():
    with LOCK:
        keep = {k: STATS[k] for k in
                ("startedAt", "steps", "battles", "caught", "history", "events")}
    try:
        json.dump(keep, open(STATS_FILE, "w", encoding="utf-8"))
    except Exception:
        pass


def sample_history():
    with LOCK:
        STATS["history"].append({
            "t": int(time.time() * 1000),
            "owned": STATS["pokedexOwned"], "steps": STATS["steps"],
            "battles": STATS["battles"], "badges": STATS["badges"],
        })
        if len(STATS["history"]) > 400:
            STATS["history"] = STATS["history"][-400:]


# ---------------------------------------------------------------- CORS data + cam server
class Handler(BaseHTTPRequestHandler):
    def log_message(self, *a):
        pass

    def do_GET(self):
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Cache-Control", "no-store")
        if "cam" in self.path:
            self.send_header("Content-Type", "image/jpeg")
            self.end_headers()
            try:
                self.wfile.write(open(CAM_JPG, "rb").read())
            except Exception:
                pass
        else:
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            try:
                self.wfile.write(open(LIVE_JSON, "rb").read())
            except Exception:
                self.wfile.write(b"{}")


def serve():
    try:
        ThreadingHTTPServer(("0.0.0.0", DATA_PORT), Handler).serve_forever()
    except Exception as e:
        print("data server:", e)


def background():
    while True:
        write_live()
        sample_history()
        persist_stats()
        time.sleep(5)


# ---------------------------------------------------------------- emulator
pyboy = PyBoy(rom_path, window="null")   # headless
pyboy.set_emulation_speed(0)             # run as fast as the machine allows

if os.path.exists(STATE_FILE):
    with open(STATE_FILE, "rb") as f:
        pyboy.load_state(f)
    push_event("SYS", "Evermon online. Resuming the run from exactly where it left off.")
    print("resumed from", STATE_FILE)
else:
    for _ in range(600):   # boot past the black startup frames
        pyboy.tick()
    push_event("SYS", "Evermon online. A fresh trainer, and the last one it will ever be.")


def press(button, hold=16, settle=24):
    # d-pad needs ~16 held frames to actually step a tile (a short tap only turns);
    # give buttons enough frames to register and let the animation settle.
    pyboy.button_press(button)
    for _ in range(hold):
        pyboy.tick()
    pyboy.button_release(button)
    for _ in range(settle):
        pyboy.tick()


def save_emulator():
    with open(STATE_FILE, "wb") as f:
        pyboy.save_state(f)


def _screen_image():
    """PyBoy 2.x: prefer screen.image (PIL); fall back to ndarray."""
    scr = pyboy.screen
    img = getattr(scr, "image", None)
    if img is None:
        from PIL import Image
        img = Image.fromarray(scr.ndarray)
    return img.convert("RGB")


def capture_cam():
    """Save a scaled-up jpg of the current screen and return PNG bytes for the LLM."""
    img = _screen_image()                              # 160x144
    img.resize((480, 432)).save(CAM_JPG, "JPEG", quality=80)  # 3x for the site
    buf = io.BytesIO()
    img.save(buf, "PNG")
    return buf.getvalue()


# ---------------------------------------------------------------- the brain
SYSTEM = (
    "You are Evermon, an autonomous AI playing Pokemon Red on a Game Boy. You see the "
    "screen and press buttons like a human would. Your goals, in order: progress the "
    "story, earn all 8 gym badges, and catch as many species as you can for the Pokedex. "
    "Never idle, always make forward progress. You are given the screen image plus decoded "
    "game state. Reply with ONLY a raw JSON object, no markdown, no commentary:\n"
    '{"thought":"<one short in-character sentence about what you see and intend>",'
    '"buttons":["<up|down|left|right|a|b|start|select>", ...]}\n'
    "Rules: 1 to 4 buttons per turn. Use A to talk, confirm, or advance text; B to cancel or "
    "back; START for the menu; the d-pad to walk. In battle, navigate menus with the d-pad and A. "
    "If text is on screen, press A to advance it. Keep buttons short and deliberate. JSON only."
)


def ask_llm(state, png_bytes, hist_text):
    b64 = base64.b64encode(png_bytes).decode()
    party = ", ".join(f"{p['name']} L{p['level']} ({p['hp']}/{p['maxhp']})"
                      for p in state["party"]) or "(none yet)"
    text = (
        f"Location: {state['map']} at ({state['x']},{state['y']}). "
        f"Badges: {state['badges']}/8. Pokedex owned: {state['pokedexOwned']}/151. "
        f"Party: {party}. Money: ${state['money']}. "
        f"{'IN BATTLE. ' if state['inBattle'] else ''}"
        f"Your last tiles (oldest first): {hist_text}. "
        "IF THOSE TILES KEEP REPEATING you are walking in circles: stop reacting to the screen, "
        "pick ONE direction and hold it for several steps to reach a brand new area. Do NOT step "
        "back into a door or building you just came out of. To make story progress out of an early "
        "town, head toward the map edge (usually NORTH / up) onto the route. "
        "Black areas at the edges of the screen are outside the map (walls); if you press a "
        "direction and the view does not change, that way is blocked, so pick a different direction. "
        "Look at the screen and decide the next buttons. JSON only."
    )
    resp = ai.chat.completions.create(
        model=MODEL, max_tokens=300,
        messages=[
            {"role": "system", "content": SYSTEM},
            {"role": "user", "content": [
                {"type": "text", "text": text},
                {"type": "image_url", "image_url": {"url": f"data:image/png;base64,{b64}"}},
            ]},
        ],
    )
    txt = (resp.choices[0].message.content or "").strip()
    txt = txt.replace("```json", "").replace("```", "").strip()
    a, b = txt.find("{"), txt.rfind("}")
    if a >= 0 and b > a:
        txt = txt[a:b + 1]
    obj = json.loads(txt)
    btns = [str(x).lower().strip() for x in obj.get("buttons", [])]
    btns = [x for x in btns if x in VALID_BUTTONS][:4] or ["a"]
    return str(obj.get("thought", ""))[:140], btns


def run():
    from collections import deque
    prev = ram_map.read_state(pyboy.memory)
    turns = 0
    stuck = 0
    pos_hist = deque(maxlen=14)
    esc_idx = 0
    while True:
        try:
            png = capture_cam()
            state = ram_map.read_state(pyboy.memory)
            hist_text = " > ".join(f"{m}:({x},{y})" for (m, x, y) in list(pos_hist)[-6:]) or "(just started)"
            thought, buttons = ask_llm(state, png, hist_text)
            if thought:
                push_event("THINK", thought + "  [" + ",".join(buttons) + "]")

            for b in buttons:
                press(b)

            new = ram_map.read_state(pyboy.memory)
            pos_hist.append((new["mapId"], new["x"], new["y"]))

            # ---- step / anti-stuck: the model often keeps pressing into a wall ----
            moved = (new["x"], new["y"], new["mapId"]) != (prev["x"], prev["y"], prev["mapId"])
            if moved:
                stuck = 0
                with LOCK:
                    STATS["steps"] += 1
                _step_times.append(time.time())
            elif not new["inBattle"]:
                stuck += 1
                if stuck >= 2:   # wedged; maybe a menu (PC / START) opened, or a wall
                    for _ in range(3):
                        press("b")   # close any accidental menu so we can walk again
                    for nudge in random.sample(["up", "down", "left", "right"], 4):
                        press(nudge)
                        chk = ram_map.read_state(pyboy.memory)
                        if (chk["x"], chk["y"], chk["mapId"]) != (new["x"], new["y"], new["mapId"]):
                            push_event("MOVE", "wall ahead, went " + nudge + " to break free")
                            new = chk
                            stuck = 0
                            with LOCK:
                                STATS["steps"] += 1
                            _step_times.append(time.time())
                            break

            # ---- loop escape: few tiles revisited, OR ping-ponging in/out a door ----
            maps_recent = [m for (m, x, y) in pos_hist]
            transitions = sum(1 for a, b in zip(maps_recent, maps_recent[1:]) if a != b)
            few_tiles = len(pos_hist) >= 10 and len(set(pos_hist)) <= 6
            door_loop = len(pos_hist) >= 8 and transitions >= 3
            if (few_tiles or door_loop) and not new["inBattle"]:
                indoor = any(k in new["map"] for k in ("House", "Lab", "Center", "Mart", "Gym", "Room"))
                if indoor:
                    plan = [("down", 9)]                                    # buildings exit at the bottom
                elif esc_idx % 2 == 0:
                    plan = [("right", 5), ("up", 9)]                        # step off the door, then north
                else:
                    plan = [("left", 5), ("up", 9)]
                esc_idx += 1
                push_event("SYS", "stuck in a loop; " + ("leaving the building" if indoor else "heading for the exit north"))
                for d, n in plan:
                    for _ in range(n):
                        press(d)
                new = ram_map.read_state(pyboy.memory)
                pos_hist.clear()
                stuck = 0

            if new["mapId"] != prev["mapId"]:
                push_event("MOVE", f"entered {new['map']}")
            if new["pokedexOwned"] > prev["pokedexOwned"]:
                with LOCK:
                    STATS["caught"] += new["pokedexOwned"] - prev["pokedexOwned"]
                newest = new["party"][-1]["name"] if new["party"] else "a new Pokemon"
                push_event("CATCH", f"caught {newest}. Pokedex now {new['pokedexOwned']}/151.")
            if new["badges"] > prev["badges"]:
                push_event("BADGE", f"earned a gym badge. {new['badges']}/8, written to the chain for good.")
            if prev["inBattle"] and not new["inBattle"]:
                with LOCK:
                    STATS["battles"] += 1
                push_event("BATTLE", "battle over.")

            with LOCK:
                STATS.update({k: new[k] for k in
                              ("badges", "pokedexOwned", "pokedexSeen", "party",
                               "money", "map", "x", "y")})
            prev = new

            turns += 1
            if turns % 15 == 0:      # persist often so a crash never costs the journey
                save_emulator()
            time.sleep(DELAY)        # throttle turns (see turnDelaySec in ai.config.json)
        except Exception as e:
            push_event("SYS", f"hiccup, retrying: {e}")
            print("loop error:", e)
            time.sleep(2)


if __name__ == "__main__":
    threading.Thread(target=serve, daemon=True).start()
    threading.Thread(target=background, daemon=True).start()
    print(f"data+cam server on :{DATA_PORT} (CORS)")
    write_live()
    try:
        run()
    finally:
        save_emulator()
        write_live()
