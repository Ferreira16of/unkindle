/* Relatórios técnicos do aparelho (JavaScript antigo, ES3, de propósito: roda antes do app e em qualquer Kindle).
   Envia ao próprio servidor que hospeda a página (POST /__report): erros, apps que falharam e se o app iniciou.
   Não envia nada do que você digita nem seus dados. Se o servidor não aceitar, nada acontece. */
(function () {
  window.__ukT0 = new Date().getTime();
  var sent = 0, sid = String(new Date().getTime()).slice(-6) + Math.floor(Math.random() * 1000);
  function enc(o) {
    if (window.JSON && JSON.stringify) return JSON.stringify(o);
    var s = [], k;
    for (k in o) if (o.hasOwnProperty(k)) s.push('"' + k + '":"' + String(o[k]).replace(/["\\]/g, "'").replace(/[\r\n]+/g, " ") + '"');
    return "{" + s.join(",") + "}";
  }
  function report(o) {
    if (sent >= 40) return;
    sent++;
    try {
      o.ua = navigator.userAgent;
      o.tela = (window.innerWidth || 0) + "x" + (window.innerHeight || 0);
      o.pagina = location.pathname + location.hash;
      o.sessao = sid;
      var x = new XMLHttpRequest();
      x.open("POST", "/__report", true);
      x.setRequestHeader("Content-Type", "text/plain");
      x.send(enc(o));
    } catch (e) {}
  }
  window.__ukReport = report;

  var prev = window.onerror;
  window.onerror = function (msg, src, line, col, err) {
    report({ tipo: "erro", msg: String(msg), arquivo: src || "", linha: line || 0, coluna: col || 0, pilha: err && err.stack ? String(err.stack).slice(0, 1500) : "" });
    if (prev) return prev.apply(this, arguments);
    return false;
  };
  if (window.addEventListener) window.addEventListener("unhandledrejection", function (e) {
    var r = e && e.reason;
    report({ tipo: "promessa", msg: r && r.message ? String(r.message) : String(r), pilha: r && r.stack ? String(r.stack).slice(0, 1500) : "" });
  }, false);

  /* Se a tela inicial não ficou pronta, avisa (provável erro de carregamento ou recurso não suportado) */
  function check() { if (!window.__uk && /index\.html$|\/$/.test(location.pathname)) report({ tipo: "nao-iniciou" }); }
  if (window.addEventListener) window.addEventListener("load", function () { setTimeout(check, 6000); }, false);
  else window.onload = function () { setTimeout(check, 6000); };
})();
