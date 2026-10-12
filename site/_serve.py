#!/usr/bin/env python3
"""Static server for the Evermon site mirror.
Like python -m http.server, but if a path has no extension and no file,
it falls back to <path>.html — so links such as /catalog or /bookpages/LFsm
(used across the mirrored pages) resolve to the saved catalog.html etc."""
import os
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

PORT = 8080


class Handler(SimpleHTTPRequestHandler):
    def translate_path(self, path):
        local = super().translate_path(path)
        # extensionless path -> prefer the sibling <name>.html file,
        # even when a directory of the same name exists (explore.html vs explore/)
        if not os.path.splitext(local)[1]:
            html = local.rstrip("/\\") + ".html"
            if os.path.isfile(html):
                return html
        return local

    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()


if __name__ == "__main__":
    print(f"serving on http://127.0.0.1:{PORT} (extensionless -> .html fallback)")
    ThreadingHTTPServer(("127.0.0.1", PORT), Handler).serve_forever()
