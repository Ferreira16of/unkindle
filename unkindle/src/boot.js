/* Inicialização: roda depois que todos os módulos de apps foram registrados. */
function boot() {
  $("#modal-x").onclick = closeModal;
  var links = document.querySelectorAll("[data-modal]");
  for (var i = 0; i < links.length; i++) (function (a) { a.onclick = function (e) { if (e.preventDefault) e.preventDefault(); pages[a.getAttribute("data-modal")](); return false; }; })(links[i]);
  $("#btn-auth").onclick = function () { pages.auth(); };
  $("#btn-signup").onclick = function () { pages.auth("up"); };
  $("#btn-login").onclick = function () { pages.auth("in"); };
  $("#btn-set").onclick = function () { pages.settings(); };
  $("#wx").onclick = function () { openApp("weather"); };
  $("#btn-find").onclick = function () { finding = !finding; if (!finding) $("#search").value = ""; renderHome(); if (finding) $("#search").focus(); };
  $("#btn-view").onclick = function () { S.settings.view = isList() ? "grid" : "list"; save(); renderHome(); };
  $("#logo").onclick = function (e) { if (e.preventDefault) e.preventDefault(); goHome(); setTab("home"); return false; };
  $("#btn-edit").onclick = function () { editing = !editing; renderHome(); };
  $("#clear-recent").onclick = function () { S.recents = []; save(); renderHome(); };
  $("#search").oninput = function () { renderHome(); }; $("#back").onclick = closeApp;
  $("#app-fav").onclick = function () { toggle(S.favs, current.id); favBtn(); };
  document.addEventListener("keydown", function (e) {
    var tg = document.activeElement && document.activeElement.tagName;
    if (e.key === "/" && !/INPUT|TEXTAREA|SELECT/.test(tg)) { if (e.preventDefault) e.preventDefault(); if (curView === "app") closeApp(); finding = true; renderHome(); $("#search").focus(); }
    if (e.key === "Escape") closeModal();
  }, false);
  var icons = document.querySelectorAll("i[data-ic]");
  for (var j = icons.length - 1; j >= 0; j--) icons[j].parentNode.replaceChild(ic(icons[j].getAttribute("data-ic"), 20), icons[j]);
  var padTop = function () { var hd = $("#hdr"); if (hd) document.body.style.paddingTop = hd.offsetHeight + "px"; };
  window.addEventListener("resize", padTop, false); setTimeout(padTop, 0); setTimeout(padTop, 1500);
  $("#app-body").addEventListener("input", draftInput, false);
  applyFont(); setAuthLbl(); tick(); setInterval(tick, 30000); renderHome(); locate();
  bootIdx = stIdx() || 1; if (!stIdx()) { navIdx = 1; try { history.replaceState({ uk: 1 }, "", location.href); } catch (e) {} } else navIdx = stIdx();
  homeIdx = here() ? null : bootIdx;
  if (here()) route();
  if (remote && session) pull();
  var nat = function (f) { return typeof f === "function" && /\[native code\]/.test(Function.prototype.toString.call(f)); };
  rep({ tipo: "iniciou", apps: apps.length, ms: window.__ukT0 ? new Date().getTime() - window.__ukT0 : "", fetchNativo: nat(window.fetch), promiseNativa: nat(window.Promise), svg: !!document.querySelector("#top svg"), tema: THEME });
}
window.__uk = { apps: apps, openApp: openApp, closeApp: closeApp, doOpenApp: doOpenApp, doCloseApp: doCloseApp, go: go, pages: pages, get S() { return S; } };
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot, false); else boot();
