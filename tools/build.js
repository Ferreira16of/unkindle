/* Gera unkindle/unkindle.js (ES5 + polyfills) e style.css / style.light.css (a partir de src/style.tpl.css), e audita tudo. */
const fs = require("fs"), path = require("path");
const babel = require("@babel/core"), esbuild = require("esbuild"), acorn = require("acorn");
const root = path.join(__dirname, "..", "unkindle"), src = path.join(root, "src");
const order = ["compat.js", "icons.js", "core.js", "home.js", "apps-lib.js", "apps-core.js", "apps-a.js", "apps-b.js", "web-lib.js", "web-a.js", "web-b.js", "games-a.js", "games-b.js", "games-2p.js", "apps-merged.js", "apps-better.js", "apps-more.js", "apps-social.js", "chess.js", "games-pc.js", "apps-ai.js", "apps-zap.js", "boot.js"];
let ok = true;

/* ---- JavaScript ---- */
let code = order.map(f => fs.readFileSync(path.join(src, f), "utf8").replace(/^\s*"use strict";\s*/, "")).join("\n;\n");
code = "(function () {\n\"use strict\";\n" + code + "\n})();";
const app = babel.transformSync(code, {
  presets: [["@babel/preset-env", { targets: { ie: "9" }, modules: false }]],
  comments: false, compact: false, sourceType: "script", configFile: false, babelrc: false,
}).code;
const poly = esbuild.buildSync({
  stdin: { contents: 'import "core-js/stable"; import "regenerator-runtime/runtime";', resolveDir: __dirname, loader: "js" },
  bundle: true, minify: true, format: "iife", target: "es5", write: false, logLevel: "error",
}).outputFiles[0].text;
const out = "/* Unkindle - compilado para ES5. Não edite: veja src/ e rode tools/build.js */\n" + poly + "\n" + app;
fs.writeFileSync(path.join(root, "unkindle.js"), out);
try { acorn.parse(out, { ecmaVersion: 5 }); console.log("OK  unkindle.js é ES5 válido (" + Math.round(out.length / 1024) + " KB)"); }
catch (e) { ok = false; console.log("ERRO unkindle.js não é ES5:", e.message, "linha", e.loc && e.loc.line); }

/* ---- CSS: um template, duas paletas ---- */
const pals = {
  "style.css": { BG: "#000000", FG: "#ffffff", MUT: "#b8b8b8", RULE: "#6a6a6a", PAGE: "#1c1c1c" },
  "style.light.css": { BG: "#ffffff", FG: "#000000", MUT: "#4a4a4a", RULE: "#9a9a9a", PAGE: "#e4e4e4" },
};
const tpl = fs.readFileSync(path.join(src, "style.tpl.css"), "utf8");
const bad = [[/display\s*:\s*(inline-)?(flex|grid)/, "flex/grid"], [/var\s*\(/, "variáveis CSS"], [/aspect-ratio/, "aspect-ratio"], [/position\s*:\s*fixed/, "position:fixed"], [/\d\s*(rem|vh|vw)\b/, "rem/vh/vw"], [/:focus-within|:focus-visible|:is\(|:where\(/, "seletores novos"], [/\bcalc\(/, "calc()"], [/\{\{/, "token não resolvido"]];
for (const [file, p] of Object.entries(pals)) {
  const css = tpl.replace(/\{\{(\w+)\}\}/g, (m, k) => p[k] || m);
  fs.writeFileSync(path.join(root, file), css);
  const clean = css.replace(/\/\*[\s\S]*?\*\//g, "").replace(/#hdr\{[^}]*\}/, ""); /* o cabeçalho fixo é a única exceção (com recuo no corpo da página) */
  let fileOk = true;
  bad.forEach(([re, n]) => { if (re.test(clean)) { ok = false; fileOk = false; console.log("ERRO " + file + " usa", n); } });
  if (fileOk) console.log("OK  " + file + " sem recursos modernos");
}
/* ---- Versão dos arquivos no index.html: evita que o navegador (e o Kindle) reutilize arquivos velhos ---- */
const ver = Date.now().toString(36);
const idx = path.join(root, "index.html");
fs.writeFileSync(idx, fs.readFileSync(idx, "utf8").replace(/\?v=[0-9a-z]+/g, "?v=" + ver));
console.log("OK  index.html versionado (v=" + ver + ")");
process.exit(ok ? 0 : 1);
