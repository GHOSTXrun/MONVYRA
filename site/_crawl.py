#!/usr/bin/env python3
"""Mirror letsfindpokemon.info into the current folder (site root).
Saves HTML pages (extensionless -> .html) and every same-domain asset,
preserving path layout. Never overwrites our own index.html."""
import os, re, time, urllib.parse, urllib.request

BASE = "https://letsfindpokemon.info"
HOST = "letsfindpokemon.info"
UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36"
SEEDS = ["/home.html", "/explore.html", "/catalog.html", "/extras.html", "/about.html"]
PROTECT = {"index.html"}          # our Evermon landing — never overwrite

seen, saved_pages, saved_assets, failed = set(), [], [], []
queue = list(SEEDS)


def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read(), r.headers.get("Content-Type", "")


def local_path(path):
    path = urllib.parse.unquote(path.split("#")[0].split("?")[0])
    if path.endswith("/"):
        path += "index.html"
    if not os.path.splitext(path)[1]:      # extensionless -> treat as page
        path += ".html"
    return path.lstrip("/")


def save(rel, data):
    if rel in PROTECT:
        return
    os.makedirs(os.path.dirname(rel) or ".", exist_ok=True)
    with open(rel, "wb") as f:
        f.write(data)


def norm(link, cur_path):
    link = link.strip()
    if not link or link.startswith(("#", "mailto:", "javascript:", "data:", "tel:")):
        return None
    u = urllib.parse.urljoin(BASE + cur_path, link)
    p = urllib.parse.urlparse(u)
    if p.scheme not in ("http", "https") or p.netloc != HOST:
        return None
    return p.path + (("?" + p.query) if p.query else "")


ATTR_RE = re.compile(r'(?:href|src)\s*=\s*["\']([^"\']+)["\']', re.I)
CSSURL_RE = re.compile(r'url\(\s*["\']?([^"\')]+)["\']?\s*\)', re.I)

pages, assets = 0, 0
while queue and pages < 400:
    path = queue.pop(0)
    key = path.split("#")[0]
    if key in seen:
        continue
    seen.add(key)
    url = BASE + path
    try:
        data, ctype = fetch(url)
    except Exception as e:
        failed.append((path, str(e)[:60]))
        continue
    rel = local_path(path)
    is_html = "text/html" in ctype.lower()
    if is_html:
        save(rel, data)
        saved_pages.append(rel); pages += 1
        html = data.decode("utf-8", "replace")
        for m in ATTR_RE.findall(html) + CSSURL_RE.findall(html):
            n = norm(m, path)
            if n and n.split("#")[0] not in seen:
                queue.append(n)
        time.sleep(0.05)
    else:
        # asset: only fetch/save once, keep original layout
        if not os.path.exists(rel) or rel not in saved_assets:
            save(rel, data); saved_assets.append(rel); assets += 1

print(f"PAGES saved: {len(saved_pages)}")
for p in sorted(set(saved_pages)):
    print("  ", p)
print(f"ASSETS saved: {len(set(saved_assets))}")
print(f"FAILED: {len(failed)}")
for p, e in failed[:20]:
    print("  !", p, e)
