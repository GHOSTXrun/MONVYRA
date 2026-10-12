#!/usr/bin/env python3
"""Mock live-data server for Benthic — lets the website run with NO ROM and NO LLM.

It fakes a plausible Pokemon Red run (badges tick up, Pokedex fills, the trainer
wanders Kanto and narrates) and serves the exact same JSON + cam shape the real
`play.py` produces, on the same port. Use it to develop / demo the site:

    python mock_live.py         # serves http://localhost:8890  (data + /cam)

Then open ../home/index.html (the dashboard points at localhost:8890 by default).
"""
import io
import json
import math
import os
import threading
import time
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

HERE = os.path.dirname(os.path.abspath(__file__))
LIVE_JSON = os.path.join(HERE, "benthic-live.json")
CAM_JPG = os.path.join(HERE, "cam.jpg")
DATA_PORT = 8890

STARTED = int(time.time() * 1000)
LOCK = threading.Lock()

MAPS = ["Pallet Town", "Route 1", "Viridian City", "Route 2", "Viridian Forest",
        "Pewter City", "Pewter Gym", "Route 3", "Mt. Moon 1F", "Cerulean City"]
MONS = ["Charmander", "Pidgey", "Rattata", "Caterpie", "Weedle", "Pikachu",
        "Nidoran-M", "Spearow", "Jigglypuff", "Zubat", "Geodude", "Clefairy"]
THOUGHTS = [
    "tall grass ahead — good odds of a Pokedex entry, let's wade in.",
    "low on HP, routing back to the Pokecenter before I risk a faint.",
    "Brock's gym is north. I need a rock-resistant move first.",
    "this ledge keeps sending me back — trying the left path instead.",
    "a wild Pidgey! throwing a Poke Ball while its HP is low.",
    "talking to this trainer, they usually hint where to go next.",
    "menu open — checking if anyone can learn a new move.",
    "Mt. Moon is dark and full of Zubat. onward anyway.",
]

STATE = {"steps": 0, "battles": 0, "caught": 1, "badges": 0,
         "owned": 1, "seen": 3, "mapi": 0, "money": 3000,
         "party": [{"name": "Charmander", "level": 5, "hp": 20, "maxhp": 20}],
         "history": [], "events": [{"t": time.strftime("%H:%M:%S"), "tag": "SYS",
                                    "msg": "Benthic online — mock stream, no ROM attached"}]}


def push_event(tag, msg):
    with LOCK:
        STATE["events"].append({"t": time.strftime("%H:%M:%S"), "tag": tag, "msg": msg})
        if len(STATE["events"]) > 40:
            STATE["events"] = STATE["events"][-40:]


def placeholder_cam(tick):
    """Draw a tiny 'game boy screen' placeholder as a jpg (no Pillow-fonts needed)."""
    try:
        from PIL import Image, ImageDraw
    except Exception:
        return
    img = Image.new("RGB", (480, 432), (15, 40, 34))
    d = ImageDraw.Draw(img)
    d.rectangle([20, 20, 460, 412], outline=(95, 244, 224), width=3)
    # a little wandering "player" dot on a grid
    for gx in range(40, 460, 40):
        d.line([gx, 40, gx, 392], fill=(20, 60, 52))
    for gy in range(40, 400, 40):
        d.line([40, gy, 440, gy], fill=(20, 60, 52))
    px = 240 + int(160 * math.sin(tick / 7.0))
    py = 216 + int(120 * math.cos(tick / 5.0))
    d.ellipse([px - 10, py - 10, px + 10, py + 10], fill=(255, 90, 90))
    d.text((30, 26), "BENTHIC  (mock feed)", fill=(219, 233, 238))
    img.save(CAM_JPG, "JPEG", quality=80)


def evolve(tick):
    with LOCK:
        STATE["steps"] += 2 + (tick % 3)
        if tick % 5 == 0:
            STATE["seen"] = min(151, STATE["seen"] + 1)
        if tick % 9 == 0 and STATE["owned"] < 151:
            STATE["owned"] += 1
            STATE["caught"] += 1
            mon = MONS[STATE["owned"] % len(MONS)]
            if len(STATE["party"]) < 6:
                STATE["party"].append({"name": mon, "level": 3 + STATE["owned"] % 8,
                                       "hp": 18, "maxhp": 22})
            push_event("CATCH", f"caught {mon}! Pokedex now {STATE['owned']}/151")
        if tick % 11 == 0:
            STATE["battles"] += 1
            push_event("BATTLE", "won a battle")
        if tick % 40 == 0 and STATE["badges"] < 8:
            STATE["badges"] += 1
            push_event("BADGE", f"earned a gym badge — {STATE['badges']}/8, on-chain forever")
        if tick % 6 == 0:
            STATE["mapi"] = (STATE["mapi"] + 1) % len(MAPS)
            push_event("MOVE", f"entered {MAPS[STATE['mapi']]}")
        if tick % 4 == 0:
            push_event("BENTHIC", THOUGHTS[tick % len(THOUGHTS)])
        STATE["history"].append({"t": int(time.time() * 1000), "owned": STATE["owned"],
                                 "steps": STATE["steps"], "battles": STATE["battles"],
                                 "badges": STATE["badges"]})
        if len(STATE["history"]) > 200:
            STATE["history"] = STATE["history"][-200:]


def write_live():
    with LOCK:
        payload = {
            "ts": int(time.time() * 1000), "startedAt": STARTED,
            "badges": STATE["badges"], "pokedexOwned": STATE["owned"],
            "pokedexSeen": STATE["seen"], "party": STATE["party"],
            "steps": STATE["steps"], "battles": STATE["battles"], "caught": STATE["caught"],
            "money": STATE["money"], "map": MAPS[STATE["mapi"]],
            "x": 5 + STATE["steps"] % 12, "y": 4 + STATE["steps"] % 9,
            "stepsPerMin": 12 + STATE["steps"] % 20,
            "history": STATE["history"][-180:], "events": STATE["events"][-40:],
        }
    json.dump(payload, open(LIVE_JSON, "w", encoding="utf-8"))


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


if __name__ == "__main__":
    threading.Thread(
        target=lambda: ThreadingHTTPServer(("0.0.0.0", DATA_PORT), Handler).serve_forever(),
        daemon=True).start()
    print(f"mock data+cam server on http://localhost:{DATA_PORT}  (open ../home/index.html)")
    tick = 0
    write_live()
    placeholder_cam(0)
    while True:
        tick += 1
        evolve(tick)
        write_live()
        placeholder_cam(tick)
        time.sleep(3)
