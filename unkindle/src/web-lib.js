/* Motor de apps online: W(id, nome, ícone, categoria, {inputs, go, auto, btn, about}).
   go(valores) devolve (ou promete) nós/texto para mostrar. Erros viram uma mensagem amigável. */

var NOCONN = "Não foi possível carregar agora. Verifique a conexão ou tente de novo em instantes.";
function apiText(url, ms) {
  return new Promise(function (ok, no) {
    var t = setTimeout(function () { no(new Error("tempo esgotado")); }, ms || 15000);
    window.fetch(url).then(function (r) { return r.text().then(function (x) { clearTimeout(t); if (!r.ok) return no(new Error("HTTP " + r.status)); ok(x); }); })["catch"](function (e) { clearTimeout(t); no(e); });
  });
}
function para(t) { return h("p", {}, t); }
function big(t) { return h("div", { "class": "big" }, t); }
function note(t) { return h("p", { "class": "muted" }, t); }
function openInApp(url) { S.x.browserOpen = url; save(); openApp("browser"); }
function openBtn(url, label) { return h("button", { onclick: function () { openInApp(url); } }, label || "Abrir", " ", ic("ext", 16)); }
function imgEl(src, alt) { return h("img", { src: src, alt: alt || "", style: "display:block;margin:8px 0" }); }
function kv(rows) {
  return h("table", { "class": "kv" }, rows.filter(function (r) { return r && r[1] != null && r[1] !== "" && r[1] !== "undefined"; }).map(function (r) { return h("tr", {}, h("td", {}, r[0]), h("td", {}, String(r[1]))); }));
}
/* Lista simples: [{t, s, u}] */
function listOf(items) {
  if (!items.length) return note("Nada encontrado.");
  return h("ul", { "class": "list" }, items.map(function (it) {
    return h("li", {}, h("span", {}, h("b", {}, it.t), it.s ? h("br") : null, it.s ? h("small", {}, it.s) : null), it.u ? h("button", { "aria-label": "Abrir", onclick: function () { openInApp(it.u); } }, ic("ext", 18)) : null);
  }));
}
/* Lista com miniatura: [{t, s, img, extra}] */
function mediaList(items) {
  if (!items.length) return note("Nada encontrado.");
  return h("ul", { "class": "list" }, items.map(function (it) {
    return h("li", { "class": "card2" }, it.img ? h("div", { "class": "thumb" }, h("img", { src: it.img, alt: "" })) : null, h("div", {}, h("b", {}, it.t)), it.s ? h("div", {}, h("small", {}, it.s)) : null, it.extra || null);
  }));
}
function dbr(s) { var m = /^(\d{4})-(\d{2})-(\d{2})/.exec(s || ""); return m ? m[3] + "/" + m[2] + "/" + m[1] : (s || ""); }
function wkd(s) { var m = /^(\d{4})-(\d{2})-(\d{2})/.exec(s || ""); return m ? DIAS[new Date(+m[1], +m[2] - 1, +m[3]).getDay()] : ""; }
function num(v, d) { var n = Number(v); if (!isFinite(n)) return String(v); var p = n.toFixed(d == null ? 0 : d).split("."); p[0] = p[0].replace(/\B(?=(\d{3})+(?!\d))/g, "."); return p.join(","); }
function digits(s) { return String(s || "").replace(/\D/g, ""); }

/* Botão "Traduzir": traduz um texto em inglês para português e mostra abaixo. */
function trBtn(text) {
  var out = h("div");
  var b = h("button", { onclick: function () {
    out.replaceChildren(note("Traduzindo…"));
    api("https://api.mymemory.translated.net/get?q=" + encodeURIComponent(String(text).slice(0, 480)) + "&langpair=en|pt").then(function (j) { out.replaceChildren(h("div", { "class": "rt" }, txt(j.responseData.translatedText))); }, function () { out.replaceChildren(note("Tradução indisponível.")); });
  } }, "Traduzir para português");
  return h("div", {}, b, out);
}

/* Localização: onde você está (por IP) ou uma cidade digitada */
function geo(q) {
  return api("https://geocoding-api.open-meteo.com/v1/search?count=1&language=pt&name=" + encodeURIComponent(q)).then(function (j) {
    var r = j.results && j.results[0]; if (!r) throw new Error("Local não encontrado");
    return { lat: r.latitude, lon: r.longitude, name: r.name + (r.admin1 ? ", " + r.admin1 : "") + (r.country ? " – " + r.country : "") };
  });
}
var locCache = null;
function myLoc() {
  if (!locCache) locCache = ipLocations().then(function (p) { if (!p.length) return { lat: -23.55, lon: -46.63, name: "São Paulo" }; var b = medoid(p); return { lat: b.lat, lon: b.lon, name: b.city || "Sua região" }; });
  return locCache;
}
function place(v) { return v && v.q ? geo(v.q) : myLoc(); }
var PLACE_IN = [{ k: "q", ph: "Cidade (vazio = onde você está)", def: "" }];

/* O motor */
function W(id, n, icon, cat, o) {
  add(id, n, icon, cat, function (b) {
    var fields = (o.inputs || []).map(function (f) {
      var el = f.opts
        ? h("select", {}, f.opts.map(function (op) { return h("option", { value: op[0], selected: op[0] === f.def ? "selected" : false }, op[1]); }))
        : h("input", { type: f.type || "text", placeholder: f.ph, value: f.def != null ? f.def : "" });
      return { k: f.k, el: el };
    });
    var out = h("div", { "class": "web" });
    var read = function () { var v = {}; fields.forEach(function (f) { v[f.k] = f.el.value.replace(/^\s+|\s+$/g, ""); }); return v; };
    var run = function () {
      out.replaceChildren(note("Carregando…"));
      var p; try { p = Promise.resolve(o.go(read(), b)); } catch (e) { p = Promise.reject(e); }
      p.then(function (r) { out.replaceChildren.apply(out, [].concat(r)); }, function (e) { if (!(e && e.userMsg)) rep({ tipo: "online-falhou", app: id, msg: String(e && e.message || e), status: e && e.status || "" }); out.replaceChildren(para(e && e.userMsg ? e.userMsg : NOCONN), note(String(e && e.message || ""))); });
    };
    fields.forEach(function (f) { if (f.el.tagName === "INPUT") f.el.addEventListener("keydown", function (e) { if (e.key === "Enter") run(); }, false); else f.el.onchange = run; });
    b.append(o.about ? note(o.about) : null, h("div", { "class": "row" }, fields.map(function (f) { return f.el; }), h("button", { "class": "solid", onclick: run }, o.btn || (fields.length ? "Buscar" : "Atualizar"))), out);
    if (o.auto !== false) run();
  });
}
function userErr(msg) { var e = new Error(msg); e.userMsg = msg; return e; }

/* Leitor de feeds RSS (via rss2json) */
function feedNodes(url, tries) {
  tries = tries == null ? 3 : tries;
  return api("https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(url)).then(function (j) {
    if (j.status && j.status !== "ok") throw userErr("Esse feed não está disponível agora.");
    return listOf((j.items || []).slice(0, 30).map(function (i) { return { t: txt(i.title), s: (i.pubDate || "").slice(0, 16) + (i.description ? " · " + txt(i.description).replace(/\s+/g, " ").slice(0, 120) : ""), u: i.link }; }));
  }, function (e) {
    /* o conversor de feeds limita feeds novos em pouco tempo: espera e tenta de novo */
    if (e && e.status === 429 && tries > 0) return new Promise(function (ok) { setTimeout(ok, 3500); }).then(function () { return feedNodes(url, tries - 1); });
    throw e;
  });
}
function feedApp(id, n, icon, url, cat) { W(id, n, icon, cat || "Notícias", { go: function () { return feedNodes(url); } }); }
