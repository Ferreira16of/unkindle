/* Camada de compatibilidade para navegadores antigos (Kindle).
   Tudo aqui é compilado para ES5 e roda depois dos polyfills do core-js. */

var $ = function (s, e) { return (e || document).querySelector(s); };
var lsGet = function (k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } };
var lsSet = function (k, v) { try { window.localStorage.setItem(k, v); } catch (e) {} };
var lsDel = function (k) { try { window.localStorage.removeItem(k); } catch (e) {} };
var show = function (el, on) { el.style.display = on ? "" : "none"; };
var today = function () { var d = new Date(), p = function (n) { return (n < 10 ? "0" : "") + n; }; return d.getFullYear() + "-" + p(d.getMonth() + 1) + "-" + p(d.getDate()); };

/* ---------- Datas em português, sem depender de Intl ---------- */
var MESES = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
var DIAS = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
var pad2 = function (n) { return (n < 10 ? "0" : "") + n; };
Date.prototype.toLocaleDateString = function (loc, o) {
  var d = this;
  if (!o) return pad2(d.getDate()) + "/" + pad2(d.getMonth() + 1) + "/" + d.getFullYear();
  var wd = o.weekday ? (o.weekday === "long" ? DIAS[d.getDay()] : DIAS[d.getDay()].slice(0, 3)) : "", core = "";
  var mes = o.month ? (o.month === "long" ? MESES[d.getMonth()] : MESES[d.getMonth()].slice(0, 3)) : "";
  if (o.month && o.day) core = d.getDate() + " de " + mes + (o.year ? " de " + d.getFullYear() : "");
  else if (o.month) core = mes + (o.year ? " de " + d.getFullYear() : "");
  else if (o.day) core = String(d.getDate());
  else if (o.year) core = String(d.getFullYear());
  return wd && core ? wd + ", " + core : wd || core;
};
Date.prototype.toLocaleTimeString = function (loc, o) {
  var d = this, s = pad2(d.getHours()) + ":" + pad2(d.getMinutes());
  return o && (o.hour || o.minute) ? s : s + ":" + pad2(d.getSeconds());
};

/* ---------- Rede: fetch por XHR quando não existe, com tempo limite ---------- */
function xhrFetch(url, opt) {
  opt = opt || {};
  return new Promise(function (resolve, reject) {
    var x = new XMLHttpRequest();
    x.open(opt.method || "GET", url, true);
    var hd = opt.headers || {};
    for (var k in hd) if (Object.prototype.hasOwnProperty.call(hd, k)) x.setRequestHeader(k, hd[k]);
    x.onload = function () {
      resolve({ ok: x.status >= 200 && x.status < 300, status: x.status,
        text: function () { return Promise.resolve(x.responseText); },
        json: function () { return new Promise(function (res, rej) { try { res(JSON.parse(x.responseText)); } catch (e) { rej(e); } }); } });
    };
    x.onerror = function () { reject(new Error("rede")); };
    x.send(opt.body || null);
  });
}
if (!window.fetch) window.fetch = xhrFetch;
if (!window.AbortController) window.AbortController = function () { this.signal = {}; this.abort = function () {}; };
function api(url, opt) {
  return new Promise(function (resolve, reject) {
    var t = setTimeout(function () { reject(new Error("tempo esgotado")); }, 15000);
    window.fetch(url, opt).then(function (r) {
      return r.text().then(function (txt) {
        clearTimeout(t);
        var j = null; try { j = txt ? JSON.parse(txt) : null; } catch (e) {}
        if (!r.ok) { var er = new Error((j && (j.msg || j.error_description || j.message || j.reason || (typeof j.error === "string" ? j.error : ""))) || "HTTP " + r.status); er.status = r.status; return reject(er); }
        resolve(j);
      });
    })["catch"](function (e) { clearTimeout(t); reject(e); });
  });
}

/* ---------- DOM: métodos modernos que o Kindle não tem ---------- */
var toNodes = function (args) {
  var f = document.createDocumentFragment();
  for (var i = 0; i < args.length; i++) { var n = args[i]; if (n == null || n === false) continue; f.appendChild(n && n.nodeType ? n : document.createTextNode(String(n))); }
  return f;
};
var fixTimer = null;
function scheduleFix() { if (fixTimer) return; fixTimer = setTimeout(function () { fixTimer = null; squarify(); }, 25); }
function squarify() {
  var els = document.querySelectorAll("[data-sq]");
  for (var i = 0; i < els.length; i++) {
    var w = els[i].offsetWidth;
    if (w && els[i].style.height !== w + "px") { els[i].style.height = w + "px"; if (els[i].getAttribute("data-ctr")) els[i].style.lineHeight = Math.max(0, w - 6) + "px"; }
  }
}
Element.prototype.append = function () { this.appendChild(toNodes(arguments)); scheduleFix(); };
Element.prototype.prepend = function () { this.insertBefore(toNodes(arguments), this.firstChild); scheduleFix(); };
Element.prototype.replaceChildren = function () { while (this.firstChild) this.removeChild(this.firstChild); this.appendChild(toNodes(arguments)); scheduleFix(); };
window.addEventListener("resize", scheduleFix, false);

/* ---------- Estilos inline: traduz CSS moderno para o que o Kindle entende ---------- */
var THEME = lsGet("unkindle.theme") === "light" ? "light" : "dark";
var PAL = THEME === "light"
  ? { TXT: "#000000", BG: "#ffffff", SURF: "#ffffff", SURF2: "#e0e0e0", LINE: "#000000", MUT: "#3c3c3c", MUT2: "#777777" }
  : { TXT: "#ffffff", BG: "#000000", SURF: "#000000", SURF2: "#3a3a3a", LINE: "#ffffff", MUT: "#c4c4c4", MUT2: "#8c8c8c" };
var VARS = { "--line": PAL.LINE, "--fg": PAL.TXT, "--bg": PAL.BG, "--card": PAL.SURF, "--mut": PAL.MUT };
var HEXMAP = { "000000": "TXT", "ffffff": "SURF", "dddddd": "SURF2", "cccccc": "SURF2", "eeeeee": "SURF2", "999999": "MUT2", "888888": "MUT2", "777777": "MUT2", "aaaaaa": "MUT2", "444444": "MUT", "555555": "MUT", "333333": "MUT", "222222": "MUT" };
/* No tema escuro, preto/branco dos estilos antigos viram as cores da paleta. Use keep-colors:1 para manter as cores literais. */
function mapColors(prop, val) {
  if (THEME === "light") return val;
  return val.replace(/#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g, function (m, hx) {
    if (hx.length === 3) hx = hx.charAt(0) + hx.charAt(0) + hx.charAt(1) + hx.charAt(1) + hx.charAt(2) + hx.charAt(2);
    var key = HEXMAP[hx.toLowerCase()]; if (!key) return m;
    if (key === "TXT" && /^(border|outline)/.test(prop)) key = "LINE";
    return PAL[key];
  });
}
var PREFIXED = { "border-radius": 1, "box-shadow": 1, "transform": 1, "box-sizing": 1 };
var DROP = /^(gap|row-gap|column-gap|justify-content|align-items|align-content|align-self|flex|flex-wrap|flex-direction|flex-grow|flex-shrink|place-items|justify-items|grid-template-columns|grid-template-rows|grid-column|grid-row|aspect-ratio|keep-colors)$/;
function countCols(v) {
  if (!v) return 0;
  if (/auto-(fit|fill)/.test(v)) return 2;
  v = v.replace(/repeat\(\s*(\d+)\s*,\s*[^)]*\)/g, function (m, n) { return new Array(+n + 1).join("x "); });
  return v.replace(/^\s+|\s+$/g, "").split(/\s+/).length;
}
function fixStyle(css) {
  var map = {}, order = [], parts = String(css || "").split(";"), i;
  for (i = 0; i < parts.length; i++) {
    var p = parts[i], k = p.indexOf(":"); if (k < 0) continue;
    var name = p.slice(0, k).replace(/^\s+|\s+$/g, "").toLowerCase(), val = p.slice(k + 1).replace(/^\s+|\s+$/g, "").replace(/var\((--[a-z-]+)\)/g, function (m, n) { return VARS[n] || "#000"; });
    if (!(name in map)) order.push(name); map[name] = val;
  }
  if (!map["keep-colors"]) for (var mk in map) map[mk] = mapColors(mk, map[mk]);
  var d = map.display || "", cols = 0, sq = !!map["aspect-ratio"], center = false, alignC = map["align-items"] === "center";
  if (d === "grid") { cols = countCols(map["grid-template-columns"]) || 1; d = ""; }
  if (/flex/.test(d)) { d = d === "inline-flex" ? "inline-block" : "block"; if (alignC && /px$/.test(map.height || "")) map["line-height"] = map.height; center = true; }
  if (/center|space-/.test(map["justify-content"] || "")) center = true;
  if (center) { if (!("text-align" in map)) order.push("text-align"); map["text-align"] = "center"; }
  if (map["grid-column"]) { d = "block"; if (!("width" in map)) order.push("width"); map.width = "100%"; }
  if (d) { if (!("display" in map)) order.push("display"); map.display = d; } else delete map.display;
  var out = [];
  for (i = 0; i < order.length; i++) {
    var n = order[i]; if (!(n in map) || DROP.test(n)) continue;
    out.push(n + ":" + map[n]);
    if (PREFIXED[n]) out.push("-webkit-" + n + ":" + map[n]);
  }
  return { css: out.join(";"), cols: cols, sq: sq, ctr: sq && alignC };
}
function setStyle(el, css) {
  var f = fixStyle(css);
  el.setAttribute("style", f.css);
  el.className = el.className.replace(/(^|\s)g\d+(?=\s|$)/g, "").replace(/\s+/g, " ").replace(/^\s|\s$/g, "") + (f.cols ? " g" + f.cols : "");
  if (f.sq) el.setAttribute("data-sq", "1");
  scheduleFix();
}

/* Cria elementos: h("div", {class, style, onclick, ...}, filhos...) */
function h(tag, attrs) {
  var el = document.createElement(tag), cls = "", k;
  attrs = attrs || {};
  for (k in attrs) {
    if (!Object.prototype.hasOwnProperty.call(attrs, k)) continue;
    var v = attrs[k];
    if (k === "class") cls = v;
    else if (k.slice(0, 2) === "on") el.addEventListener(k.slice(2), v, false);
    else if (k === "style") { var f = fixStyle(v); el.setAttribute("style", f.css); if (f.cols) cls += " g" + f.cols; if (f.sq) el.setAttribute("data-sq", "1"); if (f.ctr) el.setAttribute("data-ctr", "1"); }
    else if (v !== false && v != null) el.setAttribute(k, v);
  }
  if (cls) el.className = cls;
  var add = function (x) {
    if (Object.prototype.toString.call(x) === "[object Array]") { for (var j = 0; j < x.length; j++) add(x[j]); }
    else if (x !== false && x != null) el.appendChild(x.nodeType ? x : document.createTextNode(String(x)));
  };
  for (var i = 2; i < arguments.length; i++) add(arguments[i]);
  /* Botão só com ícone (ex.: apagar): marca para o CSS deixar sem moldura */
  if (tag === "button" && !(el.textContent || "").replace(/\s/g, "") && el.getElementsByTagName("svg").length) el.className = (el.className ? el.className + " " : "") + "ic-only";
  return el;
}

/* Toque e mouse sem Pointer Events (o Kindle não tem). Callbacks recebem {clientX, clientY}. */
function onPointer(el, down, move, up) {
  var active = false, touched = false;
  var pt = function (e) { var t = (e.touches && e.touches[0]) || (e.changedTouches && e.changedTouches[0]) || e; return { clientX: t.clientX, clientY: t.clientY }; };
  el.addEventListener("touchstart", function (e) { touched = true; active = true; if (e.preventDefault) e.preventDefault(); down && down(pt(e)); }, false);
  el.addEventListener("touchmove", function (e) { if (!active) return; if (e.preventDefault) e.preventDefault(); move && move(pt(e)); }, false);
  el.addEventListener("touchend", function (e) { if (!active) return; active = false; up && up(pt(e)); }, false);
  el.addEventListener("mousedown", function (e) { if (touched) return; active = true; down && down(e); }, false);
  el.addEventListener("mousemove", function (e) { if (!active || touched) return; move && move(e); }, false);
  document.addEventListener("mouseup", function (e) { if (!active || touched) return; active = false; up && up(e); }, false);
}
