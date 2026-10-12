"""Gen 1 (Pokemon Red/Blue, US) RAM addresses + readers.

Addresses come from the pokered disassembly (wram.asm) and are the same ones
the Claude/Gemini-Plays-Pokemon community uses. Everything here is read-only:
we only ever *observe* the game state to show it on the site — Benthic itself
plays with the buttons, exactly like a human squinting at the screen.
"""

# --- raw addresses ---
PARTY_COUNT   = 0xD163   # number of pokemon in the party (0-6)
PARTY_SPECIES = 0xD164   # 6 bytes: internal species ids, 0xFF terminated
PARTY_MON1    = 0xD16B   # start of party mon 1 struct (44 bytes each)
BADGES        = 0xD356   # 1 byte bitfield: 8 gym badges
DEX_OWNED     = 0xD2F7   # 19 bytes bitfield: pokemon caught (151 bits)
DEX_SEEN      = 0xD30A   # 19 bytes bitfield: pokemon seen
CUR_MAP       = 0xD35E   # current map id
Y_COORD       = 0xD361   # player Y tile on the current map
X_COORD       = 0xD362   # player X tile on the current map
MONEY         = 0xD347   # 3 bytes, big-endian BCD
BATTLE_TYPE   = 0xD057   # 0 = not in battle, else in a battle

# party mon struct offsets (added to PARTY_MON1 + i*44)
MON_LEVEL_OFF = 0x21     # current level
MON_HP_OFF    = 0x01     # current HP (2 bytes, big-endian)
MON_MAXHP_OFF = 0x22     # max HP (2 bytes, big-endian)
MON_STRUCT    = 44

# internal species id -> National Dex number is non-linear in Gen 1; for a
# friendly party display we only need names, so we map the *internal* id used
# in the party list to a name. This covers the ids you actually run into early.
SPECIES_BY_INTERNAL = {
    0x01: "Rhydon", 0x99: "Bulbasaur", 0x09: "Ivysaur", 0x9A: "Venusaur",
    0xB0: "Charmander", 0xB2: "Charmeleon", 0xB4: "Charizard",
    0xB1: "Squirtle", 0xB3: "Wartortle", 0x1C: "Blastoise",
    0x7B: "Caterpie", 0x7C: "Metapod", 0x7D: "Butterfree",
    0x70: "Weedle", 0x71: "Kakuna", 0x72: "Beedrill",
    0x24: "Pidgey", 0x96: "Pidgeotto", 0x97: "Pidgeot",
    0xA5: "Rattata", 0xA6: "Raticate", 0x05: "Spearow", 0x23: "Fearow",
    0x6C: "Ekans", 0x2D: "Arbok", 0x54: "Pikachu", 0x55: "Raichu",
    0x60: "Sandshrew", 0x61: "Sandslash", 0x0F: "Nidoran-F", 0xA8: "Nidorina",
    0x10: "Nidoqueen", 0x03: "Nidoran-M", 0xA7: "Nidorino", 0x07: "Nidoking",
    0x04: "Clefairy", 0x8E: "Clefable", 0x52: "Vulpix", 0x53: "Ninetales",
    0x64: "Jigglypuff", 0x65: "Wigglytuff", 0x6B: "Zubat", 0x82: "Golbat",
    0xB9: "Oddish", 0xBA: "Gloom", 0xBB: "Vileplume", 0x6D: "Paras",
    0x2E: "Parasect", 0x41: "Venonat", 0x77: "Venomoth", 0x3B: "Diglett",
    0x76: "Dugtrio", 0x4D: "Meowth", 0x90: "Persian", 0x2F: "Psyduck",
    0x80: "Golduck", 0x39: "Mankey", 0x75: "Primeape", 0x21: "Growlithe",
    0x14: "Arcanine", 0x47: "Poliwag", 0x6E: "Poliwhirl", 0x6F: "Poliwrath",
    0x94: "Abra", 0x26: "Kadabra", 0x95: "Alakazam", 0x6A: "Machop",
    0x29: "Machoke", 0x7E: "Machamp", 0xBC: "Bellsprout", 0xBD: "Weepinbell",
    0xBE: "Victreebel", 0x18: "Tentacool", 0x9B: "Tentacruel", 0xA9: "Geodude",
    0x27: "Graveler", 0x31: "Golem", 0xA3: "Ponyta", 0xA4: "Rapidash",
    0x25: "Slowpoke", 0x08: "Slowbro", 0xAD: "Magnemite", 0x36: "Magneton",
    0x40: "Farfetchd", 0x46: "Doduo", 0x74: "Dodrio", 0x3A: "Seel",
    0x78: "Dewgong", 0x0D: "Grimer", 0x88: "Muk", 0x17: "Shellder",
    0x8B: "Cloyster", 0x19: "Gastly", 0x93: "Haunter", 0x0E: "Gengar",
    0x22: "Onix", 0x30: "Drowzee", 0x81: "Hypno", 0x4E: "Krabby",
    0x8A: "Kingler", 0x06: "Voltorb", 0x8D: "Electrode", 0x0C: "Exeggcute",
    0x0A: "Exeggutor", 0x11: "Cubone", 0x91: "Marowak", 0x2B: "Hitmonlee",
    0x2C: "Hitmonchan", 0x0B: "Lickitung", 0x37: "Koffing", 0x8F: "Weezing",
    0x12: "Rhyhorn", 0x01: "Rhydon", 0x28: "Chansey", 0x1E: "Tangela",
    0x02: "Kangaskhan", 0x5C: "Horsea", 0x5D: "Seadra", 0x9D: "Goldeen",
    0x9E: "Seaking", 0x1B: "Staryu", 0x98: "Starmie", 0x2A: "Mr.Mime",
    0x1A: "Scyther", 0x48: "Jynx", 0x35: "Electabuzz", 0x33: "Magmar",
    0x1D: "Pinsir", 0x3C: "Tauros", 0x85: "Magikarp", 0x16: "Gyarados",
    0x13: "Lapras", 0x4C: "Ditto", 0x66: "Eevee", 0x69: "Vaporeon",
    0x68: "Jolteon", 0x67: "Flareon", 0xAA: "Porygon", 0x62: "Omanyte",
    0x63: "Omastar", 0x5A: "Kabuto", 0x5B: "Kabutops", 0x5E: "Aerodactyl",
    0x1F: "Snorlax", 0x83: "Articuno", 0x3D: "Zapdos", 0x84: "Moltres",
    0x4A: "Dratini", 0x4B: "Dragonair", 0x42: "Dragonite", 0x74: "Dodrio",
    0x15: "Mewtwo", 0x49: "Mew",
}

# a friendly name for the current map (subset — falls back to "Map #id")
MAP_NAMES = {
    0: "Pallet Town", 1: "Viridian City", 2: "Pewter City", 3: "Cerulean City",
    4: "Lavender Town", 5: "Vermilion City", 6: "Celadon City", 7: "Fuchsia City",
    8: "Cinnabar Island", 9: "Indigo Plateau", 10: "Saffron City",
    12: "Route 1", 13: "Route 2", 14: "Route 3", 15: "Route 4", 16: "Route 5",
    17: "Route 6", 18: "Route 7", 19: "Route 8", 20: "Route 9", 21: "Route 10",
    22: "Route 11", 23: "Route 12", 24: "Route 13", 25: "Route 14",
    26: "Route 15", 27: "Route 16", 28: "Route 17", 29: "Route 18",
    33: "Route 22", 34: "Route 23", 35: "Route 24", 36: "Route 25",
    37: "Player's House 1F", 38: "Player's House 2F", 39: "Rival's House",
    40: "Oak's Lab", 41: "Viridian Pokecenter", 42: "Viridian Mart",
    47: "Viridian Gym", 51: "Viridian Forest", 54: "Pewter Gym",
    58: "Cerulean Gym", 59: "Mt. Moon 1F", 60: "Mt. Moon B1F", 61: "Mt. Moon B2F",
    64: "Cerulean Pokecenter", 65: "Cerulean Mart",
    92: "SS Anne 1F", 142: "Vermilion Gym", 134: "Rock Tunnel 1F",
}


def _popcount(n):
    c = 0
    while n:
        n &= n - 1
        c += 1
    return c


def read_state(mem):
    """mem is anything indexable by address (pyboy.memory). Returns a dict."""
    badges = _popcount(mem[BADGES] & 0xFF)
    owned = sum(_popcount(mem[DEX_OWNED + i] & 0xFF) for i in range(19))
    seen = sum(_popcount(mem[DEX_SEEN + i] & 0xFF) for i in range(19))

    party_count = min(mem[PARTY_COUNT], 6)
    party = []
    for i in range(party_count):
        base = PARTY_MON1 + i * MON_STRUCT
        species_id = mem[PARTY_SPECIES + i]
        name = SPECIES_BY_INTERNAL.get(species_id, f"#{species_id:02X}")
        level = mem[base + MON_LEVEL_OFF]
        hp = (mem[base + MON_HP_OFF] << 8) | mem[base + MON_HP_OFF + 1]
        maxhp = (mem[base + MON_MAXHP_OFF] << 8) | mem[base + MON_MAXHP_OFF + 1]
        party.append({"name": name, "level": level, "hp": hp, "maxhp": maxhp})

    money = 0
    for i in range(3):  # 3-byte big-endian BCD
        b = mem[MONEY + i]
        money = money * 100 + (b >> 4) * 10 + (b & 0x0F)

    map_id = mem[CUR_MAP]
    return {
        "badges": badges,
        "pokedexOwned": owned,
        "pokedexSeen": seen,
        "party": party,
        "money": money,
        "map": MAP_NAMES.get(map_id, f"Map #{map_id}"),
        "mapId": map_id,
        "x": mem[X_COORD],
        "y": mem[Y_COORD],
        "inBattle": mem[BATTLE_TYPE] != 0,
    }
