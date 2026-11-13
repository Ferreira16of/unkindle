/* Apps básicos: notas, tarefas, hábitos, leituras, calculadora, pomodoro, wikipédia, conversor e jogos simples. */

add("notes", "Notas", "notes", "Essenciais", function (b) {
  var ta = h("textarea", { placeholder: "Escreva sua nota…" }), list = h("ul", { "class": "list" }), editIdx = -1;
  var draw = function () {
    list.replaceChildren.apply(list, S.notes.map(function (n, i) {
      return h("li", {}, h("span", {}, n.slice(0, 80) + (n.length > 80 ? "…" : "")),
        h("button", { onclick: function () { ta.value = n; editIdx = i; } }, "Abrir"),
        h("button", { onclick: function () { S.notes.splice(i, 1); save(); draw(); } }, "Apagar"));
    }));
  };
  b.append(ta, h("div", { "class": "row" }, h("button", { "class": "solid", onclick: function () {
    if (!ta.value.replace(/\s/g, "")) return;
    if (editIdx >= 0) S.notes[editIdx] = ta.value; else S.notes.unshift(ta.value);
    ta.value = ""; editIdx = -1; save(); draw(); toast("Salvo");
  } }, "Salvar")), list); draw();
});

add("todo", "Tarefas", "todo", "Essenciais", function (b) {
  var i1 = h("input", { placeholder: "Nova tarefa" }), list = h("ul", { "class": "list" });
  var draw = function () {
    list.replaceChildren.apply(list, S.todos.map(function (t, i) {
      return h("li", {}, h("input", { type: "checkbox", checked: t.d ? "checked" : false, onchange: function (e) { t.d = e.target.checked; save(); draw(); } }),
        h("span", { "class": t.d ? "done" : "" }, t.t), h("button", { "aria-label": "Apagar", onclick: function () { S.todos.splice(i, 1); save(); draw(); } }, ic("x", 18)));
    }));
  };
  var add1 = function () { if (i1.value.replace(/\s/g, "")) { S.todos.unshift({ t: i1.value.replace(/^\s+|\s+$/g, ""), d: false }); i1.value = ""; save(); draw(); } };
  i1.addEventListener("keydown", function (e) { if (e.key === "Enter") add1(); }, false);
  b.append(h("div", { "class": "row" }, i1, h("button", { "class": "solid", onclick: add1 }, "Adicionar")), list); draw();
});



add("calc", "Calculadora", "calc", "Ferramentas", function (b) {
  var d = h("input", { readonly: "readonly", style: "width:100%;text-align:right;font-size:1.5em" }), g = h("div", { "class": "g4", style: "max-width:420px" }), ex = "";
  "7 8 9 / 4 5 6 * 1 2 3 - 0 . = +".split(" ").forEach(function (k) {
    g.appendChild(h("button", { style: "height:52px;font-size:1.2em", onclick: function () {
      if (k === "=") { try { if (!/^[0-9+\-*/. ]+$/.test(ex)) throw 0; ex = String(Function('"use strict";return(' + ex + ")")()); } catch (e) { ex = "Erro"; } } else { if (ex === "Erro") ex = ""; ex += k; }
      d.value = ex; } }, k));
  });
  g.appendChild(h("button", { style: "width:100%;height:50px", onclick: function () { ex = ""; d.value = ""; } }, "Limpar"));
  b.append(d, h("div", { style: "height:8px" }), g);
});

add("pomo", "Pomodoro", "pomo", "Ferramentas", function (b) {
  var sec = 1500, iv = null, out = h("div", { "class": "big" }), info = h("p", { "class": "muted" });
  var show1 = function () { out.textContent = pad2(Math.floor(sec / 60)) + ":" + pad2(sec % 60); info.textContent = "Ciclos concluídos: " + S.pomos; };
  var stop = function () { clearInterval(iv); iv = null; };
  b.append(out, h("div", { "class": "row" },
    h("button", { "class": "solid", onclick: function () { if (iv) return; iv = setInterval(function () { sec--; if (sec <= 0) { stop(); S.pomos++; save(); sec = 1500; toast("Ciclo concluído!"); } show1(); }, 1000); } }, "Iniciar"),
    h("button", { onclick: stop }, "Pausar"), h("button", { onclick: function () { stop(); sec = 1500; show1(); } }, "Zerar")), info);
  onClose(b, stop); show1();
});





add("guess", "Adivinhe o número", "guess", "Jogos", function (b) {
  var n = 1 + rnd(100), tries = 0, i1 = h("input", { type: "number", placeholder: "1 a 100" }), m = h("p");
  b.append(h("div", { "class": "row" }, i1, h("button", { "class": "solid", onclick: function () {
    var v = +i1.value; if (!v) return; tries++;
    if (v === n) { m.textContent = "Acertou em " + tries + " tentativas!"; n = 1 + rnd(100); tries = 0; } else m.textContent = v < n ? "O número é maior." : "O número é menor."; } }, "Chutar")), m);
});
