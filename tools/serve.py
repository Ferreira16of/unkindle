"""Servidor do Unkindle para testes na rede local.

- Serve a pasta unkindle/ sem cache (o Kindle sempre pega a versão nova).
- Recebe relatórios do aparelho em POST /__report e grava em tools/reports.log
  (uma linha JSON por relatório). Assim dá para ver na hora o que falhou no Kindle.

Uso: python tools/serve.py [porta]
"""
import ipaddress
import json
import os
import socket
import urllib.parse
import urllib.error
import urllib.request
import sys
import time
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.join(HERE, "..", "unkindle")
LOG = os.path.join(HERE, "reports.log")
MAX_BODY = 32 * 1024
CACHE = {}  # url -> (quando, corpo, tipo)


def _ssl_contexts():
    """Contextos TLS a tentar: o padrão do sistema e, se houver, o pacote certifi (certificados atualizados)."""
    import ssl
    ctxs = [ssl.create_default_context()]
    try:
        import certifi
        ctxs.append(ssl.create_default_context(cafile=certifi.where()))
    except Exception:
        pass
    return ctxs


def fetch_url(req):
    import ssl
    last = None
    for ctx in _ssl_contexts():
        try:
            with urllib.request.urlopen(req, timeout=12, context=ctx) as r:
                return r.read(3 * 1024 * 1024), r.headers.get("Content-Type", "text/html; charset=utf-8")
        except urllib.error.URLError as e:
            last = e
            if not isinstance(getattr(e, "reason", None), ssl.SSLCertVerificationError):
                raise
    raise last


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw):
        super().__init__(*a, directory=ROOT, **kw)

    def end_headers(self):
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

    def do_GET(self):
        # /__fetch?url=...  busca uma página de notícia/artigo para o leitor do Unkindle (só http/https, sem endereços internos)
        if self.path.startswith("/__fetch?"):
            q = urllib.parse.parse_qs(urllib.parse.urlparse(self.path).query)
            url = (q.get("url") or [""])[0]
            try:
                u = urllib.parse.urlparse(url)
                if u.scheme not in ("http", "https") or not u.hostname:
                    raise ValueError("endereço inválido")
                for info in socket.getaddrinfo(u.hostname, None):
                    ip = ipaddress.ip_address(info[4][0])
                    if ip.is_private or ip.is_loopback or ip.is_link_local or ip.is_reserved or ip.is_multicast:
                        raise ValueError("endereço interno bloqueado")
                req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36", "Accept-Language": "pt-BR,pt;q=0.9", "Accept": "text/html,application/xhtml+xml,application/xml,application/atom+xml,text/plain,*/*"})
                # cache de 3 minutos: menos pedidos aos sites (o Reddit limita quem pede demais)
                hit = CACHE.get(url)
                if hit and time.time() - hit[0] < 180:
                    body, ctype = hit[1], hit[2]
                else:
                    try:
                        body, ctype = fetch_url(req)
                        CACHE[url] = (time.time(), body, ctype)
                    except urllib.error.HTTPError:
                        if not hit:
                            raise
                        body, ctype = hit[1], hit[2]  # site pediu pausa: entrega a última cópia
                    if len(CACHE) > 300:
                        for k in sorted(CACHE, key=lambda k: CACHE[k][0])[:100]:
                            CACHE.pop(k, None)
                self.send_response(200)
                self.send_header("Content-Type", ctype)
                self.send_header("Content-Length", str(len(body)))
                self.end_headers()
                self.wfile.write(body)
            except Exception as e:
                self.send_error(502, str(e)[:100])
            return
        return super().do_GET()

    def do_POST(self):
        if self.path.split("?")[0] != "/__report":
            self.send_error(404)
            return
        n = min(int(self.headers.get("Content-Length") or 0), MAX_BODY)
        raw = self.rfile.read(n).decode("utf-8", "replace")
        try:
            data = json.loads(raw)
        except ValueError:
            data = {"raw": raw}
        entry = {"quando": time.strftime("%Y-%m-%d %H:%M:%S"), "de": self.client_address[0], **(data if isinstance(data, dict) else {"dados": data})}
        line = json.dumps(entry, ensure_ascii=False)
        with open(LOG, "a", encoding="utf-8") as f:
            f.write(line + "\n")
        print("RELATORIO " + line[:300], flush=True)
        self.send_response(204)
        self.end_headers()

    def log_message(self, fmt, *args):
        # só mostra erros e relatórios, não cada arquivo servido
        if args and str(args[1])[:1] in "45":
            super().log_message(fmt, *args)


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
    print(f"Unkindle em http://0.0.0.0:{port}  (relatórios em {LOG})", flush=True)
    ThreadingHTTPServer(("0.0.0.0", port), Handler).serve_forever()
