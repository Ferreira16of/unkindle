"use strict";
/* Apps de produtividade, leitura e vida (parte A). */


add("breath", "Respiração", "wind", "Estilo de vida", b => {
  const modes = { "Caixa 4-4-4-4": [["Inspire", 4], ["Segure", 4], ["Expire", 4], ["Segure", 4]], "4-7-8": [["Inspire", 4], ["Segure", 7], ["Expire", 8]], "Calma 5-5": [["Inspire", 5], ["Expire", 5]] };
  const sel = h("select", {}, ...Object.keys(modes).map(k => h("option", {}, k))), out = h("div", { class: "big", style: "text-align:center;padding:30px 0" }, "Pronto"), info = h("p", { class: "muted", style: "text-align:center" });
  let iv = null; const stop = () => { clearInterval(iv); iv = null; out.textContent = "Pronto"; };
  const start = () => { stop(); const seq = modes[sel.value]; let p = 0, t = seq[0][1], cy = 0; const show = () => { out.textContent = seq[p][0] + " · " + t; info.textContent = "Ciclos: " + cy; }; show();
    iv = setInterval(() => { t--; if (t <= 0) { p = (p + 1) % seq.length; if (!p) cy++; t = seq[p][1]; } show(); }, 1000); };
  b.append(h("div", { class: "row" }, sel, btn("Começar", start, "solid"), btn("Parar", stop)), out, info); onClose(b, () => clearInterval(iv));
});


add("calendar", "Calendário", "cal", "Essenciais", b => {
  const ev = X("events", {});
  const MES = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  const SEM = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
  const key = (y, m, d) => y + "-" + pad2(m + 1) + "-" + pad2(d);
  const parse = k => { const p = k.split("-"); return new Date(+p[0], +p[1] - 1, +p[2]); };
  /* eventos antigos eram só texto; agora {t: texto, h: hora} */
  const items = k => (ev[k] || []).map(x => typeof x === "string" ? { t: x, h: "" } : x);
  const sortT = a => a.slice().sort((x, y) => (x.h || "99") < (y.h || "99") ? -1 : 1);
  let ym = new Date(); ym.setDate(1); let sel = today();
  const nav = h("div", { class: "calnav" }), grid = h("div"), dayBox = h("div"), upBox = h("div");
  const tIn = inp("Hora", "time"), xIn = inp("Novo evento");
  const addE = () => { const t = xIn.value.trim(); if (!t) return; const l = items(sel); l.push({ t, h: tIn.value || "" }); ev[sel] = sortT(l); xIn.value = ""; tIn.value = ""; save(); draw(); };
  xIn.addEventListener("keydown", e => e.key === "Enter" && addE());
  const go = n => { ym.setMonth(ym.getMonth() + n); draw(); };
  const draw = () => {
    const y = ym.getFullYear(), m = ym.getMonth(), t0 = today();
    nav.replaceChildren(h("span", {}, h("button", { class: "ib", "aria-label": "Mês anterior", onclick: () => go(-1) }, ic("back", 24))),
      h("span", { class: "mt" }, MES[m] + " " + y),
      h("span", { style: "text-align:right" }, h("button", { class: "ib", "aria-label": "Próximo mês", onclick: () => go(1) }, ic("fwd", 24))));
    const start = new Date(y, m, 1 - new Date(y, m, 1).getDay());
    const rows = [];
    for (let r = 0; r < 6; r++) {
      const tds = [];
      for (let c = 0; c < 7; c++) {
        const d = new Date(start.getFullYear(), start.getMonth(), start.getDate() + r * 7 + c), k = key(d.getFullYear(), d.getMonth(), d.getDate());
        const cls = (d.getMonth() !== m ? "out " : "") + (k === t0 ? "now " : "") + (k === sel ? "sel" : "");
        tds.push(h("td", { class: cls, onclick: () => { sel = k; if (d.getMonth() !== m) { ym = new Date(d.getFullYear(), d.getMonth(), 1); } draw(); } },
          h("span", { class: "n" }, d.getDate()), h("span", { class: "dot" + ((ev[k] || []).length ? "" : " no") })));
      }
      rows.push(h("tr", {}, ...tds));
      if (r >= 4 && new Date(start.getFullYear(), start.getMonth(), start.getDate() + (r + 1) * 7).getMonth() !== m) break;
    }
    grid.replaceChildren(h("table", { class: "cal" }, h("thead", {}, h("tr", {}, ..."DSTQQSS".split("").map(x => h("th", {}, x)))), h("tbody", {}, ...rows)));
    const sd = parse(sel), l = sortT(items(sel));
    const isToday = sel === t0;
    dayBox.replaceChildren(
      h("div", { class: "dayh" }, h("h3", {}, (isToday ? "Hoje, " : SEM[sd.getDay()] + ", ") + sd.getDate() + " de " + MES[sd.getMonth()].toLowerCase()),
        isToday ? null : h("button", { class: "lnk", onclick: () => { sel = t0; ym = new Date(); ym.setDate(1); draw(); } }, "Ir para hoje")),
      l.length ? h("ul", { class: "list" }, ...l.map((x, i) => h("li", {}, h("span", {}, h("span", { class: "tm" }, x.h || "—"), " " + x.t),
        h("button", { "aria-label": "Apagar", onclick: () => { l.splice(i, 1); if (l.length) ev[sel] = l; else delete ev[sel]; save(); draw(); } }, ic("x", 20)))))
        : h("div", { class: "empty2" }, "Nenhum evento neste dia."),
      h("div", { class: "bar" }, h("span", { style: "width:7.5em" }, tIn), h("span", {}, xIn), h("span", {}, btn("Adicionar", addE, "solid"))));
    const up = Object.keys(ev).filter(k => k >= t0 && (ev[k] || []).length).sort().slice(0, 8);
    upBox.replaceChildren(h("div", { class: "lbl2" }, "Próximos eventos"),
      up.length ? h("ul", { class: "list" }, ...up.map(k => { const d = parse(k); return h("li", { style: "cursor:pointer", onclick: () => { sel = k; ym = new Date(d.getFullYear(), d.getMonth(), 1); draw(); window.scrollTo(0, 0); } },
        h("span", {}, h("b", {}, k === t0 ? "Hoje" : SEM[d.getDay()].split("-")[0] + ", " + d.getDate() + "/" + pad2(d.getMonth() + 1)), h("small", {}, sortT(items(k)).map(x => (x.h ? x.h + " " : "") + x.t).join(" · ")))); }))
        : h("div", { class: "empty2" }, "Nada marcado daqui para frente."));
  };
  b.append(nav, grid, dayBox, upBox); draw();
});




add("decider", "Decisor", "shuffle", "Ferramentas", b => {
  const ta = h("textarea", { placeholder: "Uma opção por linha", style: "min-height:110px" }), out = h("p", { class: "big" });
  b.append(ta, h("div", { class: "row" }, btn("Sortear", () => { const o = ta.value.split("\n").map(s => s.trim()).filter(Boolean); out.textContent = o.length ? pick(o) : "Escreva opções"; }, "solid"),
    btn("Moeda", () => out.textContent = pick(["Cara", "Coroa"])), btn("Dado 6", () => out.textContent = 1 + rnd(6)), btn("Dado 20", () => out.textContent = 1 + rnd(20))), out);
});




add("files", "Arquivos", "list", "Ferramentas", b => {
  const body = h("div"); b.append(body);
  if (!remote) { body.append(h("div", { class: "empty2" }, "A conta não está configurada neste Unkindle.")); return; }
  const kb = n => n >= 1048576 ? (n / 1048576).toFixed(1).replace(".", ",") + " MB" : Math.max(1, Math.round(n / 1024)) + " KB";
  const when = s => { const d = new Date(s); return isNaN(d) ? "" : pad2(d.getDate()) + "/" + pad2(d.getMonth() + 1) + "/" + d.getFullYear(); };
  const login = () => body.replaceChildren(h("div", { class: "card", style: "text-align:center" }, h("div", { style: "margin:6px 0 10px" }, ic("user", 36)),
    h("p", {}, h("b", {}, "Seus arquivos ficam na sua conta.")), h("p", { class: "muted" }, "Entre para enviar e abrir seus arquivos em qualquer aparelho."),
    btn("Entrar ou criar conta", () => pages.auth(), "solid wide")));
  if (!session) return login();
  const prog = h("div", { class: "prog" }, h("i")), st = h("p", { class: "muted" }), list = h("div");
  const file = h("input", { type: "file", multiple: "" });
  show(prog, false);
  const fail = e => { st.textContent = /bucket not found|not found/i.test(e.message) && e.status !== 401 ? "O armazenamento de arquivos ainda não foi ativado no Supabase (rode o supabase.sql)." : "Erro: " + pt(e.message); };
  const draw = () => {
    st.textContent = "Carregando…";
    filesList().then(all => {
      const tot = all.reduce((a, f) => a + f.size, 0);
      st.textContent = all.length ? all.length + (all.length === 1 ? " arquivo" : " arquivos") + " · " + kb(tot) : "";
      list.replaceChildren(all.length ? h("ul", { class: "list" }, ...all.map(f => h("li", {},
        h("span", {}, h("b", {}, f.name), h("small", {}, kb(f.size) + (f.date ? " · " + when(f.date) : ""))),
        btn("Abrir", () => { st.textContent = "Abrindo…"; fileUrl(f.name).then(u => { st.textContent = ""; window.location.href = u; }, fail); }),
        h("button", { "aria-label": "Apagar", onclick: () => { if (confirm("Apagar " + f.name + " da sua conta?")) fileDel(f.name).then(draw, fail); } }, ic("x", 20)))))
        : h("div", { class: "empty2" }, "Nenhum arquivo ainda. Toque em Enviar arquivo."));
    }, fail);
  };
  file.onchange = () => {
    const fs = Array.prototype.slice.call(file.files || []); file.value = ""; if (!fs.length) return;
    let i = 0; show(prog, true);
    const next = () => {
      if (i >= fs.length) { show(prog, false); toast("Enviado"); return draw(); }
      const f = fs[i++]; st.textContent = "Enviando " + f.name + " (" + i + "/" + fs.length + ")…";
      if (f.size > 50 * 1048576) { toast(f.name + ": máximo 50 MB"); return next(); }
      fileUp(f, p => { prog.firstChild.style.width = Math.round(p * 100) + "%"; }).then(next, e => { show(prog, false); fail(e); });
    };
    next();
  };
  body.append(h("p", { class: "muted" }, "Guardados na sua conta (" + session.user.email + "). Abra em qualquer aparelho em que você entrar."),
    h("label", { class: "filebtn solid wide" }, ic("plus", 20), " Enviar arquivo", file), prog, st, list);
  draw();
});


add("cards", "Flashcards", "card", "Estilo de vida", b => {
  const cards = X("cards", []), f = inp("Frente"), v = inp("Verso"), area = h("div", { class: "card", style: "text-align:center;margin-top:10px" });
  const due = () => cards.filter(c => (c.due || "") <= today());
  const study = () => { const d = due(); if (!d.length) { area.replaceChildren(h("p", {}, cards.length ? "Nada para revisar hoje." : "Crie seu primeiro cartão.")); return; }
    const c = pick(d); let shown = false; const front = h("div", { class: "big" }, c.f), back = h("div", { style: "margin:8px 0;font-size:1.3em" }, "");
    const rate = ok => { c.box = ok ? Math.min((c.box || 0) + 1, 5) : 0; const days = [0, 1, 2, 4, 8, 16][c.box]; const dt = new Date(); dt.setDate(dt.getDate() + days); c.due = dt.toISOString().slice(0, 10); save(); study(); };
    area.replaceChildren(front, back, h("div", { class: "row", style: "justify-content:center" }, btn("Mostrar", () => { back.textContent = c.v; }), btn("Errei", () => rate(false)), btn("Acertei", () => rate(true), "solid")), h("p", { class: "muted" }, d.length + " para revisar")); };
  const addC = () => { if (f.value.trim() && v.value.trim()) { cards.push({ f: f.value.trim(), v: v.value.trim(), box: 0, due: today() }); f.value = v.value = ""; save(); study(); } };
  b.append(h("div", { class: "row" }, f, v, btn("Criar", addC, "solid")), area); study();
});

add("flipbook", "Flipbook", "film", "Estilo de vida", b => {
  const c = cv(320, 240), st = { size: 4, color: "#000" }; drawing(c, st); const g = c.getContext("2d"); const frames = []; let iv = null; const info = h("p", { class: "muted" }, "0 quadros");
  const snap = () => { frames.push(c.toDataURL()); info.textContent = frames.length + " quadros"; g.clearRect(0, 0, 320, 240); };
  const play = () => { if (!frames.length) return; clearInterval(iv); let i = 0; iv = setInterval(() => { const im = new Image(); im.onload = () => { g.clearRect(0, 0, 320, 240); g.drawImage(im, 0, 0); }; im.src = frames[i]; i = (i + 1) % frames.length; }, 150); };
  b.append(c, h("div", { class: "row" }, btn("Salvar quadro", snap, "solid"), btn("Reproduzir", play), btn("Parar", () => { clearInterval(iv); g.clearRect(0, 0, 320, 240); }), btn("Limpar", () => { frames.length = 0; g.clearRect(0, 0, 320, 240); info.textContent = "0 quadros"; })), info); onClose(b, () => clearInterval(iv));
});

add("food", "Food Log", "food", "Estilo de vida", b => listApp(b, "food", [{ k: "t", ph: "Alimento" }, { k: "k", ph: "kcal", type: "number" }],
  { show: i => `${i.date.slice(5)} · ${i.t} · ${i.k || 0} kcal`, head: it => `Hoje: ${it.filter(i => i.date === today()).reduce((a, i) => a + (+i.k || 0), 0)} kcal` }));

add("speed", "Leitor Interativo", "bolt", "Estilo de vida", b => {
  const ta = h("textarea", { placeholder: "Cole um texto para ler palavra por palavra", style: "min-height:120px" }), w = h("input", { type: "range", min: 100, max: 700, value: 300, step: 25 }), lab = h("span", {}, "300 palavras/min"), out = h("div", { class: "big", style: "text-align:center;padding:30px 0;min-height:110px" }, "…");
  let iv = null; w.oninput = () => lab.textContent = w.value + " palavras/min";
  const stop = () => { clearInterval(iv); iv = null; };
  const play = () => { stop(); const words = ta.value.split(/\s+/).filter(Boolean); let i = 0; if (!words.length) return; iv = setInterval(() => { if (i >= words.length) return stop(); out.textContent = words[i++]; }, 60000 / +w.value); };
  b.append(ta, h("div", { class: "row" }, w, lab), h("div", { class: "row" }, btn("Ler", play, "solid"), btn("Parar", stop)), out); onClose(b, stop);
});

add("diary", "Diário", "pen", "Estilo de vida", b => {
  const d = X("diary", {}), date = inp("", "date", { value: today() }), ta = h("textarea", { style: "min-height:220px", placeholder: "Como foi seu dia?" }), list = h("ul", { class: "list" });
  const load = () => ta.value = d[date.value] || ""; date.onchange = load;
  const draw = () => list.replaceChildren(...Object.keys(d).sort().reverse().map(k => h("li", {}, h("span", {}, k + " — " + d[k].slice(0, 50)), btn("Abrir", () => { date.value = k; load(); }))));
  b.append(date, ta, h("div", { class: "row" }, btn("Salvar", () => { if (ta.value.trim()) d[date.value] = ta.value; else delete d[date.value]; save(); draw(); toast("Salvo"); }, "solid")), list); load(); draw();
});


