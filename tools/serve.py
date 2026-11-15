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


# ---- IA (Groq): a chave fica fora do repositório, em ../.env.local (GROQ_API_KEY=...) ou na variável de ambiente ----
def _env_key():
    k = os.environ.get("GROQ_API_KEY")
    if k:
        return k.strip()
    f = os.path.join(HERE, "..", ".env.local")
    if os.path.exists(f):
        for line in open(f, encoding="utf-8"):
            if line.startswith("GROQ_API_KEY="):
                return line.split("=", 1)[1].strip()
    return ""


def _supabase_cfg():
    import re
    cfg = open(os.path.join(ROOT, "config.js"), encoding="utf-8").read()
    return re.search(r'url:\s*"([^"]+)"', cfg).group(1), re.search(r'anonKey:\s*"([^"]+)"', cfg).group(1)


AI_SYSTEM = ("Você é o assistente do Unkindle, um app para Kindle e e-readers. Responda sempre em português do Brasil, de forma clara e direta, "
             "em parágrafos curtos e listas simples (a tela é de tinta eletrônica, sem cores). Evite tabelas e emojis. Se não souber, diga que não sabe.")
AI_HITS = {}


def _json_req(url, headers, body=None, timeout=40):
    import ssl
    data = json.dumps(body).encode() if body is not None else None
    req = urllib.request.Request(url, data=data, headers=dict(headers, **({"Content-Type": "application/json"} if data else {})))
    last = None
    for ctx in _ssl_contexts():
        try:
            with urllib.request.urlopen(req, timeout=timeout, context=ctx) as r:
                return r.status, json.loads(r.read().decode("utf-8"))
        except urllib.error.HTTPError as e:
            try:
                return e.code, json.loads(e.read().decode("utf-8"))
            except Exception:
                return e.code, {}
        except urllib.error.URLError as e:
            last = e
            if not isinstance(getattr(e, "reason", None), ssl.SSLCertVerificationError):
                raise
    raise last


def ai_answer(token, payload):
    key = _env_key()
    if not key:
        return 503, {"error": "A IA ainda não foi configurada (falta GROQ_API_KEY)."}
    url, pub = _supabase_cfg()
    code, user = _json_req(url + "/auth/v1/user", {"apikey": pub, "Authorization": "Bearer " + token, "User-Agent": "unkindle"}, timeout=8) if token else (401, {})
    if code != 200 or not user.get("id"):
        return 401, {"error": "Entre na sua conta do Unkindle para usar a IA."}
    now = time.time()
    arr = [t for t in AI_HITS.get(user["id"], []) if now - t < 600]
    if len(arr) >= 30:
        return 429, {"error": "Muitas perguntas seguidas. Espere alguns minutos e tente de novo."}
    AI_HITS[user["id"]] = arr + [now]
    msgs = [m for m in (payload or {}).get("messages", []) if isinstance(m, dict) and m.get("role") in ("user", "assistant") and isinstance(m.get("content"), str) and m["content"].strip()][-20:]
    msgs = [{"role": m["role"], "content": m["content"][:8000]} for m in msgs]
    if not msgs or msgs[-1]["role"] != "user":
        return 400, {"error": "Mensagem vazia."}
    for model in ("openai/gpt-oss-120b", "openai/gpt-oss-20b"):
        try:
            code, j = _json_req("https://api.groq.com/openai/v1/chat/completions", {"Authorization": "Bearer " + key, "User-Agent": "unkindle"},
                                {"model": model, "messages": [{"role": "system", "content": AI_SYSTEM}] + msgs, "max_completion_tokens": 900, "temperature": 0.6, "reasoning_effort": "low", "include_reasoning": False})
        except Exception:
            continue
        if code == 429 or code >= 500:
            continue
        if code != 200:
            return 502, {"error": "A IA recusou o pedido."}
        return 200, {"text": (j["choices"][0]["message"].get("content") or "").strip(), "model": model}
    return 503, {"error": "A IA está ocupada agora. Tente de novo em instantes."}


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
        if self.path.startswith("/__zap?"):
            return self.zap_proxy()
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

    def zap_proxy(self):
        """/__zap?op=...  repassa para o servidor do WhatsApp (ZAP_URL, padrão http://localhost:3000)."""
        q = urllib.parse.parse_qs(urllib.parse.urlparse(self.path).query)
        op = (q.get("op") or [""])[0]
        if op not in ("status", "link", "logout", "chats", "messages", "read", "send"):
            self.send_error(404)
            return
        base = (os.environ.get("ZAP_URL") or "http://localhost:3000").rstrip("/")
        url = base + "/" + op + ("?jid=" + urllib.parse.quote((q.get("jid") or [""])[0]) if q.get("jid") else "")
        data = None
        if self.command == "POST":
            data = self.rfile.read(min(int(self.headers.get("Content-Length") or 0), 20000))
        req = urllib.request.Request(url, data=data, method=self.command, headers={"Content-Type": "application/json", "Authorization": self.headers.get("Authorization") or "", "X-Zap-Key": os.environ.get("ZAP_PROXY_KEY", "")})
        try:
            with urllib.request.urlopen(req, timeout=60) as r:
                code, body = r.status, r.read()
        except urllib.error.HTTPError as e:
            code, body = e.code, e.read()
        except Exception:
            code, body = 504, json.dumps({"error": "O servidor do WhatsApp não respondeu."}).encode()
        self.send_response(code)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_POST(self):
        if self.path.startswith("/__zap?"):
            return self.zap_proxy()
        if self.path.split("?")[0] == "/__ai":
            n = min(int(self.headers.get("Content-Length") or 0), 200 * 1024)
            try:
                payload = json.loads(self.rfile.read(n).decode("utf-8") or "{}")
            except ValueError:
                payload = {}
            token = (self.headers.get("Authorization") or "").replace("Bearer ", "").strip()
            code, out = ai_answer(token, payload)
            body = json.dumps(out, ensure_ascii=False).encode("utf-8")
            self.send_response(code)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)
            return
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
