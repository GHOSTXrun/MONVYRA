#!/usr/bin/env python3
"""Pilot Evermon through Pokemon Red's opening and get a starter, then save state."""
import random
from pyboy import PyBoy
import ram_map

pb = PyBoy("pokered.gbc", window="null")
pb.set_emulation_speed(0)
pb.load_state(open("evermon.state", "rb"))


def st():
    return ram_map.read_state(pb.memory)


def press(b, hold=16, settle=16):
    pb.button_press(b)
    for _ in range(hold):
        pb.tick()
    pb.button_release(b)
    for _ in range(settle):
        pb.tick()


def exit_to_town():
    for _ in range(120):
        s = st(); m = s["map"]
        if m == "Pallet Town":
            return True
        if "2F" in m:
            if s["x"] < 7: press("right")
            elif s["y"] > 1: press("up")
            else: press("up")
        elif "House" in m or "1F" in m:
            if s["y"] < 6: press("down")
            elif s["x"] > 3: press("left")
            elif s["x"] < 3: press("right")
            else: press("down")
        else:
            return m
    return st()["map"] == "Pallet Town"


for _ in range(8):
    press("b")
exit_to_town()
print("outside:", st()["map"], (st()["x"], st()["y"]))

# ---- Phase 2: reach the north grass to trigger Oak. Try committed routes that go
# around the house; after each, if Oak grabbed us the map leaves Pallet Town. ----
routes = [
    ["right"] * 6 + ["up"] * 16,
    ["up"] * 16,
    ["left"] * 3 + ["up"] * 16,
    ["right"] * 3 + ["up"] * 16,
    ["down"] * 2 + ["right"] * 8 + ["up"] * 16,
]
triggered = False
for attempt in range(12):
    s = st()
    if len(s["party"]) > 0:
        triggered = True; break
    m = s["map"]
    if m != "Pallet Town":
        triggered = True; break                     # Oak cutscene / in the lab
    if "House" in m:
        exit_to_town(); continue
    for d in routes[attempt % len(routes)]:
        press(d)
        mm = st()["map"]
        if mm != "Pallet Town":
            break
    if st()["map"] != "Pallet Town":
        triggered = True; break
print("phase2:", st()["map"], (st()["x"], st()["y"]), "triggered:", triggered)

# ---- Phase 3: ride the cutscene into the lab and grab a starter ----
got = False
for i in range(1600):
    if len(st()["party"]) > 0:
        got = True; break
    press("a")
    if i % 3 == 0: press("up")
    if i % 5 == 0: press("right")
    if i % 8 == 0: press("left")
    if i % 11 == 0: press("down")
for _ in range(10):
    press("a")

s = st()
print("FINAL:", s["map"], (s["x"], s["y"]),
      "party:", [p["name"] + " L" + str(p["level"]) for p in s["party"]])
if got:
    img = getattr(pb.screen, "image", None)
    if img is None:
        from PIL import Image; img = Image.fromarray(pb.screen.ndarray)
    img.convert("RGB").resize((480, 432)).save("cam.jpg", "JPEG", quality=80)
    pb.save_state(open("evermon.state", "wb"))
    print("SAVED post-starter state.")
else:
    print("no starter yet.")
pb.stop()
