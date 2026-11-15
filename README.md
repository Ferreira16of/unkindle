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
  ai.js            Assistente IA (Groq); só para quem está logado, com limite por pessoa
  zap.js           ponte para o servidor do WhatsApp (ZAP_URL)
zap/               servidor do WhatsApp para a Render (Node + Baileys)
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

## IA (Groq)

A chave da Groq **nunca** vai para o repositório nem para o site:

- **Vercel:** Settings → Environment Variables → `GROQ_API_KEY` = sua chave (Production e Preview). Faça um novo deploy depois.
- **Local:** crie o arquivo `.env.local` na raiz com `GROQ_API_KEY=...` (já está no `.gitignore`).

O app chama `/__ai` no próprio site; só quem está logado no Unkindle consegue usar (o servidor confere o token do Supabase),
com limite de 30 pedidos a cada 10 minutos por pessoa.

## WhatsApp (servidor na Render)

O app **WhatsApp** conecta a sua conta como "aparelho conectado" (igual ao WhatsApp Web) através de um servidor
próprio na pasta `zap/`. Ele usa a biblioteca não oficial Baileys: **use só com a sua conta e sem disparar mensagens em massa**,
porque o WhatsApp pode banir números que parecem robôs. O servidor limita o envio a 12 mensagens por minuto.

```
Kindle ──> unkindle.vercel.app/__zap (api/zap.js) ──> Render: zap/index.js ──> WhatsApp
                                                        └── Supabase: sessão e conversas criptografadas
```

1. **Supabase:** rode de novo o `unkindle/supabase.sql` (cria a tabela `unkindle_zap_kv`, que só o servidor acessa).
2. **Render:** New → Blueprint → escolha este repositório (usa o `render.yaml`, plano grátis). Preencha:
   - `SUPABASE_SECRET_KEY`: chave secreta do Supabase (Project Settings → API Keys → secret / service_role). **Só na Render, nunca no site.**
   - `ZAP_SECRET`: uma senha longa e aleatória (criptografa a sessão). Se mudar, será preciso parear de novo.
   - `ZAP_ALLOWED_EMAILS`: e-mail(s) da conta do Unkindle que podem usar, separados por vírgula.
   - `ZAP_PROXY_KEY`: outra senha aleatória (a mesma vai na Vercel).
3. **Vercel:** Settings → Environment Variables → `ZAP_URL` = endereço da Render (ex.: `https://unkindle-zap.onrender.com`)
   e `ZAP_PROXY_KEY` = a mesma da Render. Faça um novo deploy.
4. **Pulsetic (não deixar a Render dormir):** crie um monitor HTTP para `https://SEU-SERVICO.onrender.com/health`
   checando a cada 5 minutos (a Render grátis dorme após 15 minutos sem visitas).
5. No Kindle: abra **WhatsApp**, digite seu número com 55 e DDD, toque em **Gerar código** e digite o código no celular
   em *Aparelhos conectados → Conectar aparelho → Conectar com número de telefone*.

Para desligar: botão **Desconectar WhatsApp** no app (apaga a sessão do servidor) ou remova o aparelho no celular.

Teste local: `cd zap && npm install && node index.js` (porta 3000) e `python tools/serve.py`; o `/__zap` local repassa para `http://localhost:3000`.
