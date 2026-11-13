# Unkindle

Central de apps para e-readers (Kindle e afins), celulares e computadores, em português.
Notícias, Wikipédia, Biblioteca de livros grátis, clima, comunidade (Fórum, UnChat, Enquetes),
utilidades e dezenas de jogos — tudo pensado para tela e-ink.

## Estrutura

```
unkindle/          site publicado (HTML, CSS e o unkindle.js já compilado)
  src/             código-fonte dos apps (ES2015+), compilado para ES5 pelo build
  supabase.sql     tabelas, regras (RLS) e funções do Supabase — rode no SQL Editor
  config.js        URL do Supabase e chave *publishable* (pública por design)
api/               funções da Vercel
  fetch.js         leitor de páginas (Navegador, Notícias, Reddit, Biblioteca) com proteção anti-SSRF
  report.js        relatórios técnicos de erro (vão para os logs da Vercel)
tools/
  build.js         gera unkindle.js (ES5 + polyfills, roda até em Kindle antigo) e style.css / style.light.css
  serve.py         servidor local para testar na rede (inclui /__fetch e /__report)
vercel.json        publicação estática da pasta unkindle/ + rotas /__fetch e /__report
```

## Desenvolvimento

```bash
cd tools && npm install && node build.js     # compila
python tools/serve.py 8080                   # abre em http://localhost:8080 (e no Kindle pelo IP da máquina)
```

O build confere que o JavaScript final é ES5 e que o CSS não usa recursos que o navegador antigo do Kindle não entende.

## Supabase

1. Crie um projeto e rode `unkindle/supabase.sql` no SQL Editor (pode rodar várias vezes).
2. Em Authentication, desligue "Confirm email" (o app cria conta só com e-mail e senha).
3. Coloque a URL e a chave publishable em `unkindle/config.js`. Nunca use a chave service_role no site.

## Deploy (Vercel)

Importe o repositório na Vercel. Não há passo de build: a Vercel publica a pasta `unkindle/`
(o `unkindle.js` compilado vai junto no repositório) e cria as funções da pasta `api/`.
Depois de mudar algo em `unkindle/src`, rode `node tools/build.js` e faça commit do resultado.
