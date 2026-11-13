/* Utilitários compartilhados pelos módulos de apps. */
var add = function (id, n, i, c, r) { apps.push({ id: id, n: n, i: i, c: c, r: r }); };
var onClose = function (b, fn) { var p = b._cleanup; b._cleanup = function () { if (p) p(); fn(); }; };
var btn = function (t, f, cls) { return h("button", { "class": cls || "", onclick: f }, t); };
var inp = function (ph, type, extra) { var a = { placeholder: ph, type: type || "text" }; for (var k in (extra || {})) a[k] = extra[k]; return h("input", a); };
var rnd = function (n) { return Math.floor(Math.random() * n); };
var pick = function (a) { return a[rnd(a.length)]; };
var shuffle = function (a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = rnd(i + 1), t = a[i]; a[i] = a[j]; a[j] = t; } return a; };
var last = function (a) { return a[a.length - 1]; };
/* Texto puro de um trecho de HTML de terceiros, sem executar nada. */
var txt = function (html) {
  html = html || "";
  try { var d = new DOMParser().parseFromString(html, "text/html"); if (d && d.body) return d.body.textContent; } catch (e) {}
  return html.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'");
};
var loadScript = function (src) {
  return new Promise(function (ok, no) {
    loadScript.c = loadScript.c || {};
    if (loadScript.c[src]) return ok();
    var s = document.createElement("script"); s.src = src; s.onload = function () { loadScript.c[src] = 1; ok(); }; s.onerror = function () { no(new Error("script")); }; document.head.appendChild(s);
  });
};
var cv = function (w, hh) { return h("canvas", { width: w, height: hh, "class": "cv", style: "max-width:100%;background:#fff;display:block;keep-colors:1" }); };
var ptr = function (c, e) { var r = c.getBoundingClientRect(); return [(e.clientX - r.left) * c.width / r.width, (e.clientY - r.top) * c.height / r.height]; };
function drawing(c, st) {
  var g = c.getContext("2d"), d = false, lp;
  g.lineCap = "round"; g.lineJoin = "round";
  onPointer(c, function (e) { d = true; lp = ptr(c, e); g.fillStyle = st.color; g.beginPath(); g.arc(lp[0], lp[1], st.size / 2, 0, 7); g.fill(); },
    function (e) { if (!d) return; var p = ptr(c, e); g.strokeStyle = st.color; g.lineWidth = st.size; g.beginPath(); g.moveTo(lp[0], lp[1]); g.lineTo(p[0], p[1]); g.stroke(); lp = p; },
    function () { d = false; });
}
function keys(b, fn) {
  var f = function (e) { if (/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)) return; fn(e.key, e); if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].indexOf(e.key) >= 0 && e.preventDefault) e.preventDefault(); };
  document.addEventListener("keydown", f, false); onClose(b, function () { document.removeEventListener("keydown", f, false); });
}
function dpad(fn) {
  var k = function (l, key, icon) { return h("button", { "aria-label": l, style: "min-width:60px;min-height:52px", onclick: function () { fn(key); } }, ic(icon, 24)); };
  return h("div", { "class": "row", style: "justify-content:center" }, k("Esquerda", "ArrowLeft", "back"), k("Cima", "ArrowUp", "up"), k("Baixo", "ArrowDown", "down"), k("Direita", "ArrowRight", "fwd"));
}
/* Guarda o estado de um jogo/app: volta de onde parou, em qualquer aparelho da conta */
var keepT = {};
function keepGet(k) { var v = S.x["save_" + k]; return v ? JSON.parse(JSON.stringify(v)) : null; }
function keepPut(k, v) { S.x["save_" + k] = v; clearTimeout(keepT[k]); keepT[k] = setTimeout(save, 600); }
function keepDel(k) { delete S.x["save_" + k]; save(); }
function loop(b, fn, ms) { var id = setInterval(fn, ms || 100); onClose(b, function () { clearInterval(id); }); return id; }
function linkApp(id, n, i, c, url, desc) {
  add(id, n, i, c, function (b) { b.append(h("p", {}, desc), h("p", { "class": "muted" }, "Este serviço exige conta própria e abre em outra aba."), btn("Abrir " + n, function () { window.open(url, "_blank"); }, "solid")); });
}
/* Lista genérica: campos [{k, ph, type?, multi?}], opções {done, show, extra, head}. Dados em S.x[key]. */
function listApp(b, key, fields, o) {
  o = o || {};
  var items = X(key, []);
  var ins = fields.map(function (f) { return h(f.multi ? "textarea" : "input", { placeholder: f.ph, type: f.type || "text", style: f.multi ? "min-height:90px" : "" }); });
  var list = h("ul", { "class": "list" }), head = h("p", { "class": "muted" }), emp = h("div", { "class": "empty2" }, o.empty || "Nada por aqui ainda. Use o campo acima para adicionar.");
  var draw = function () {
    head.textContent = o.head ? o.head(items) : items.length + (items.length === 1 ? " item" : " itens");
    show(emp, !items.length); show(list, !!items.length); show(head, !!items.length);
    list.replaceChildren.apply(list, items.map(function (it, i) {
      return h("li", {},
        o.done ? h("input", { type: "checkbox", checked: it.d ? "checked" : false, onchange: function (e) { it.d = e.target.checked; save(); draw(); } }) : null,
        h("span", { "class": it.d ? "done" : "" }, o.show ? o.show(it) : fields.map(function (f) { return it[f.k]; }).filter(Boolean).join(" — ")),
        o.extra ? o.extra(it, i, draw) : null,
        h("button", { "aria-label": "Apagar", onclick: function () { items.splice(i, 1); save(); draw(); } }, ic("x", 18)));
    }));
  };
  var add1 = function () {
    var it = {}; fields.forEach(function (f, i) { it[f.k] = ins[i].value.replace(/^\s+|\s+$/g, ""); });
    if (!it[fields[0].k]) return; it.date = today(); items.unshift(it); ins.forEach(function (i) { i.value = ""; }); save(); draw();
  };
  ins.forEach(function (i) { if (i.tagName === "INPUT") i.addEventListener("keydown", function (e) { if (e.key === "Enter") add1(); }, false); });
  b.append(h("div", { "class": "row" }, ins, btn("Adicionar", add1, "solid")), head, list, emp); draw();
  return { items: items, draw: draw };
}
