"use strict";
/* WhatsApp no Kindle: o app fala com /__zap (ponte da Vercel), que fala com o servidor Unkindle Zap na Render.
   A conta do WhatsApp fica pareada no servidor como "aparelho conectado". */
function zapCall(op, body, jid) {
  if (!session) return Promise.reject(userErr("Entre na sua conta para usar o WhatsApp."));
  return ensureToken().then(() => new Promise((ok, no) => {
    const x = new XMLHttpRequest();
    x.open(body ? "POST" : "GET", "/__zap?op=" + op + (jid ? "&jid=" + encodeURIComponent(jid) : ""), true);
    x.setRequestHeader("Content-Type", "application/json");
    x.setRequestHeader("Authorization", "Bearer " + session.access_token);
    x.timeout = 70000;
    x.onload = () => { let j = null; try { j = JSON.parse(x.responseText); } catch (e) {}
      if (x.status === 200 && j) ok(j); else { const e = userErr((j && j.error) || "O servidor do WhatsApp não respondeu agora."); e.status = x.status; no(e); } };
    x.onerror = () => no(userErr("Sem conexão com o servidor do WhatsApp."));
    x.ontimeout = () => no(userErr("O servidor demorou demais (pode estar acordando). Tente de novo."));
    x.send(body ? JSON.stringify(body) : null);
  }));
}
function zapWhen(t) {
  if (!t) return "";
  const d = new Date(t * 1000), now = new Date();
  if (d.toDateString() === now.toDateString()) return d.toTimeString().slice(0, 5);
  const y = new Date(now.getTime() - 864e5);
  if (d.toDateString() === y.toDateString()) return "ontem";
  return pad2(d.getDate()) + "/" + pad2(d.getMonth() + 1);
}

/* DESATIVADO por enquanto: mude para true para o app aparecer no site (e ligue ZAP_ENABLED=1 na Vercel). */
const ZAP_ON = false;
(ZAP_ON ? add : function () {})("zap", "WhatsApp", "zap", "Essenciais", b => {
  const top = h("div"), body = h("div"); let timer = null, inChat = null;
  b.append(top, body);
  onClose(b, () => clearInterval(timer));
  const stopPoll = () => { clearInterval(timer); timer = null; };
  if (!session) return body.append(h("div", { class: "card", style: "text-align:center" }, h("div", { style: "margin:4px 0 10px" }, ic("zap", 40)),
    h("p", {}, h("b", {}, "Leia e responda o WhatsApp pelo Kindle.")), h("p", { class: "muted" }, "Entre na sua conta do Unkindle para continuar."),
    btn("Entrar ou criar conta", () => pages.auth("in"), "solid wide")));

  const fail = (e, retry) => { stopPoll(); top.replaceChildren();
    body.replaceChildren(h("div", { class: "card" }, h("p", {}, e.userMsg || NOCONN),
      e.status === 403 ? h("p", { class: "muted" }, "O WhatsApp do Unkindle está liberado só para as contas cadastradas no servidor.") : btn("Tentar de novo", retry, "solid"))); };

  /* ---------- estado da conexão ---------- */
  const start = () => { stopPoll(); top.replaceChildren(); body.replaceChildren(note("Conectando ao servidor… (na primeira vez do dia pode levar até 1 minuto)"));
    zapCall("status").then(st => st.state === "open" ? chats() : st.state === "pairing" ? pairing(st) : st.state === "connecting" ? waiting() : link(st), e => fail(e, start)); };

  const waiting = () => { body.replaceChildren(note("O servidor está se reconectando ao WhatsApp…"));
    let n = 0; timer = setInterval(() => { if (++n > 20) { stopPoll(); return start(); }
      zapCall("status").then(st => { if (st.state === "open") { stopPoll(); chats(); } else if (st.state === "off") { stopPoll(); link(st); } }, () => {}); }, 3000); };

  const link = st => { stopPoll();
    const ph = inp("5511999998888", "tel", { autocomplete: "tel" }), m = h("p", { class: "muted" });
    const go = btn("Gerar código", () => { const v = ph.value.replace(/\D/g, ""); if (v.length < 12) { m.textContent = "Digite com 55 (Brasil) e o DDD, só números. Ex.: 5511999998888"; return; }
      go.disabled = true; m.textContent = "Pedindo o código ao WhatsApp…";
      zapCall("link", { phone: v }).then(pairing, e => { go.disabled = false; m.textContent = e.userMsg || NOCONN; }); }, "solid wide");
    body.replaceChildren(h("div", { class: "card" }, h("h2", {}, "Conectar seu WhatsApp"),
      h("p", { class: "muted" }, "O Unkindle vira um “aparelho conectado”, como o WhatsApp Web. Suas mensagens continuam no celular."),
      st && st.error ? h("p", {}, st.error) : null,
      h("div", { class: "fld" }, h("label", {}, "Seu número com DDI e DDD"), ph), go, m),
      h("p", { class: "muted" }, "Para desconectar depois: aqui no app (Desconectar) ou no celular em Aparelhos conectados."));
  };

  const pairing = st => { stopPoll();
    body.replaceChildren(h("div", { class: "card", style: "text-align:center" }, h("h2", {}, "Digite este código no celular"),
      h("div", { class: "zcode" }, String(st.code || "").replace(/(.{4})(.{4})/, "$1-$2")),
      h("ol", { class: "zsteps" }, h("li", {}, "Abra o WhatsApp no celular"), h("li", {}, "Toque em ⋮ (ou Configurações) e depois em Aparelhos conectados"),
        h("li", {}, "Toque em Conectar aparelho"), h("li", {}, "Escolha Conectar com número de telefone e digite o código")),
      note("Esperando o celular…"), btn("Cancelar", () => zapCall("logout", {}).then(start, start))));
    let n = 0; timer = setInterval(() => { if (++n > 60) { stopPoll(); return start(); }
      zapCall("status").then(s => { if (s.state === "open") { stopPoll(); toast("WhatsApp conectado"); chats(); } else if (s.state === "off") { stopPoll(); link(s); } }, () => {}); }, 4000);
  };

  /* ---------- conversas ---------- */
  let q = "";
  const chats = () => { stopPoll(); inChat = null;
    const s = inp("Buscar conversa", "search", { value: q }); s.addEventListener("input", () => { q = s.value; paint(); }, false);
    top.replaceChildren(h("div", { class: "row" }, s, btn("Atualizar", load)));
    let data = [];
    const paint = () => { const k = q.trim().toLowerCase(), rows = data.filter(c => !k || c.name.toLowerCase().indexOf(k) >= 0);
      body.replaceChildren(rows.length ? h("ul", { class: "list zlist" }, ...rows.map(c => h("li", { onclick: () => open(c) },
        h("span", {}, h("b", {}, c.name), c.group ? h("i", { class: "zg" }, " · grupo") : null, h("small", {}, c.last || " ")),
        h("span", {}, zapWhen(c.t), c.unread ? h("i", { class: "zun" }, c.unread > 99 ? "99+" : String(c.unread)) : null))))
        : h("div", { class: "empty2" }, data.length ? "Nenhuma conversa com esse nome." : "As conversas aparecem aqui conforme chegam mensagens. As mais antigas podem levar alguns minutos para sincronizar."),
        h("div", { class: "row", style: "margin-top:12px" }, btn("Desconectar WhatsApp", () => { if (confirm("Desconectar o WhatsApp deste servidor? As conversas guardadas aqui serão apagadas.")) zapCall("logout", {}).then(() => { toast("WhatsApp desconectado"); start(); }, e => toast(e.userMsg || NOCONN)); })));
    };
    function load() { zapCall("chats").then(r => { if (r.state !== "open" && !r.chats.length) return start(); data = r.chats; if (!inChat) paint(); }, e => { if (!data.length) fail(e, start); }); }
    body.replaceChildren(note("Carregando conversas…")); load();
    timer = setInterval(() => { if (!document.hidden && !inChat) load(); }, 30000);
  };

  const open = c => subView(b, () => { stopPoll(); inChat = c.jid; window.scrollTo(0, 0);
    const list = h("div", { class: "zmsgs" }), ta = h("textarea", { placeholder: "Mensagem", style: "min-height:70px" }), m = h("p", { class: "muted" }); let last = "", sending = false;
    top.replaceChildren(h("button", { class: "sbtn", onclick: () => history.back() }, ic("back", 16), " Conversas"), h("h2", { class: "zname" }, c.name));
    const paint = r => { const sig = r.msgs.length + ":" + (r.msgs.length ? r.msgs[r.msgs.length - 1].id : ""); if (sig === last) return; last = sig;
      let day = ""; const nodes = [];
      r.msgs.forEach(x => { const d = new Date(x.t * 1000).toLocaleDateString("pt-BR"); if (d !== day) { nodes.push(h("div", { class: "day" }, d === new Date().toLocaleDateString("pt-BR") ? "Hoje" : d === new Date(Date.now() - 864e5).toLocaleDateString("pt-BR") ? "Ontem" : d)); day = d; }
        nodes.push(h("div", { class: "zm" + (x.me ? " me" : "") }, x.who ? h("div", { class: "zw" }, x.who) : null, h("div", { class: "zt" }, x.text), h("div", { class: "zh" }, new Date(x.t * 1000).toTimeString().slice(0, 5)))); });
      list.replaceChildren(...(nodes.length ? nodes : [h("div", { class: "empty2" }, "Nenhuma mensagem guardada desta conversa ainda.")]));
      const lastEl = list.lastChild; if (lastEl && lastEl.scrollIntoView) lastEl.scrollIntoView(false);
    };
    const load = () => zapCall("messages", null, c.jid).then(paint, e => { m.textContent = e.userMsg || NOCONN; });
    const send = () => { const v = ta.value.trim(); if (!v || sending) return; sending = true; m.textContent = "Enviando…";
      zapCall("send", { jid: c.jid, text: v }).then(() => { ta.value = ""; snapDrafts(); m.textContent = ""; return load(); }, e => { m.textContent = e.userMsg || NOCONN; }).then(() => { sending = false; }); };
    body.replaceChildren(list, ta, h("div", { class: "row" }, btn("Enviar", send, "solid"), btn("Atualizar", load)), m);
    list.replaceChildren(note("Abrindo…")); load().then(() => { if (c.unread) { zapCall("read", { jid: c.jid }).catch(() => {}); c.unread = 0; } });
    timer = setInterval(() => { if (!document.hidden) load(); }, 20000);
  }, () => { stopPoll(); chats(); });

  start();
});
