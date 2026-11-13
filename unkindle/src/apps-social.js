"use strict";
/* Comunidade (Fórum, UnChat, Enquetes), Biblioteca, Reddit, Repositórios, Rádio, Receitas e Quebra-cabeça. */

/* ---------- Comunidade: base comum ---------- */
const REGRAS = ["Seja gentil. Nada de ofensas, preconceito ou assédio.", "Sem spam, propaganda ou correntes.", "Não publique dados pessoais (seus ou de outras pessoas).", "Nada de conteúdo adulto, violento ou ilegal.", "Denuncie o que quebrar as regras: com 3 denúncias o conteúdo some."];
const REGRAS_V = 1;
function rulesNode() { return h("ol", { class: "rules" }, ...REGRAS.map(r => h("li", {}, r))); }
function ago(s) { const d = (Date.now() - new Date(s).getTime()) / 1000; return d < 60 ? "agora" : d < 3600 ? Math.floor(d / 60) + " min" : d < 86400 ? Math.floor(d / 3600) + " h" : d < 7 * 86400 ? Math.floor(d / 86400) + " d" : dbr(String(s).slice(0, 10)); }
function dbGet(path) { return (session ? ensureToken() : Promise.resolve()).then(() => sbCall("GET", "/rest/v1/" + path, null, !!session)); }
function dbPost(table, row) { return ensureToken().then(() => sbCall("POST", "/rest/v1/" + table, row, true, { Prefer: "return=representation" })); }
function dbDel(table, id) { return ensureToken().then(() => sbCall("DELETE", "/rest/v1/" + table + "?id=eq." + id, null, true, { Prefer: "return=minimal" })); }
function report(kind, id) {
  if (!session) return toast("Entre para denunciar");
  if (!confirm("Denunciar este conteúdo por quebrar as regras?")) return;
  ensureToken().then(() => sbCall("POST", "/rest/v1/unkindle_reports", { kind, ref_id: id }, true, { Prefer: "return=minimal" })).then(() => toast("Denúncia enviada. Obrigado!"), () => toast("Você já denunciou isso."));
}
function commErr(e) { const m = String(e && e.message || ""); if (/relation|does not exist|schema cache|404/i.test(m)) return "A comunidade ainda não foi ativada no Supabase (rode o supabase.sql)."; if (/@/.test(m) || /Calma/.test(m)) return m; return NOCONN; }
/* Antes de participar: conta, @ e regras aceitas */
function canPost(onOk) {
  if (!remote) { toast("A conta não está configurada."); return false; }
  if (!session) { toast("Entre na sua conta para participar"); pages.auth("in"); return false; }
  if (!session.user.username) { toast("Escolha seu @ antes de participar"); pages.auth(); return false; }
  if (S.x.rulesOk !== REGRAS_V) {
    modal(h("h2", {}, "Regras da comunidade"), rulesNode(), h("p", { class: "muted" }, "Ao participar você concorda com essas regras. Quem desrespeitar pode ter o conteúdo removido."),
      btn("Concordo", () => { S.x.rulesOk = REGRAS_V; save(); closeModal(); if (onOk) setTimeout(onOk, 300); }, "solid wide"));
    return false;
  }
  return true;
}
function whoBar(b) { return session && session.user.username ? null : h("div", { class: "tip" }, session ? "Escolha seu @ na página da conta para participar." : "Você pode ler à vontade. Para participar, entre na sua conta.", " ", h("button", { class: "lnk", onclick: () => pages.auth(session ? undefined : "in") }, session ? "Escolher @" : "Entrar")); }
function mine(r) { return session && r.user_id === session.user.id; }
function postActs(r, kind, onDel) { const m = postMeta(r, kind, onDel); m.removeChild(m.firstChild); return m; }
function postMeta(r, kind, onDel) {
  return h("span", { class: "pmeta" }, "@" + r.username + " · " + ago(r.created_at), " ",
    mine(r) ? h("button", { class: "lnk", onclick: () => { if (confirm("Apagar?")) dbDel(kind === "post" ? "unkindle_posts" : kind === "topic" ? "unkindle_topics" : kind === "chat" ? "unkindle_chat" : "unkindle_polls", r.id).then(onDel, () => toast("Não foi possível apagar")); } }, "apagar")
      : h("button", { class: "lnk", onclick: () => report(kind, r.id) }, "denunciar"));
}

/* ---------- Avatar em pixel gerado a partir do @ (5x5 espelhado) ---------- */
function avatar(name, size) {
  let hsh = 2166136261; const s = String(name || "?"); for (let i = 0; i < s.length; i++) { hsh ^= s.charCodeAt(i); hsh = (hsh * 16777619) >>> 0; }
  let d = ""; for (let y = 0; y < 5; y++) for (let x = 0; x < 3; x++) if ((hsh >> (y * 3 + x)) & 1) { d += "M" + (x + 1) + " " + (y + 1) + "h1v1h-1z"; if (x < 2) d += "M" + (5 - x) + " " + (y + 1) + "h1v1h-1z"; }
  const sp = document.createElement("span"); sp.className = "av"; size = size || 32;
  sp.innerHTML = '<svg viewBox="0 0 7 7" width="' + size + '" height="' + size + '" shape-rendering="crispEdges" aria-hidden="true"><rect x="0" y="0" width="7" height="7" fill="none" stroke="currentColor" stroke-width=".6"/><path fill="currentColor" d="' + (d || "M3 3h1v1h-1z") + '"/></svg>';
  return sp;
}
/* Texto com links clicáveis (abrem no Navegador do Unkindle), citações (> ) e menções (@nome) */
function richText(t) {
  const box = h("div", { class: "rtx" });
  String(t || "").split("\n").forEach(line => {
    const q = /^>\s?/.test(line), el = h(q ? "blockquote" : "div", { class: q ? "qt" : "" });
    const src = q ? line.replace(/^>\s?/, "") : line, re = /(https?:\/\/[^\s]+)|(@[a-z0-9_.]{3,20})/gi; let last = 0, m;
    while ((m = re.exec(src))) {
      if (m.index > last) el.appendChild(document.createTextNode(src.slice(last, m.index)));
      if (m[1]) { const u = m[1]; el.appendChild(h("a", { href: "#", class: "blink", onclick: e => { e.preventDefault(); S.x.browserOpen = u; save(); openApp("browser"); return false; } }, u.replace(/^https?:\/\//, "").slice(0, 40))); }
      else el.appendChild(h("b", { class: "mention" + (session && session.user.username && m[2].slice(1).toLowerCase() === session.user.username ? " me" : "") }, m[2]));
      last = m.index + m[0].length;
    }
    if (last < src.length) el.appendChild(document.createTextNode(src.slice(last)));
    if (!line) el.appendChild(h("br"));
    box.appendChild(el);
  });
  return box;
}
function dayLabel(s) { const d = new Date(s), n = new Date(), y = new Date(Date.now() - 864e5), same = (a, b) => a.toDateString() === b.toDateString(); return same(d, n) ? "Hoje" : same(d, y) ? "Ontem" : pad2(d.getDate()) + "/" + pad2(d.getMonth() + 1) + "/" + d.getFullYear(); }

/* ---------- Fórum ---------- */
const FCATS = ["Geral", "Leitura", "Kindle e e-readers", "Tecnologia", "Jogos", "Ajuda", "Bate-papo"];
add("forum", "Fórum", "forum", "Comunidade", b => {
  const st = X("forum", { cat: "", sort: "ativos", q: "" }), seen = X("forumSeen", {}), top = h("div"), body = h("div"); let page = 0, timer = null;
  b.append(whoBar(b), top, body);
  const ORD = { ativos: "last_at.desc", novos: "id.desc", populares: "replies.desc,last_at.desc" };
  const topicRow = r => { const isNew = !seen[r.id] || seen[r.id] < new Date(r.last_at).getTime();
    return h("li", { class: "nw fti" }, h("span", { class: "fav", onclick: () => topic(r.id) }, avatar(r.username, 36)),
      h("span", { onclick: () => topic(r.id) }, h("b", {}, isNew ? h("i", { class: "badge" }, "NOVO") : null, r.title), h("small", { class: "ex" }, String(r.body || "").replace(/\s+/g, " ").slice(0, 110)), h("small", {}, "@" + r.username + " · " + r.cat + " · " + ago(r.last_at))),
      h("span", { class: "rc", onclick: () => topic(r.id) }, h("b", {}, String(r.replies)), h("small", {}, r.replies === 1 ? "resp." : "resps."))); };
  const list = more => {
    clearInterval(timer);
    if (!more) page = 0;
    const q = inp("Buscar no fórum", "search", { value: st.q });
    q.addEventListener("keydown", e => { if (e.key === "Enter") { st.q = q.value.trim(); save(); list(); } });
    top.replaceChildren(h("div", { class: "row" }, q, btn("Buscar", () => { st.q = q.value.trim(); save(); list(); })),
      segTabs([["", "Todos"]].concat(FCATS.map(c => [c, c])), st.cat, k => { st.cat = k; save(); list(); }),
      segTabs([["ativos", "Ativos"], ["novos", "Novos"], ["populares", "Populares"]], st.sort, k => { st.sort = k; save(); list(); }),
      h("div", { class: "row" }, btn("Novo tópico", () => { if (canPost(newTopic)) newTopic(); }, "solid"), btn("Regras", () => modal(h("h2", {}, "Regras"), rulesNode()))));
    if (!more) body.replaceChildren(note("Carregando tópicos…"));
    const flt = (st.cat ? "&cat=eq." + encodeURIComponent(st.cat) : "") + (st.q ? "&or=(title.ilike.*" + encodeURIComponent(st.q.replace(/[*,()]/g, " ")) + "*,body.ilike.*" + encodeURIComponent(st.q.replace(/[*,()]/g, " ")) + "*)" : "");
    dbGet("unkindle_topics?select=id,user_id,username,cat,title,body,replies,created_at,last_at&order=" + ORD[st.sort] + "&limit=25&offset=" + page * 25 + flt).then(rows => {
      const ul = more ? body.querySelector("ul.list") : h("ul", { class: "list" });
      rows.forEach(r => ul.appendChild(topicRow(r)));
      const moreBtn = rows.length === 25 ? btn("Carregar mais", () => { page++; moreBtn.parentNode && moreBtn.parentNode.removeChild(moreBtn); list(true); }) : null;
      if (!more) body.replaceChildren(rows.length ? ul : h("div", { class: "empty2" }, st.q ? "Nada encontrado para “" + st.q + "”." : "Nenhum tópico ainda. Que tal abrir o primeiro?"), moreBtn);
      else if (moreBtn) body.appendChild(moreBtn);
    }, e => body.replaceChildren(para(commErr(e))));
  };
  const topic = id => subView(b, () => {
    top.replaceChildren(h("button", { class: "sbtn", onclick: () => history.back() }, ic("back", 16), " Fórum"));
    body.replaceChildren(note("Abrindo…")); window.scrollTo(0, 0);
    const ta = h("textarea", { placeholder: "Escreva sua resposta… (use @nome para chamar alguém)", style: "min-height:110px" }), m = h("p", { class: "muted" }), thread = h("div"); let count = -1;
    const quote = (who, txt0) => { ta.value = "> @" + who + ": " + String(txt0).replace(/\n+/g, " ").slice(0, 160) + "\n\n" + ta.value; ta.focus(); ta.scrollIntoView && ta.scrollIntoView(); };
    const post = (r, n, first) => h("div", { class: "post" + (first ? " first" : "") }, h("div", { class: "ph" }, avatar(r.username, 28), h("b", {}, " @" + r.username), h("small", {}, "  #" + n + " · " + ago(r.created_at))), richText(r.body),
      h("div", { class: "pa" }, h("button", { class: "lnk", onclick: () => { if (canPost()) quote(r.username, r.body); } }, "citar"), postActs(r, first ? "topic" : "post", () => first ? history.back() : load())));
    const load = () => Promise.all([dbGet("unkindle_topics?id=eq." + id + "&select=*"), dbGet("unkindle_posts?topic_id=eq." + id + "&select=*&order=id.asc&limit=500")]).then(([t, ps]) => {
      if (!t.length) return body.replaceChildren(para("Esse tópico não existe mais."));
      const T = t[0]; seen[id] = Date.now(); save();
      if (ps.length === count) return; count = ps.length;
      thread.replaceChildren(post(T, 1, true), h("div", { class: "lbl2" }, ps.length + (ps.length === 1 ? " resposta" : " respostas")), ...ps.map((p, i) => post(p, i + 2)));
      if (!body.contains(thread)) body.replaceChildren(h("div", { class: "kick2" }, T.cat), h("h2", { class: "ah" }, T.title), thread, h("div", { class: "lbl2" }, "Responder"), ta, h("div", { class: "row" }, btn("Enviar resposta", send, "solid"), btn("Atualizar", load)), m);
    }, e => body.replaceChildren(para(commErr(e))));
    const send = () => { const v = ta.value.trim(); if (!v) return; if (!canPost(send)) return; m.textContent = "Enviando…"; dbPost("unkindle_posts", { topic_id: id, body: v.slice(0, 3000) }).then(() => { ta.value = ""; snapDrafts(); m.textContent = "Resposta enviada."; load(); }, e => { m.textContent = commErr(e); }); };
    load(); clearInterval(timer); timer = setInterval(() => { if (!document.hidden) load(); }, 30000);
  }, () => list());
  const newTopic = () => subView(b, () => {
    clearInterval(timer);
    top.replaceChildren(h("button", { class: "sbtn", onclick: () => history.back() }, ic("back", 16), " Fórum"));
    const cat = h("select", {}, ...FCATS.map(c => h("option", { value: c, selected: c === (st.cat || "Geral") ? "selected" : false }, c))), t = inp("Título do tópico"), ta = h("textarea", { placeholder: "O que você quer dizer?", style: "min-height:160px" }), m = h("p", { class: "muted" }), cnt = h("small", { class: "muted" }, "0/5000");
    ta.addEventListener("input", () => { cnt.textContent = ta.value.length + "/5000"; }, false);
    body.replaceChildren(h("div", { class: "cvbox" }, h("label", {}, "Categoria"), cat, h("label", {}, "Título"), t, h("label", {}, "Mensagem"), ta, cnt), m,
      btn("Publicar", () => { if (t.value.trim().length < 3 || !ta.value.trim()) { m.textContent = "Escreva um título (3+ letras) e a mensagem."; return; } m.textContent = "Publicando…";
        dbPost("unkindle_topics", { cat: cat.value, title: t.value.trim().slice(0, 120), body: ta.value.trim().slice(0, 5000) }).then(r => { t.value = ta.value = ""; snapDrafts(); history.back(); setTimeout(() => topic(r[0].id), 250); }, e => { m.textContent = commErr(e); }); }, "solid wide"));
  }, () => list());
  onClose(b, () => clearInterval(timer));
  list();
});

/* ---------- UnChat: bate-papo público ---------- */
const SALAS = [["geral", "Geral"], ["livros", "Livros"], ["kindle", "Kindle"], ["jogos", "Jogos"], ["off", "Off-topic"]];
add("chat", "UnChat", "chat", "Comunidade", b => {
  const st = X("unchat", { room: "geral" }), seenR = X("chatSeen", {}), top = h("div"), info = h("div", { class: "chatinfo" }), box = h("div", { class: "chatbox" }), newBtn = h("button", { class: "newmsg", onclick: () => { box.scrollTop = box.scrollHeight; show(newBtn, false); } }, "↓ Mensagens novas");
  const inpM = inp("Mensagem… (@nome para chamar alguém)"), cnt = h("small", { class: "muted" }, "0/500"), m = h("p", { class: "muted" }); let rows = [], first = 0, last = 0, timer = null, busy = false, unread = {};
  show(newBtn, false);
  inpM.setAttribute("maxlength", "500");
  inpM.addEventListener("input", () => { cnt.textContent = inpM.value.length + "/500"; }, false);
  const atEnd = () => box.scrollTop + box.clientHeight >= box.scrollHeight - 40;
  const paint = keep => {
    const wasEnd = atEnd(), oldH = box.scrollHeight, oldTop = box.scrollTop, nodes = [];
    if (rows.length >= 60 || first > 1) nodes.push(h("div", { class: "older" }, btn("Carregar mensagens anteriores", older)));
    let prevDay = "", prev = null;
    rows.forEach(r => { const dl = dayLabel(r.created_at); if (dl !== prevDay) { nodes.push(h("div", { class: "day" }, dl)); prevDay = dl; prev = null; }
      const grouped = prev && prev.username === r.username && new Date(r.created_at) - new Date(prev.created_at) < 5 * 60000, me = mine(r);
      const mentioned = session && session.user.username && new RegExp("@" + session.user.username + "\\b", "i").test(r.msg);
      nodes.push(h("div", { class: "cm" + (me ? " me" : "") + (grouped ? " g" : "") + (mentioned ? " at" : "") },
        grouped ? null : h("div", { class: "ch" }, avatar(r.username, 24), h("b", { class: "cu" }, " @" + r.username), h("span", { class: "ct" }, " " + new Date(r.created_at).toTimeString().slice(0, 5))),
        h("div", { class: "cx" }, richText(r.msg)),
        h("div", { class: "ca" }, me ? null : h("button", { class: "lnk", onclick: () => { inpM.value = "@" + r.username + " " + inpM.value; inpM.focus(); } }, "responder"),
          h("button", { class: "lnk", onclick: () => me ? dbDel("unkindle_chat", r.id).then(() => { rows = rows.filter(x => x.id !== r.id); paint(true); }) : report("chat", r.id) }, me ? "apagar" : "denunciar"))));
      prev = r; });
    if (!rows.length) nodes.push(h("div", { class: "empty2" }, "Ninguém falou nada ainda nesta sala. Diga oi!"));
    box.replaceChildren(...nodes);
    if (keep === "older") box.scrollTop = box.scrollHeight - oldH + oldTop;
    else if (wasEnd || !box._init) { box.scrollTop = box.scrollHeight; box._init = 1; show(newBtn, false); }
    else if (keep !== true) show(newBtn, true);
    const people = {}; rows.forEach(r => { if (Date.now() - new Date(r.created_at) < 36e5) people[r.username] = 1; }); const n = Object.keys(people).length;
    info.textContent = n ? n + (n === 1 ? " pessoa conversou" : " pessoas conversaram") + " aqui na última hora" : "Sala tranquila no momento";
  };
  const poll = () => { if (busy || document.hidden) return; busy = true;
    dbGet("unkindle_chat?room=eq." + st.room + "&select=id,user_id,username,msg,created_at&order=id.desc&limit=60" + (last ? "&id=gt." + last : "")).then(r => { busy = false;
      if (r.length) { const add2 = r.reverse(); rows = rows.concat(add2).slice(-300); last = rows[rows.length - 1].id; if (!first) first = rows[0].id; seenR[st.room] = last; save(); paint(); } else if (!box._init) paint(); m.textContent = ""; },
      e => { busy = false; if (!rows.length) box.replaceChildren(h("div", { class: "empty2" }, commErr(e))); else m.textContent = commErr(e); }); };
  const older = () => { if (!rows.length) return; dbGet("unkindle_chat?room=eq." + st.room + "&select=id,user_id,username,msg,created_at&order=id.desc&limit=60&id=lt." + rows[0].id).then(r => { if (!r.length) { first = 1; toast("Esse é o começo da conversa"); paint(true); return; } rows = r.reverse().concat(rows); first = rows[0].id; paint("older"); }); };
  const roomsUnread = () => dbGet("unkindle_chat?select=room,id&order=id.desc&limit=200").then(r => { unread = {}; r.forEach(x => { if (x.room !== st.room && x.id > (seenR[x.room] || 0)) unread[x.room] = (unread[x.room] || 0) + 1; }); draw(); }, () => {});
  const enter = room => { st.room = room; save(); rows = []; first = 0; last = 0; box._init = 0; unread[room] = 0; box.replaceChildren(note("Entrando na sala…")); draw(); poll(); };
  const send = () => { const v = inpM.value.trim(); if (!v) return; if (!canPost(send)) return; m.textContent = "Enviando…"; dbPost("unkindle_chat", { room: st.room, msg: v.slice(0, 500) }).then(() => { inpM.value = ""; cnt.textContent = "0/500"; m.textContent = ""; box._init = 0; poll(); }, e => { m.textContent = commErr(e); }); };
  const draw = () => top.replaceChildren(segTabs(SALAS.map(s => [s[0], s[1] + (unread[s[0]] ? " (" + (unread[s[0]] > 9 ? "9+" : unread[s[0]]) + ")" : "")]), st.room, enter));
  box.addEventListener("scroll", () => { if (atEnd()) show(newBtn, false); }, false);
  inpM.addEventListener("keydown", e => e.key === "Enter" && send());
  timer = setInterval(poll, 4000); const t2 = setInterval(roomsUnread, 30000); onClose(b, () => { clearInterval(timer); clearInterval(t2); });
  b.append(whoBar(b), top, info, h("div", { class: "chatwrap" }, box, newBtn), h("div", { class: "bar" }, h("span", {}, inpM), h("span", {}, btn("Enviar", send, "solid"))), h("div", { class: "row" }, cnt, " ", h("button", { class: "lnk", onclick: () => modal(h("h2", {}, "Regras"), rulesNode()) }, "Regras da sala")), m);
  enter(st.room); roomsUnread();
});

/* ---------- Enquetes ---------- */
add("polls", "Enquetes", "chart", "Comunidade", b => {
  const top = h("div"), body = h("div"); b.append(whoBar(b), top, body);
  const myVotes = {};
  const bars = p => { const v = p.votes && p.votes.length ? p.votes : p.opts.map(() => 0), tot = v.reduce((a, x) => a + x, 0) || 0;
    return h("div", { class: "poll" }, h("b", { class: "pq" }, p.q), ...p.opts.map((o, i) => { const pc = tot ? Math.round(v[i] * 100 / tot) : 0;
      return h("div", { class: "po" + (myVotes[p.id] === i ? " mine" : ""), onclick: () => vote(p, i) }, h("div", { class: "pl" }, h("span", {}, o), h("span", {}, pc + "% · " + v[i])), h("div", { class: "pb" }, h("i", { style: "width:" + pc + "%" }))); }),
      h("div", {}, h("small", { class: "muted" }, tot + (tot === 1 ? " voto" : " votos") + " · "), postMeta(p, "poll", list))); };
  const vote = (p, i) => { if (!canPost(() => vote(p, i))) return;
    ensureToken().then(() => sbCall("POST", "/rest/v1/unkindle_poll_votes?on_conflict=poll_id,user_id", { poll_id: p.id, opt: i }, true, { Prefer: "resolution=merge-duplicates,return=minimal" })).then(() => { myVotes[p.id] = i; toast("Voto registrado"); list(); }, e => toast(commErr(e))); };
  const list = () => {
    top.replaceChildren(btn("Criar enquete", () => { if (canPost(create)) create(); }, "solid"));
    body.replaceChildren(note("Carregando…"));
    const mineQ = session ? dbGet("unkindle_poll_votes?select=poll_id,opt&user_id=eq." + session.user.id).then(r => r.forEach(x => { myVotes[x.poll_id] = x.opt; }), () => {}) : Promise.resolve();
    mineQ.then(() => dbGet("unkindle_polls?select=*&order=id.desc&limit=40")).then(r => body.replaceChildren(...(r.length ? r.map(bars) : [h("div", { class: "empty2" }, "Nenhuma enquete ainda. Crie a primeira!")])), e => body.replaceChildren(para(commErr(e))));
  };
  const create = () => subView(b, () => {
    top.replaceChildren(h("button", { class: "sbtn", onclick: () => history.back() }, ic("back", 16), " Enquetes"));
    const q = inp("Pergunta"), os = [inp("Opção 1"), inp("Opção 2"), inp("Opção 3 (opcional)"), inp("Opção 4 (opcional)")], m = h("p", { class: "muted" });
    body.replaceChildren(h("div", { class: "cvbox" }, h("label", {}, "Pergunta"), q, h("label", {}, "Opções"), ...os), m, btn("Publicar enquete", () => {
      const o = os.map(x => x.value.trim()).filter(Boolean); if (q.value.trim().length < 3 || o.length < 2) { m.textContent = "Escreva a pergunta e pelo menos 2 opções."; return; }
      m.textContent = "Publicando…"; dbPost("unkindle_polls", { q: q.value.trim(), opts: o }).then(() => { q.value = ""; os.forEach(x => { x.value = ""; }); snapDrafts(); history.back(); }, e => { m.textContent = commErr(e); });
    }, "solid wide"));
  }, list);
  list();
});

/* ---------- Biblioteca: livros grátis em português (domínio público) ---------- */
add("library", "Biblioteca", "reading", "Essenciais", b => {
  const lib = X("lib", { books: {}, size: 19 }), top = h("div"), body = h("div"); b.append(top, body);
  const fmtTxt = bk => bk.formats["text/plain; charset=utf-8"] || bk.formats["text/plain; charset=us-ascii"] || bk.formats["text/plain"] || Object.keys(bk.formats).filter(k => /^text\/plain/.test(k)).map(k => bk.formats[k])[0];
  const author = bk => (bk.authors && bk.authors[0] ? bk.authors[0].name.replace(/^([^,]+), (.+)$/, "$2 $1") : "Autor desconhecido");
  const home = () => {
    const q = inp("Título ou autor (ex.: Machado de Assis)", "search"), res = h("div");
    const search = (term) => { res.replaceChildren(note("Buscando livros…"));
      api("https://gutendex.com/books/?languages=pt" + (term ? "&search=" + encodeURIComponent(term) : "")).then(j => { const r = j.results.filter(fmtTxt);
        res.replaceChildren(r.length ? h("ul", { class: "list" }, ...r.map(bk => h("li", { class: "nw", onclick: () => read({ id: bk.id, t: bk.title, a: author(bk), u: fmtTxt(bk) }) }, h("span", {}, h("b", {}, bk.title), h("small", {}, author(bk) + " · " + num(bk.download_count) + " leituras"))))) : para("Nenhum livro encontrado.")); }, () => res.replaceChildren(para(NOCONN))); };
    q.addEventListener("keydown", e => e.key === "Enter" && search(q.value.trim()));
    const cont = Object.keys(lib.books).map(k => lib.books[k]).sort((x, y) => (y.at || 0) - (x.at || 0));
    top.replaceChildren(h("div", { class: "row" }, q, btn("Buscar", () => search(q.value.trim()), "solid")));
    body.replaceChildren(cont.length ? h("div", {}, h("div", { class: "lbl2" }, "Continuar lendo"), h("ul", { class: "list" }, ...cont.map(bk => h("li", { class: "nw", onclick: () => read(bk) }, h("span", {}, h("b", {}, bk.t), h("small", {}, bk.a + " · página " + ((bk.p || 0) + 1) + (bk.n ? " de " + bk.n : ""))))))) : null,
      h("div", { class: "lbl2" }, "Livros em português"), res, note("Obras em domínio público do Projeto Gutenberg."));
    search("");
  };
  const read = meta => subView(b, () => {
    const bk = lib.books[meta.id] = Object.assign({ p: 0 }, lib.books[meta.id] || {}, { id: meta.id, t: meta.t, a: meta.a, u: meta.u, at: Date.now() }); save();
    top.replaceChildren(h("button", { class: "sbtn", onclick: () => history.back() }, ic("back", 16), " Biblioteca"));
    body.replaceChildren(note("Baixando o livro…")); window.scrollTo(0, 0);
    fetchPage(bk.u).then(raw => {
      let t = raw.replace(/\r/g, ""); const s0 = t.search(/\*\*\* ?START OF (THE|THIS) PROJECT GUTENBERG[^\n]*\n/i), e0 = t.search(/\*\*\* ?END OF (THE|THIS) PROJECT GUTENBERG/i);
      if (s0 >= 0) t = t.slice(t.indexOf("\n", s0) + 1); if (e0 >= 0) t = t.slice(0, t.search(/\*\*\* ?END OF (THE|THIS) PROJECT GUTENBERG/i));
      t = t.replace(/([^\n])\n(?!\n)/g, "$1 ").replace(/\n{3,}/g, "\n\n").trim();
      const PER = 1800, pages = []; let i = 0; while (i < t.length) { let j = Math.min(t.length, i + PER); if (j < t.length) { const k = t.lastIndexOf("\n\n", j); const k2 = t.lastIndexOf(". ", j); j = k > i + PER * .6 ? k : k2 > i + PER * .6 ? k2 + 1 : j; } pages.push(t.slice(i, j).trim()); i = j; }
      bk.n = pages.length; save();
      const pg = h("div", { class: "bookpg" }), info = h("div", { class: "bookinfo" });
      const show = () => { bk.p = Math.max(0, Math.min(pages.length - 1, bk.p)); pg.style.fontSize = lib.size + "px"; pg.replaceChildren(...pages[bk.p].split(/\n\n/).map(x => h("p", {}, x))); info.textContent = "Página " + (bk.p + 1) + " de " + pages.length + " · " + Math.round((bk.p + 1) * 100 / pages.length) + "%"; bk.at = Date.now(); save(); window.scrollTo(0, 0); };
      const nav = h("div", { class: "booknav" }, btn("‹ Anterior", () => { bk.p--; show(); }), btn("A−", () => { lib.size = Math.max(14, lib.size - 2); show(); }), btn("A+", () => { lib.size = Math.min(32, lib.size + 2); show(); }), btn("Próxima ›", () => { bk.p++; show(); }, "solid"));
      onPointer(pg, null, null, e => { const r = pg.getBoundingClientRect(); if (e.clientX - r.left > r.width * .66) { bk.p++; show(); } else if (e.clientX - r.left < r.width * .33) { bk.p--; show(); } });
      body.replaceChildren(h("h2", { class: "ah" }, bk.t), h("p", { class: "muted" }, bk.a), info, pg, nav, note("Toque na lateral direita da página para avançar e na esquerda para voltar. Seu ponto de leitura fica salvo na conta."));
      show();
    }, () => body.replaceChildren(para("Não consegui baixar esse livro agora. Tente de novo.")));
  }, home);
  home();
});

/* ---------- Reddit (via RSS, lido aqui dentro) ---------- */
function atom(xml) {
  const d = new DOMParser().parseFromString(xml, "text/xml"), ents = d.getElementsByTagName("entry"), out = [];
  for (let i = 0; i < ents.length; i++) { const e = ents[i], g = n => { const x = e.getElementsByTagName(n)[0]; return x ? x.textContent : ""; }, ln = e.getElementsByTagName("link")[0];
    out.push({ t: g("title"), a: ((e.getElementsByTagName("name")[0] || { textContent: "" }).textContent.trim().replace(/^\/u\//, "u/")), html: g("content"), u: ln ? ln.getAttribute("href") : "", d: g("updated") || g("published"), thumb: (e.getElementsByTagName("media:thumbnail")[0] || { getAttribute: () => "" }).getAttribute("url") }); }
  return out;
}
const SUBS = ["brasil", "portugal", "books", "kindle", "suggestmeabook", "technology", "worldnews", "futebol", "gaming", "todayilearned"];
add("reddit", "Reddit", "reddit", "Notícias", b => {
  const st = X("reddit", { sub: "brasil", sort: "hot" }), top = h("div"), body = h("div"); b.append(top, body);
  const list = () => {
    const q = inp("Comunidade, ex.: brasil", "text", { value: st.sub });
    const go = v => { st.sub = String(v || "").trim().replace(/^\/?r\//, "") || "brasil"; save(); list(); };
    q.addEventListener("keydown", e => e.key === "Enter" && go(q.value));
    top.replaceChildren(h("div", { class: "row" }, q, btn("Abrir", () => go(q.value), "solid")), segTabs(SUBS.map(s => [s, "r/" + s]), st.sub, go), segTabs([["hot", "Em alta"], ["new", "Novos"], ["top", "Top do dia"]], st.sort, k => { st.sort = k; save(); list(); }));
    body.replaceChildren(note("Carregando r/" + st.sub + "…"));
    fetchPage("https://www.reddit.com/r/" + encodeURIComponent(st.sub) + "/" + st.sort + "/.rss" + (st.sort === "top" ? "?t=day" : "")).then(x => { const es = atom(x);
      body.replaceChildren(es.length ? h("ul", { class: "list" }, ...es.map(e => h("li", { class: "nw", onclick: () => post(e) }, e.thumb ? h("span", { class: "nthumb" }, h("img", { src: e.thumb, alt: "" })) : null, h("span", {}, h("b", {}, e.t), h("small", {}, e.a + " · " + ago(e.d)))))) : para("Essa comunidade não existe ou está fechada."));
    }, () => body.replaceChildren(para("Não consegui carregar o Reddit agora. Tente de novo em instantes.")));
  };
  const post = e => subView(b, () => {
    top.replaceChildren(h("button", { class: "sbtn", onclick: () => history.back() }, ic("back", 16), " r/" + st.sub));
    body.replaceChildren(note("Abrindo o post e os comentários…")); window.scrollTo(0, 0);
    const u = (e.u || "").replace(/\/?$/, "/") + ".rss";
    fetchPage(u).then(x => { const es = atom(x), p = es[0] || e, cs = es.slice(1);
      const pc = renderPage("<div>" + (p.html || "") + "</div>", e.u, l => { if (/reddit\.com\/r\/[^/]+\/comments\//.test(l)) post({ u: l, t: "" }); else openApp("browser"); });
      body.replaceChildren(h("div", { class: "kick2" }, "r/" + st.sub + " · " + p.a + " · " + ago(p.d)), h("h2", { class: "ah" }, p.t || e.t), pc.body,
        h("div", { class: "lbl2" }, cs.length + " comentários"), ...cs.map(c => h("div", { class: "post" }, h("div", { class: "pmeta" }, c.a + " · " + ago(c.d)), renderPage("<div>" + c.html + "</div>", e.u, () => {}).body)));
    }, () => body.replaceChildren(h("h2", { class: "ah" }, e.t), renderPage("<div>" + (e.html || "") + "</div>", e.u, () => {}).body, note("Não consegui carregar os comentários agora.")));
  }, list);
  list();
});

/* ---------- Repositórios do GitHub: README, arquivos e código aqui dentro ---------- */
function b64utf8(s) { try { return decodeURIComponent(escape(atob(String(s).replace(/\s/g, "")))); } catch (e) { return ""; } }
function mdNodes(md, base, onLink) {
  const out = [], lines = md.replace(/\r/g, "").split("\n"); let i = 0, para2 = [];
  const inline = t => { const frag = h("span"); let rest = t.replace(/<[^>]+>/g, ""); const re = /(!?\[([^\]]*)\]\(([^)\s]+)[^)]*\))|(`[^`]+`)|(\*\*[^*]+\*\*|__[^_]+__)/; let m;
    while ((m = re.exec(rest))) { if (m.index) frag.appendChild(document.createTextNode(rest.slice(0, m.index)));
      if (m[1] && m[1][0] === "!") frag.appendChild(h("img", { src: absUrl(m[3], base), alt: m[2], class: "bimg" }));
      else if (m[1]) { const href = absUrl(m[3], base); frag.appendChild(h("a", { href: "#", class: "blink", onclick: e => { e.preventDefault(); onLink(href); return false; } }, m[2])); }
      else if (m[4]) frag.appendChild(h("code", {}, m[4].slice(1, -1))); else frag.appendChild(h("b", {}, inline(m[5].slice(2, -2))));
      rest = rest.slice(m.index + m[0].length); }
    if (rest) frag.appendChild(document.createTextNode(rest)); return frag; };
  const flush = () => { if (para2.length) { out.push(h("p", {}, inline(para2.join(" ")))); para2 = []; } };
  while (i < lines.length) { const l = lines[i];
    if (/^```/.test(l)) { flush(); const buf = []; i++; while (i < lines.length && !/^```/.test(lines[i])) buf.push(lines[i++]); out.push(h("pre", { class: "code" }, buf.join("\n"))); i++; continue; }
    const hd = /^(#{1,6})\s+(.*)/.exec(l); if (hd) { flush(); out.push(h(hd[1].length <= 2 ? "h3" : "h4", {}, inline(hd[2]))); i++; continue; }
    if (/^\s*[-*+]\s+/.test(l)) { flush(); const ul = h("ul"); while (i < lines.length && /^\s*[-*+]\s+/.test(lines[i])) ul.appendChild(h("li", {}, inline(lines[i++].replace(/^\s*[-*+]\s+/, "")))); out.push(ul); continue; }
    if (/^\s*\d+\.\s+/.test(l)) { flush(); const ol = h("ol"); while (i < lines.length && /^\s*\d+\.\s+/.test(lines[i])) ol.appendChild(h("li", {}, inline(lines[i++].replace(/^\s*\d+\.\s+/, "")))); out.push(ol); continue; }
    if (/^>\s?/.test(l)) { flush(); out.push(h("blockquote", {}, inline(l.replace(/^>\s?/, "")))); i++; continue; }
    if (!l.trim()) { flush(); i++; continue; }
    if (/^\s*(---|\*\*\*|___)\s*$/.test(l)) { flush(); out.push(h("hr")); i++; continue; }
    para2.push(l.trim()); i++; }
  flush(); return out;
}
const GH = "https://api.github.com";
function ghErr(e) { return e && e.status === 403 ? "O GitHub limita 60 consultas por hora sem login. Espere um pouco e tente de novo." : e && e.status === 404 ? "Não encontrado." : NOCONN; }
add("d_repos", "GitHub", "github", "Dev", b => {
  const st = X("repos", { q: "kindle", mode: "repos", u: "" }), top = h("div"), body = h("div"); b.append(top, body);
  const repoRow = r => h("li", { class: "nw", onclick: () => repo(r.full_name) }, h("span", {}, h("b", {}, r.full_name), h("small", {}, (r.description || "Sem descrição") + " · ★ " + num(r.stargazers_count) + (r.language ? " · " + r.language : ""))));
  const search = () => {
    const users = st.mode === "users", q = inp(users ? "Buscar pessoas ou organizações (ex.: torvalds)" : "Buscar repositórios (ex.: e-reader)", "search", { value: users ? st.u : st.q });
    const go = () => { if (users) st.u = q.value.trim(); else st.q = q.value.trim(); save(); search(); };
    q.addEventListener("keydown", e => e.key === "Enter" && go());
    top.replaceChildren(segTabs([["repos", "Repositórios"], ["users", "Pessoas"]], st.mode, k => { st.mode = k; save(); search(); }), h("div", { class: "row" }, q, btn("Buscar", go, "solid")));
    const term = users ? st.u : st.q;
    if (!term) return body.replaceChildren(note(users ? "Digite um nome de usuário ou organização." : "Digite algo para buscar. Também dá para colar dono/repositório, ex.: torvalds/linux."));
    if (!users && /^[\w.-]+\/[\w.-]+$/.test(term)) return repo(term);
    body.replaceChildren(note("Buscando…"));
    if (users) api(GH + "/search/users?per_page=20&q=" + encodeURIComponent(term)).then(j => body.replaceChildren(j.items.length ? h("ul", { class: "list" }, ...j.items.map(u => h("li", { class: "nw", onclick: () => user(u.login) }, h("span", { class: "nthumb sq" }, h("img", { src: u.avatar_url + "&s=96", alt: "" })), h("span", {}, h("b", {}, "@" + u.login), h("small", {}, u.type === "Organization" ? "Organização" : "Pessoa"))))) : para("Ninguém encontrado.")), e => body.replaceChildren(para(ghErr(e))));
    else api(GH + "/search/repositories?per_page=20&q=" + encodeURIComponent(term)).then(j => body.replaceChildren(h("ul", { class: "list" }, ...j.items.map(repoRow))), e => body.replaceChildren(para(ghErr(e))));
  };
  const user = login => subView(b, () => {
    top.replaceChildren(h("button", { class: "sbtn", onclick: () => history.back() }, ic("back", 16), " Busca"));
    body.replaceChildren(note("Abrindo @" + login + "…")); window.scrollTo(0, 0);
    Promise.all([api(GH + "/users/" + login), api(GH + "/users/" + login + "/repos?sort=updated&per_page=30")]).then(([u, rs]) => body.replaceChildren(
      h("div", { class: "wxnow" }, h("span", { class: "wxi" }, h("img", { class: "bimg", src: u.avatar_url, alt: "", style: "width:72px;margin:0" })), h("span", {}, h("b", {}, u.name || u.login), h("small", {}, "@" + u.login + (u.type === "Organization" ? " · organização" : "")))),
      u.bio ? h("p", {}, u.bio) : null,
      kv([["Seguidores", num(u.followers)], ["Seguindo", num(u.following)], ["Repositórios públicos", num(u.public_repos)], ["Local", u.location], ["Empresa", u.company], ["Site", u.blog], ["No GitHub desde", dbr(u.created_at)]]),
      h("div", { class: "lbl2" }, "Repositórios atualizados recentemente"), rs.length ? h("ul", { class: "list" }, ...rs.map(repoRow)) : note("Nenhum repositório público.")),
      e => body.replaceChildren(para(ghErr(e))));
  }, search);
  const repo = full => subView(b, () => {
    const owner = full.split("/")[0];
    top.replaceChildren(h("button", { class: "sbtn", onclick: () => history.back() }, ic("back", 16), " Voltar"), h("button", { class: "sbtn", onclick: () => user(owner) }, ic("user", 16), " @" + owner));
    body.replaceChildren(note("Abrindo " + full + "…")); window.scrollTo(0, 0);
    api(GH + "/repos/" + full).then(r => {
      const tabs = h("div"), area = h("div");
      const tab = k => { tabs.replaceChildren(segTabs([["readme", "Leia-me"], ["files", "Arquivos"], ["commits", "Commits"], ["issues", "Issues"]], k, tab)); area.replaceChildren(note("Carregando…"));
        if (k === "readme") api(GH + "/repos/" + full + "/readme").then(j => area.replaceChildren(h("div", { class: "bpage md" }, ...mdNodes(b64utf8(j.content), "https://raw.githubusercontent.com/" + full + "/" + r.default_branch + "/", u => { const m = /github\.com\/([\w.-]+\/[\w.-]+)\/?$/.exec(u); if (m) repo(m[1]); }))), e => area.replaceChildren(para(e && e.status === 404 ? "Esse repositório não tem Leia-me." : ghErr(e))));
        if (k === "files") dir("");
        if (k === "commits") api(GH + "/repos/" + full + "/commits?per_page=25").then(j => area.replaceChildren(h("ul", { class: "list" }, ...j.map(c => h("li", {}, h("span", {}, h("b", {}, c.commit.message.split("\n")[0]), h("small", {}, (c.commit.author && c.commit.author.name || "") + " · " + ago(c.commit.author && c.commit.author.date))))))), e => area.replaceChildren(para(ghErr(e))));
        if (k === "issues") api(GH + "/repos/" + full + "/issues?state=open&per_page=25").then(j => area.replaceChildren(j.length ? h("ul", { class: "list" }, ...j.map(x => h("li", { class: "nw", onclick: () => modal(h("h2", {}, x.title), h("p", { class: "muted" }, "#" + x.number + " · @" + x.user.login + " · " + ago(x.created_at)), h("div", { class: "bpage md" }, ...mdNodes(x.body || "(sem descrição)", "https://github.com/" + full + "/", () => {}))) }, h("span", {}, h("b", {}, x.title), h("small", {}, "#" + x.number + " · " + (x.pull_request ? "pull request" : "issue") + " · " + ago(x.created_at)))))) : note("Nenhuma issue aberta.")), e => area.replaceChildren(para(ghErr(e))));
      };
      const dir = path => { area.replaceChildren(note("Carregando…"));
        api(GH + "/repos/" + full + "/contents/" + path).then(items => { items.sort((x, y) => (x.type === y.type ? (x.name < y.name ? -1 : 1) : x.type === "dir" ? -1 : 1));
          area.replaceChildren(h("div", { class: "kick2" }, "/" + path), path ? h("button", { class: "sbtn", onclick: () => dir(path.split("/").slice(0, -1).join("/")) }, ic("up", 16), " Pasta acima") : null,
            h("ul", { class: "list" }, ...items.map(it => h("li", { class: "nw", onclick: () => it.type === "dir" ? dir(it.path) : file(it) }, h("span", {}, h("b", {}, (it.type === "dir" ? "▸ " : "") + it.name), h("small", {}, it.type === "dir" ? "pasta" : Math.max(1, Math.round(it.size / 1024)) + " KB"))))));
        }, e => area.replaceChildren(para(ghErr(e)))); };
      const file = it => { area.replaceChildren(note("Abrindo " + it.name + "…")); window.scrollTo(0, 0);
        const backBtn = h("button", { class: "sbtn", onclick: () => dir(it.path.split("/").slice(0, -1).join("/")) }, ic("back", 16), " Arquivos");
        if (/\.(png|jpe?g|gif|svg|webp)$/i.test(it.name)) return area.replaceChildren(backBtn, h("h3", {}, it.name), h("img", { class: "bimg", src: it.download_url, alt: it.name }));
        if (it.size > 400000) return area.replaceChildren(backBtn, para("Arquivo grande demais para mostrar aqui (" + Math.round(it.size / 1024) + " KB)."));
        apiText(it.download_url).then(t => area.replaceChildren(backBtn, h("h3", {}, it.path), /\.md$/i.test(it.name) ? h("div", { class: "bpage md" }, ...mdNodes(t, it.download_url, () => {})) : h("pre", { class: "code" }, t)), () => area.replaceChildren(backBtn, para(NOCONN))); };
      body.replaceChildren(h("h2", { class: "ah" }, r.full_name), r.description ? h("p", {}, r.description) : null,
        kv([["Estrelas", num(r.stargazers_count)], ["Forks", num(r.forks_count)], ["Linguagem", r.language || "—"], ["Licença", r.license ? r.license.spdx_id : "—"], ["Atualizado", ago(r.pushed_at)]]), tabs, area);
      tab("readme");
    }, e => body.replaceChildren(para(ghErr(e))));
  }, search);
  search();
});

/* ---------- Rádio: player que continua tocando fora do app ---------- */
var radioEl = null, radioNow = null;
function radioAudio() { if (!radioEl) { radioEl = document.createElement("audio"); radioEl.preload = "none"; document.body.appendChild(radioEl); } return radioEl; }
const RGEN = [["", "Mais ouvidas"], ["mpb", "MPB"], ["pop", "Pop"], ["rock", "Rock"], ["samba", "Samba"], ["sertanejo", "Sertanejo"], ["jazz", "Jazz"], ["classical", "Clássica"], ["news", "Notícias"], ["talk", "Conversa"], ["lofi", "Lo-fi"]];
add("c_radio", "Rádio", "mic", "Cultura", b => {
  const st = X("radio", { tag: "", c: "BR", favs: [], vol: 0.8 }), au = radioAudio(), player = h("div", { class: "player" }), top = h("div"), body = h("div");
  au.volume = st.vol;
  const stateTxt = () => !radioNow ? "Nada tocando" : au.paused ? "Pausado" : au.readyState < 3 ? "Conectando…" : "Ao vivo";
  const paintPlayer = () => player.replaceChildren(
    h("div", { class: "pnow" }, h("span", { class: "pic" }, ic("mic", 32)), h("span", {}, h("small", {}, stateTxt().toUpperCase()), h("b", {}, radioNow ? radioNow.name : "Escolha uma rádio abaixo"), radioNow ? h("small", {}, [radioNow.country, (radioNow.tags || "").split(",").slice(0, 2).join(", ")].filter(Boolean).join(" · ")) : null)),
    h("div", { class: "pctl" },
      btn(au.paused ? "▶ Tocar" : "❚❚ Pausar", () => { if (!radioNow) return; if (au.paused) au.play().catch(() => toast("Não foi possível tocar essa rádio")); else au.pause(); }, "solid"),
      btn("■ Parar", () => { au.pause(); au.removeAttribute("src"); au.load && au.load(); radioNow = null; paintPlayer(); }),
      btn("Vol −", () => { st.vol = Math.max(0, +(st.vol - .1).toFixed(1)); au.volume = st.vol; save(); paintPlayer(); }), h("span", { class: "vol" }, Math.round(st.vol * 100) + "%"), btn("Vol +", () => { st.vol = Math.min(1, +(st.vol + .1).toFixed(1)); au.volume = st.vol; save(); paintPlayer(); }),
      radioNow ? btn(st.favs.some(f => f.id === radioNow.stationuuid) ? "★ Favorita" : "☆ Favoritar", () => { const i = st.favs.findIndex(f => f.id === radioNow.stationuuid); if (i >= 0) st.favs.splice(i, 1); else st.favs.unshift({ id: radioNow.stationuuid, name: radioNow.name, url: radioNow.url_resolved, country: radioNow.country, tags: radioNow.tags }); save(); paintPlayer(); load(); }) : null));
  ["playing", "pause", "waiting", "error", "canplay"].forEach(ev => au.addEventListener(ev, () => { if (ev === "error" && radioNow) toast("Essa rádio está fora do ar agora"); if (player.parentNode) paintPlayer(); }, false));
  const play = s => { radioNow = s; au.src = s.url_resolved || s.url; au.play().catch(() => {}); paintPlayer(); };
  const row = s => h("li", { class: "nw" + (radioNow && radioNow.stationuuid === s.stationuuid ? " on" : ""), onclick: () => play(s) }, s.favicon && /^https:/.test(s.favicon) ? h("span", { class: "nthumb sq" }, h("img", { src: s.favicon, alt: "" })) : null, h("span", {}, h("b", {}, s.name.trim()), h("small", {}, [s.country, (s.tags || "").split(",").slice(0, 3).join(", "), s.bitrate ? s.bitrate + " kbps" : ""].filter(Boolean).join(" · "))));
  const load = (name) => {
    body.replaceChildren(st.favs.length ? h("div", {}, h("div", { class: "lbl2" }, "Favoritas"), h("ul", { class: "list" }, ...st.favs.map(f => row({ stationuuid: f.id, name: f.name, url_resolved: f.url, country: f.country, tags: f.tags })))) : null, h("div", { class: "lbl2" }, name ? "Resultados" : "Rádios"), note("Carregando…"));
    api("https://all.api.radio-browser.info/json/stations/search?hidebroken=true&limit=30&order=clickcount&reverse=true" + (st.c ? "&countrycode=" + st.c : "") + (st.tag ? "&tag=" + encodeURIComponent(st.tag) : "") + (name ? "&name=" + encodeURIComponent(name) : "")).then(r => {
      body.lastChild.replaceWith ? body.lastChild.replaceWith(h("ul", { class: "list" }, ...r.map(row))) : body.replaceChild(h("ul", { class: "list" }, ...r.map(row)), body.lastChild);
    }, () => { body.replaceChild(para(NOCONN), body.lastChild); });
  };
  const q = inp("Nome da rádio (ex.: CBN, Jovem Pan)", "search");
  q.addEventListener("keydown", e => e.key === "Enter" && load(q.value.trim()));
  const draw = () => top.replaceChildren(h("div", { class: "row" }, q, btn("Buscar", () => load(q.value.trim()), "solid")), segTabs([["BR", "Brasil"], ["PT", "Portugal"], ["", "Mundo"]], st.c, k => { st.c = k; save(); draw(); load(); }), segTabs(RGEN, st.tag, k => { st.tag = k; save(); draw(); load(); }));
  b.append(player, top, body); paintPlayer(); draw(); load();
  b.append(note("A rádio continua tocando quando você sai do app. Use Parar para desligar."));
});

/* ---------- Receitas (as suas) ---------- */
add("recipes", "Minhas receitas", "food", "Estilo de vida", b => {
  const R = X("recipes", []), top = h("div"), body = h("div"); b.append(top, body);
  const list = () => {
    top.replaceChildren(btn("Nova receita", () => edit(-1), "solid"));
    body.replaceChildren(R.length ? h("ul", { class: "list" }, ...R.map((r, i) => h("li", { class: "nw", onclick: () => view(i) }, h("span", {}, h("b", {}, r.t), h("small", {}, (r.i ? r.i.split("\n").filter(Boolean).length : 0) + " ingredientes" + (r.src ? " · " + r.src : "")))))) : h("div", { class: "empty2" }, "Nenhuma receita ainda. Crie a sua ou salve uma de Receitas do mundo."));
  };
  const view = i => subView(b, () => {
    const r = R[i], ings = (r.i || "").split("\n").map(x => x.trim()).filter(Boolean), steps = (r.p || "").split(/\n+/).map(x => x.trim()).filter(Boolean);
    r.chk = r.chk || {};
    top.replaceChildren(h("button", { class: "sbtn", onclick: () => history.back() }, ic("back", 16), " Receitas"));
    body.replaceChildren(h("h2", { class: "ah" }, r.t), r.img ? h("img", { class: "aimg", src: r.img, alt: "" }) : null,
      h("div", { class: "lbl2" }, "Ingredientes"), h("ul", { class: "list" }, ...ings.map((x, k) => h("li", {}, h("input", { type: "checkbox", checked: r.chk[k] ? "checked" : false, onchange: e => { r.chk[k] = e.target.checked; save(); } }), h("span", { class: r.chk[k] ? "done" : "" }, x)))),
      h("div", { class: "lbl2" }, "Modo de preparo"), h("ol", { class: "steps" }, ...steps.map(s => h("li", {}, s))),
      h("div", { class: "row" }, btn("Editar", () => { history.back(); setTimeout(() => edit(i), 200); }), btn("Desmarcar ingredientes", () => { r.chk = {}; save(); history.back(); setTimeout(() => view(i), 200); }), btn("Apagar", () => { if (confirm("Apagar esta receita?")) { R.splice(i, 1); save(); history.back(); } })));
    window.scrollTo(0, 0);
  }, list);
  const edit = i => subView(b, () => {
    const r = i >= 0 ? R[i] : { t: "", i: "", p: "" }, t = inp("Nome da receita", "text", { value: r.t }), ing = h("textarea", { placeholder: "Um ingrediente por linha", style: "min-height:140px" }), pr = h("textarea", { placeholder: "Passos do preparo (um por linha)", style: "min-height:160px" });
    ing.value = r.i || ""; pr.value = r.p || "";
    top.replaceChildren(h("button", { class: "sbtn", onclick: () => history.back() }, ic("back", 16), " Receitas"));
    body.replaceChildren(h("div", { class: "cvbox" }, h("label", {}, "Nome"), t, h("label", {}, "Ingredientes"), ing, h("label", {}, "Modo de preparo"), pr),
      btn("Salvar receita", () => { if (!t.value.trim()) return toast("Dê um nome à receita"); const o = Object.assign(r, { t: t.value.trim(), i: ing.value, p: pr.value }); if (i < 0) R.unshift(o); save(); t.value = ing.value = pr.value = ""; snapDrafts(); toast("Receita salva"); history.back(); }, "solid wide"));
  }, list);
  list();
});

/* ---------- Receitas do mundo (já em português) ---------- */
function trChunks(text, from, to) {
  const parts = []; let rest = String(text || "").trim();
  while (rest) { let cut = rest.length <= 450 ? rest.length : Math.max(rest.lastIndexOf(". ", 450), rest.lastIndexOf("\n", 450)); if (cut < 100) cut = 450; parts.push(rest.slice(0, cut + 1)); rest = rest.slice(cut + 1).trim(); }
  return parts.reduce((p, part) => p.then(acc => api("https://api.mymemory.translated.net/get?q=" + encodeURIComponent(part) + "&langpair=" + from + "|" + to).then(j => acc.concat(txt(j.responseData.translatedText)), () => acc.concat(part))), Promise.resolve([])).then(a => a.join(" "));
}
const MPT = { Chicken: "Frango", Beef: "Carne", Pasta: "Massa", Seafood: "Frutos do mar", Dessert: "Sobremesa", Vegetarian: "Vegetariano", Vegan: "Vegano", Pork: "Porco", Lamb: "Cordeiro", Goat: "Cabrito", Side: "Acompanhamento", Starter: "Entrada", Breakfast: "Café da manhã", Miscellaneous: "Diversos", American: "Americana", British: "Britânica", Canadian: "Canadense", Chinese: "Chinesa", Croatian: "Croata", Dutch: "Holandesa", Egyptian: "Egípcia", Filipino: "Filipina", French: "Francesa", Greek: "Grega", Indian: "Indiana", Irish: "Irlandesa", Italian: "Italiana", Jamaican: "Jamaicana", Japanese: "Japonesa", Kenyan: "Queniana", Malaysian: "Malaia", Mexican: "Mexicana", Moroccan: "Marroquina", Polish: "Polonesa", Portuguese: "Portuguesa", Russian: "Russa", Spanish: "Espanhola", Thai: "Tailandesa", Tunisian: "Tunisiana", Turkish: "Turca", Ukrainian: "Ucraniana", Vietnamese: "Vietnamita", Australian: "Australiana", Brazilian: "Brasileira", Argentinian: "Argentina", Norwegian: "Norueguesa", Saudi: "Saudita", Syrian: "Síria", Uruguayan: "Uruguaia", Venezulan: "Venezuelana", Algerian: "Argelina" };
const mpt = x => MPT[x] || x;
const MCATS = [["chicken", "Frango"], ["beef", "Carne"], ["pasta", "Massas"], ["fish", "Peixe"], ["cake", "Bolos"], ["soup", "Sopas"], ["rice", "Arroz"], ["salad", "Saladas"], ["pork", "Porco"], ["pie", "Tortas"]];
add("c_receitas", "Receitas do mundo", "food", "Cultura", b => {
  const st = X("mundo", { q: "chicken", label: "Frango" }), top = h("div"), body = h("div"); b.append(top, body);
  const search = () => {
    const q = inp("Buscar (ex.: lasanha, bolo de chocolate)", "search");
    const typed = () => { const v = q.value.trim(); if (!v) return; body.replaceChildren(note("Buscando…")); trChunks(v, "pt-br", "en").then(en => { st.q = en.replace(/[.!?]$/, ""); st.label = v; save(); search(); }); };
    q.addEventListener("keydown", e => e.key === "Enter" && typed());
    top.replaceChildren(h("div", { class: "row" }, q, btn("Buscar", typed, "solid")), segTabs(MCATS, st.q, k => { st.q = k; st.label = (MCATS.find(x => x[0] === k) || [k, k])[1]; save(); search(); }));
    body.replaceChildren(note("Buscando receitas de " + st.label + "…"));
    api("https://www.themealdb.com/api/json/v1/1/search.php?s=" + encodeURIComponent(st.q)).then(j => {
      const ms = (j.meals || []).slice(0, 16); if (!ms.length) return body.replaceChildren(para("Nada encontrado. Tente outra palavra."));
      const names = ms.map(m => h("b", {}, m.strMeal));
      body.replaceChildren(h("div", { class: "gal" }, ...ms.map((m, i) => h("div", { class: "gi rc", onclick: () => meal(m) }, h("img", { src: m.strMealThumb + "/preview", alt: "" }), names[i], h("small", {}, [mpt(m.strArea), mpt(m.strCategory)].filter(Boolean).join(" · "))))));
      trChunks(ms.map(m => m.strMeal).join("\n"), "en", "pt-br").then(t => { const tt = t.split(/\s*\n\s*|\s{2,}/); if (tt.length === ms.length) tt.forEach((x, i) => { names[i].textContent = x; ms[i].pt = x; }); });
    }, () => body.replaceChildren(para(NOCONN)));
  };
  const meal = m => subView(b, () => {
    top.replaceChildren(h("button", { class: "sbtn", onclick: () => history.back() }, ic("back", 16), " Receitas"));
    const rows = []; for (let i = 1; i <= 20; i++) if (m["strIngredient" + i] && m["strIngredient" + i].trim()) rows.push(((m["strMeasure" + i] || "").trim() + " " + m["strIngredient" + i].trim()).trim());
    const ingBox = h("ul", { class: "list" }, note("Traduzindo…")), stepBox = h("ol", { class: "steps" }, note("Traduzindo o modo de preparo…"));
    let ptIng = rows, ptSteps = [];
    body.replaceChildren(h("h2", { class: "ah" }, m.pt || m.strMeal), h("p", { class: "muted" }, [mpt(m.strArea), mpt(m.strCategory)].filter(Boolean).join(" · ")), h("img", { class: "aimg", src: m.strMealThumb, alt: "" }),
      h("div", { class: "lbl2" }, "Ingredientes"), ingBox, h("div", { class: "lbl2" }, "Modo de preparo"), stepBox,
      btn("Salvar em Minhas receitas", () => { X("recipes", []).unshift({ t: m.pt || m.strMeal, i: ptIng.join("\n"), p: ptSteps.join("\n"), img: m.strMealThumb, src: "Receitas do mundo" }); save(); toast("Salva em Minhas receitas"); }, "solid wide"));
    window.scrollTo(0, 0);
    trChunks(rows.join("\n"), "en", "pt-br").then(t => { const a = t.split(/\s*\n\s*/); ptIng = a.length >= rows.length * .7 ? a : rows; ingBox.replaceChildren(...ptIng.map(x => h("li", {}, h("span", {}, x)))); });
    const steps = (m.strInstructions || "").replace(/\r/g, "").replace(/\.\s+(?=STEP|\d+\.)/gi, ".\n").split(/\n+/).map(x => x.replace(/^(STEP\s*\d+:?|\d+\.)\s*/i, "").trim()).filter(x => x.length > 2);
    trChunks(steps.join("\n"), "en", "pt-br").then(t => { const a = t.split(/\s*\n\s*/).filter(Boolean); ptSteps = a.length > 1 ? a : t.replace(/\.\s+/g, ".\n").split("\n"); stepBox.replaceChildren(...ptSteps.map(x => h("li", {}, x))); });
  }, search);
  search();
});

/* ---------- Quebra-cabeça deslizante ---------- */
add("slide", "Quebra-Cabeça", "puzzle", "Jogos", b => {
  const st = X("slidep", { n: 3, best: {} }), top = h("div"), head = h("div", { class: "ulh" }), tbl = h("table", { class: "slp" }), msg = h("p", { class: "score" }); let t, moves, t0, tm;
  const solved = () => t.every((v, i) => v === (i + 1) % (st.n * st.n));
  const shuffleT = () => { const n = st.n; t = Array.from({ length: n * n }, (_, x) => (x + 1) % (n * n)); let e = n * n - 1, prev = -1;
    for (let k = 0; k < 120 * n; k++) { const r = Math.floor(e / n), c = e % n, nb = []; if (r) nb.push(e - n); if (r < n - 1) nb.push(e + n); if (c) nb.push(e - 1); if (c < n - 1) nb.push(e + 1); const m = pick(nb.filter(x => x !== prev)); t[e] = t[m]; t[m] = 0; prev = e; e = m; }
    if (solved()) return shuffleT(); moves = 0; t0 = 0; clearInterval(tm); tm = null; draw(); };
  const secs = () => t0 ? Math.floor((Date.now() - t0) / 1000) : 0;
  const tap = i => { const n = st.n, e = t.indexOf(0), r = Math.floor(i / n), c = i % n, er = Math.floor(e / n), ec = e % n; if (solved()) return;
    if (r !== er && c !== ec) return;
    if (!t0) { t0 = Date.now(); tm = setInterval(() => { const x = head.querySelectorAll("b")[1]; if (x) x.textContent = secs() + "s"; }, 1000); }
    const step = r === er ? (c < ec ? -1 : 1) : (r < er ? -n : n); let cur = e; while (cur !== i) { t[cur] = t[cur + step]; cur += step; } t[i] = 0; moves++;
    if (solved()) { clearInterval(tm); const k = st.n; if (!st.best[k] || moves < st.best[k]) { st.best[k] = moves; save(); } } draw(); };
  const draw = () => { const n = st.n, won = solved();
    top.replaceChildren(segTabs([[3, "3×3 Fácil"], [4, "4×4 Médio"], [5, "5×5 Difícil"]], st.n, k => { st.n = k; save(); shuffleT(); }));
    head.replaceChildren(h("div", {}, h("small", {}, "JOGADAS"), h("b", {}, String(moves))), h("div", {}, h("small", {}, "TEMPO"), h("b", {}, secs() + "s")), h("div", {}, h("small", {}, "RECORDE"), h("b", {}, st.best[n] ? st.best[n] + " jog." : "—")));
    const rows = []; for (let r = 0; r < n; r++) rows.push(h("tr", {}, ...Array.from({ length: n }, (_, c) => { const i = r * n + c, v = t[i]; return h("td", { class: v ? (v === i + 1 ? "ok" : "") : "empty", onclick: () => tap(i) }, v ? String(v) : ""); })));
    tbl.className = "slp n" + n; tbl.replaceChildren(h("tbody", {}, ...rows));
    msg.textContent = won ? "Resolvido em " + moves + " jogadas e " + secs() + "s!" : "Toque numa peça da mesma linha ou coluna do espaço vazio para deslizar. Peças no lugar certo ficam marcadas.";
    keepPut("slide", { n: st.n, t, moves }); };
  onClose(b, () => clearInterval(tm));
  b.append(top, head, tbl, msg, btn("Embaralhar", shuffleT, "solid"));
  const sv = keepGet("slide"); if (sv && sv.t && sv.n === st.n) { t = sv.t; moves = sv.moves; t0 = 0; draw(); } else shuffleT();
});
