/* Tela inicial: data e clima, busca, continuar, favoritos, índice de categorias e
   todas as categorias em rolagem contínua. Grade ou lista, à escolha. */

/* [categoria, ícone] na ordem em que aparecem */
var CATS = [["Essenciais", "check"], ["Ferramentas", "pencil"], ["Estilo de vida", "heart"], ["Notícias", "text"], ["Brasil", "flag"], ["Mundo", "map"], ["Cultura", "film"], ["Finanças", "coin"], ["Dev", "hash"], ["Diversão", "bulb"], ["Jogos", "dice"], ["Jogos para dois", "users"], ["Comunidade", "forum"]];

function byId(id) { for (var i = 0; i < apps.length; i++) if (apps[i].id === id) return apps[i]; return null; }
function fill(el, nodes) { el.replaceChildren.apply(el, nodes); }
function isList() { return S.settings.view === "list"; }
function listMode() { return editing || isList(); }
function slug(s) { return "c-" + plain(s).replace(/[^a-z0-9]+/g, "-"); }
function pageY(el) { var y = 0; while (el) { y += el.offsetTop || 0; el = el.offsetParent; } return y; }
function goTo(id) { var el = document.getElementById(id); if (el) window.scrollTo(0, Math.max(0, pageY(el) - 8)); }
function toTop() { window.scrollTo(0, 0); }

function tile(a, withCat) {
  var fav = inList(S.favs, a.id), hid = inList(S.hidden, a.id);
  return h("div", { "class": "t" + (hid ? " hid" : ""), role: "button", tabindex: "0", onclick: function () { if (!editing) openApp(a.id); } },
    h("span", { "class": "ti" }, ic(a.i, listMode() ? 24 : 28)),
    h("span", { "class": "tn" }, h("b", {}, a.n), withCat ? h("small", {}, a.c) : null),
    h("span", { "class": "tg" }, ic("chev", 18)),
    h("span", { "class": "mini" },
      h("button", { "class": "ib sm" + (fav ? " on" : ""), "aria-label": "Favoritar", onclick: function (e) { e.stopPropagation(); toggle(S.favs, a.id); } }, ic("star", 18, fav)),
      h("button", { "class": "ib sm", "aria-label": hid ? "Mostrar" : "Ocultar", onclick: function (e) { e.stopPropagation(); toggle(S.hidden, a.id); } }, ic(hid ? "eyeoff" : "eye", 18))));
}
function block(list, withCat) { return h("div", { "class": listMode() ? "lst" : "grid" }, list.map(function (a) { return tile(a, withCat); })); }
function section(name, list, id, withCat) {
  return h("div", { "class": "cs", id: id },
    h("div", { "class": "sech" }, h("h2", {}, name),
      h("span", { "class": "tools" }, h("span", { "class": "cnt" }, String(list.length)), h("button", { "class": "ib sm", "aria-label": "Voltar ao topo", onclick: toTop }, ic("up", 18)))),
    block(list, withCat));
}
function byName(a, b) { var x = plain(a.n), y = plain(b.n); return x < y ? -1 : x > y ? 1 : 0; }

/* Abas: "home" (destaques, recentes, favoritos e todos os apps), "all" (todas as categorias em seções) ou o nome de uma categoria */
var tab = "home", finding = false;
var FEAT = [["news", "G1, Agência Brasil, BBC e mais"], ["weather", "Previsão para a sua cidade"], ["calendar", "Seus compromissos do mês"],
  ["ai", "Pergunte, resuma e traduza"], ["notes", "Escreva e leve para todo lado"], ["wiki", "Leia qualquer artigo aqui mesmo"]];
function catOrder() {
  var order = CATS.slice(), known = {};
  order.forEach(function (c) { known[c[0]] = 1; });
  apps.forEach(function (a) { if (!known[a.c]) { known[a.c] = 1; order.push([a.c, "app"]); } });
  return order;
}
function setTab(t) { tab = t; finding = false; $("#search").value = ""; renderHome(); toTop(); }
function renderTabs() {
  var mk = function (id, label, icon) {
    return h("button", { "class": "tab" + (tab === id ? " on" : ""), "aria-label": icon && !label ? (id === "home" ? "Início" : "Todas as categorias") : null, onclick: function () { setTab(id); } }, icon ? ic(icon, 16) : null, label || null);
  };
  var list = [mk("home", "", "home"), mk("all", "", "grid")];
  catOrder().forEach(function (c) { if (apps.some(function (a) { return a.c === c[0]; })) list.push(mk(c[0], c[0])); });
  fill($("#tabs"), list);
}
function renderFeat() {
  fill($("#feat"), FEAT.map(function (f) {
    var a = byId(f[0]); if (!a) return null;
    return h("div", { "class": "fc", role: "button", tabindex: "0", onclick: function () { openApp(a.id); } },
      h("span", { "class": "fi" }, ic(a.i, 26)), h("span", { "class": "ft" }, h("b", {}, a.n), h("i", {}, f[1])));
  }));
}

function renderHome() {
  var q = plain($("#search").value.replace(/^\s+|\s+$/g, ""));
  var vis = function (a) { return editing || !inList(S.hidden, a.id); };
  var home = tab === "home" && !q;
  var rec = S.recents.map(byId).filter(function (a) { return a && vis(a); }).slice(0, (window.innerWidth || 800) <= 600 ? 5 : 6);
  var fav = S.favs.map(byId).filter(function (a) { return a && vis(a); });
  renderTabs();
  show($("#feat"), home && !editing); if (home) renderFeat();
  show($("#sec-recent"), home && rec.length > 0); fill($("#g-recent"), [block(rec)]);
  show($("#sec-fav"), home && fav.length > 0); fill($("#g-fav"), [block(fav)]);
  show($("#searchrow"), finding || !!q); show($("#edit-tip"), editing);

  var title = "Todos os apps", nodes;
  if (q) {
    var res = apps.filter(function (a) { return vis(a) && (plain(a.n).indexOf(q) >= 0 || plain(a.c).indexOf(q) >= 0); }).sort(byName);
    title = res.length + (res.length === 1 ? " resultado" : " resultados");
    nodes = [res.length ? block(res, true) : h("p", { "class": "empty" }, "Nenhum app com esse nome. Tente outra palavra.")];
  } else if (tab === "home") {
    nodes = [block(apps.filter(vis).sort(byName))];
  } else if (tab === "all") {
    title = "Todas as categorias";
    nodes = [];
    catOrder().forEach(function (c) {
      var list = apps.filter(function (a) { return a.c === c[0] && vis(a); }).sort(byName);
      if (list.length) nodes.push(h("div", { "class": "subh" }, h("span", {}, c[0]), h("small", {}, String(list.length))), block(list));
    });
  } else {
    var lc = apps.filter(function (a) { return a.c === tab && vis(a); }).sort(byName);
    title = tab; nodes = [block(lc)];
  }
  $("#all-title").textContent = title;
  fill($("#g-all"), nodes);
  $("#view-home").className = editing ? "editing" : "";
  $("#edit-lbl").textContent = editing ? "Concluir" : "Editar";
  $("#btn-view").replaceChildren(ic(isList() ? "grid" : "rows", 16));
  scheduleFix();
}

/* Relógio no topo; dia da semana e data na abertura */
function tick() {
  var d = new Date();
  $("#clock").textContent = d.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
  var wd = d.toLocaleDateString("pt-BR", { weekday: "long" });
  $("#date").textContent = wd.charAt(0).toUpperCase() + wd.slice(1) + ", " + d.toLocaleDateString("pt-BR", { day: "numeric", month: "long" });
}

/* Clima: temperatura, ícone, descrição, máxima e mínima */
function wxInfo(code, day) {
  if (code === 0) return [day ? "sun" : "moon", "Céu limpo"];
  if (code <= 2) return ["partly", "Poucas nuvens"];
  if (code === 3) return ["cloud", "Nublado"];
  if (code === 45 || code === 48) return ["fog", "Neblina"];
  if (code >= 51 && code <= 57) return ["rain", "Garoa"];
  if (code >= 61 && code <= 67) return ["rain", "Chuva"];
  if (code >= 71 && code <= 77) return ["snow", "Neve"];
  if (code >= 80 && code <= 82) return ["rain", "Pancadas de chuva"];
  if (code >= 85 && code <= 86) return ["snow", "Neve"];
  if (code >= 95) return ["storm", "Trovoadas"];
  return ["cloud", ""];
}
function showWx(d) {
  var w = wxInfo(d.code, d.day);
  $("#wx-ic").replaceChildren(ic(w[0], 20));
  $("#wx-temp").textContent = Math.round(d.temp) + "°";
  $("#weather-line").textContent = "";
  $("#wx-place").textContent = d.place ? " · " + String(d.place).split(",")[0] : "";
}
function weather(lat, lon, place) {
  api("https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + lon + "&current=temperature_2m,weather_code,is_day&timezone=auto").then(function (j) {
    var d = { temp: j.current.temperature_2m, code: j.current.weather_code, day: j.current.is_day !== 0, place: place, t: Date.now() };
    showWx(d); lsSet("unkindle.wxLast", JSON.stringify(d));
  }, function () { if (!lsGet("unkindle.wxLast")) $("#weather-line").textContent = "Clima indisponível"; });
}
