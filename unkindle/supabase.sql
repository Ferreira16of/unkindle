-- Rode no SQL Editor do seu projeto Supabase do Unkindle. Pode rodar várias vezes: é idempotente.

-- 1) Dados do usuário (sincronização)
create table if not exists public.unkindle_data (
  user_id uuid primary key references auth.users(id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);
alter table public.unkindle_data enable row level security;
drop policy if exists "dono le" on public.unkindle_data;
drop policy if exists "dono insere" on public.unkindle_data;
drop policy if exists "dono atualiza" on public.unkindle_data;
drop policy if exists "dono apaga" on public.unkindle_data;
create policy "dono le" on public.unkindle_data for select using (auth.uid() = user_id);
create policy "dono insere" on public.unkindle_data for insert with check (auth.uid() = user_id);
create policy "dono atualiza" on public.unkindle_data for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "dono apaga" on public.unkindle_data for delete using (auth.uid() = user_id);

-- 2) Caixa de sugestões (app "Sugestões"). Só quem envia consegue inserir; a leitura é pelo painel do Supabase.
create table if not exists public.unkindle_feedback (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  msg text not null check (char_length(msg) <= 2000),
  created_at timestamptz not null default now()
);
alter table public.unkindle_feedback enable row level security;
drop policy if exists "dono envia" on public.unkindle_feedback;
create policy "dono envia" on public.unkindle_feedback for insert with check (auth.uid() = user_id);

-- 3) Arquivos do usuário (app "Arquivos"). Bucket privado; cada pessoa só vê a própria pasta (nome da pasta = id do usuário).
insert into storage.buckets (id, name, public, file_size_limit)
values ('unkindle-files', 'unkindle-files', false, 52428800)
on conflict (id) do update set public = false, file_size_limit = 52428800;
drop policy if exists "unkindle arquivos le" on storage.objects;
drop policy if exists "unkindle arquivos envia" on storage.objects;
drop policy if exists "unkindle arquivos atualiza" on storage.objects;
drop policy if exists "unkindle arquivos apaga" on storage.objects;
create policy "unkindle arquivos le" on storage.objects for select to authenticated
  using (bucket_id = 'unkindle-files' and (storage.foldername(name))[1] = auth.uid()::text);
create policy "unkindle arquivos envia" on storage.objects for insert to authenticated
  with check (bucket_id = 'unkindle-files' and (storage.foldername(name))[1] = auth.uid()::text);
create policy "unkindle arquivos atualiza" on storage.objects for update to authenticated
  using (bucket_id = 'unkindle-files' and (storage.foldername(name))[1] = auth.uid()::text)
  with check (bucket_id = 'unkindle-files' and (storage.foldername(name))[1] = auth.uid()::text);
create policy "unkindle arquivos apaga" on storage.objects for delete to authenticated
  using (bucket_id = 'unkindle-files' and (storage.foldername(name))[1] = auth.uid()::text);

-- 4) Nome de usuário (@). Único, minúsculo, 3 a 20 caracteres. Criado junto com a conta (gatilho) ou depois pelo app.
create table if not exists public.unkindle_profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  username text not null unique check (username ~ '^[a-z0-9_.]{3,20}$'),
  created_at timestamptz not null default now()
);
alter table public.unkindle_profiles enable row level security;
drop policy if exists "dono le perfil" on public.unkindle_profiles;
create policy "dono le perfil" on public.unkindle_profiles for select to authenticated using (auth.uid() = user_id);

-- O @ está livre? (só responde sim/não; não expõe quem é dono)
create or replace function public.unkindle_username_free(u text) returns boolean
language sql stable security definer set search_path = '' as $$
  select not exists (select 1 from public.unkindle_profiles where username = lower(trim(leading '@' from u)));
$$;
revoke all on function public.unkindle_username_free(text) from public;
grant execute on function public.unkindle_username_free(text) to anon, authenticated;

-- Escolher ou trocar o próprio @ depois de criar a conta
create or replace function public.unkindle_set_username(u text) returns void
language plpgsql security definer set search_path = '' as $$
begin
  if auth.uid() is null then raise exception 'sem sessão'; end if;
  insert into public.unkindle_profiles (user_id, username) values (auth.uid(), lower(trim(leading '@' from u)))
  on conflict (user_id) do update set username = excluded.username;
end $$;
revoke all on function public.unkindle_set_username(text) from public;
grant execute on function public.unkindle_set_username(text) to authenticated;

-- Ao criar conta com @, grava o perfil. Se o @ já existir, a criação da conta falha (o app avisa "já está em uso").
create or replace function public.unkindle_new_user() returns trigger
language plpgsql security definer set search_path = '' as $$
begin
  if coalesce(new.raw_user_meta_data ->> 'username', '') <> '' then
    insert into public.unkindle_profiles (user_id, username) values (new.id, lower(new.raw_user_meta_data ->> 'username'));
  end if;
  return new;
end $$;
drop trigger if exists unkindle_on_new_user on auth.users;
create trigger unkindle_on_new_user after insert on auth.users for each row execute function public.unkindle_new_user();

-- 5) Comunidade: Fórum, UnChat e Enquetes. Leitura pública; para postar precisa estar logado e ter um @.
--    Denúncias: com 3 denúncias de pessoas diferentes, o conteúdo some automaticamente.
create table if not exists public.unkindle_topics (
  id bigint generated always as identity primary key,
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  username text not null default '',
  cat text not null default 'Geral' check (char_length(cat) <= 40),
  title text not null check (char_length(title) between 3 and 120),
  body text not null check (char_length(body) between 1 and 5000),
  replies int not null default 0,
  reports int not null default 0,
  hidden boolean not null default false,
  created_at timestamptz not null default now(),
  last_at timestamptz not null default now()
);
create table if not exists public.unkindle_posts (
  id bigint generated always as identity primary key,
  topic_id bigint not null references public.unkindle_topics(id) on delete cascade,
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  username text not null default '',
  body text not null check (char_length(body) between 1 and 3000),
  reports int not null default 0,
  hidden boolean not null default false,
  created_at timestamptz not null default now()
);
create table if not exists public.unkindle_chat (
  id bigint generated always as identity primary key,
  room text not null default 'geral' check (room ~ '^[a-z0-9-]{2,24}$'),
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  username text not null default '',
  msg text not null check (char_length(msg) between 1 and 500),
  reports int not null default 0,
  hidden boolean not null default false,
  created_at timestamptz not null default now()
);
create table if not exists public.unkindle_polls (
  id bigint generated always as identity primary key,
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  username text not null default '',
  q text not null check (char_length(q) between 3 and 200),
  opts jsonb not null check (jsonb_typeof(opts) = 'array' and jsonb_array_length(opts) between 2 and 6),
  votes jsonb not null default '[]'::jsonb,
  reports int not null default 0,
  hidden boolean not null default false,
  created_at timestamptz not null default now()
);
create table if not exists public.unkindle_poll_votes (
  poll_id bigint not null references public.unkindle_polls(id) on delete cascade,
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  opt int not null check (opt between 0 and 5),
  primary key (poll_id, user_id)
);
create table if not exists public.unkindle_reports (
  kind text not null check (kind in ('topic', 'post', 'chat', 'poll')),
  ref_id bigint not null,
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (kind, ref_id, user_id)
);
create index if not exists unkindle_chat_room_id on public.unkindle_chat (room, id desc);
create index if not exists unkindle_posts_topic on public.unkindle_posts (topic_id, id);
create index if not exists unkindle_topics_last on public.unkindle_topics (last_at desc);

-- Antes de gravar: confere o @ e limita a velocidade (anti-spam)
create or replace function public.unkindle_before_write() returns trigger
language plpgsql security definer set search_path = '' as $$
declare u text; wait_s int; recent boolean;
begin
  select username into u from public.unkindle_profiles where user_id = auth.uid();
  if u is null then raise exception 'Escolha seu @ na página da conta antes de participar.'; end if;
  new.user_id := auth.uid(); new.username := u; new.reports := 0; new.hidden := false;
  wait_s := case tg_table_name when 'unkindle_chat' then 3 when 'unkindle_posts' then 15 else 60 end;
  execute format('select exists(select 1 from public.%I where user_id = $1 and created_at > now() - make_interval(secs => $2))', tg_table_name) into recent using auth.uid(), wait_s;
  if recent then raise exception 'Calma! Espere alguns segundos antes de enviar de novo.'; end if;
  return new;
end $$;
drop trigger if exists unkindle_bw on public.unkindle_topics;
create trigger unkindle_bw before insert on public.unkindle_topics for each row execute function public.unkindle_before_write();
drop trigger if exists unkindle_bw on public.unkindle_posts;
create trigger unkindle_bw before insert on public.unkindle_posts for each row execute function public.unkindle_before_write();
drop trigger if exists unkindle_bw on public.unkindle_chat;
create trigger unkindle_bw before insert on public.unkindle_chat for each row execute function public.unkindle_before_write();
drop trigger if exists unkindle_bw on public.unkindle_polls;
create trigger unkindle_bw before insert on public.unkindle_polls for each row execute function public.unkindle_before_write();

-- Resposta no fórum: atualiza contador e data do tópico
create or replace function public.unkindle_after_post() returns trigger
language plpgsql security definer set search_path = '' as $$
begin
  update public.unkindle_topics set replies = replies + 1, last_at = now() where id = new.topic_id;
  return new;
end $$;
drop trigger if exists unkindle_ap on public.unkindle_posts;
create trigger unkindle_ap after insert on public.unkindle_posts for each row execute function public.unkindle_after_post();

-- Voto: recalcula a contagem da enquete
create or replace function public.unkindle_after_vote() returns trigger
language plpgsql security definer set search_path = '' as $$
declare pid bigint := coalesce(new.poll_id, old.poll_id);
begin
  update public.unkindle_polls p set votes = (
    select coalesce(jsonb_agg(coalesce(c.n, 0) order by i.i), '[]'::jsonb)
    from generate_series(0, jsonb_array_length(p.opts) - 1) as i(i)
    left join (select opt, count(*) n from public.unkindle_poll_votes where poll_id = pid group by opt) c on c.opt = i.i
  ) where p.id = pid;
  return null;
end $$;
drop trigger if exists unkindle_av on public.unkindle_poll_votes;
create trigger unkindle_av after insert or update or delete on public.unkindle_poll_votes for each row execute function public.unkindle_after_vote();

-- Denúncia: 3 pessoas diferentes escondem o conteúdo
create or replace function public.unkindle_after_report() returns trigger
language plpgsql security definer set search_path = '' as $$
declare t text := case new.kind when 'topic' then 'unkindle_topics' when 'post' then 'unkindle_posts' when 'chat' then 'unkindle_chat' else 'unkindle_polls' end;
begin
  execute format('update public.%I set reports = reports + 1, hidden = (reports + 1 >= 3) where id = $1', t) using new.ref_id;
  return new;
end $$;
drop trigger if exists unkindle_ar on public.unkindle_reports;
create trigger unkindle_ar after insert on public.unkindle_reports for each row execute function public.unkindle_after_report();

-- Regras de acesso
do $$
declare t text;
begin
  foreach t in array array['unkindle_topics', 'unkindle_posts', 'unkindle_chat', 'unkindle_polls'] loop
    execute format('alter table public.%I enable row level security', t);
    execute format('drop policy if exists "todos leem" on public.%I', t);
    execute format('create policy "todos leem" on public.%I for select to anon, authenticated using (hidden = false)', t);
    execute format('drop policy if exists "logado posta" on public.%I', t);
    execute format('create policy "logado posta" on public.%I for insert to authenticated with check (auth.uid() = user_id)', t);
    execute format('drop policy if exists "dono apaga" on public.%I', t);
    execute format('create policy "dono apaga" on public.%I for delete to authenticated using (auth.uid() = user_id)', t);
  end loop;
end $$;
alter table public.unkindle_poll_votes enable row level security;
drop policy if exists "dono vota" on public.unkindle_poll_votes;
create policy "dono vota" on public.unkindle_poll_votes for all to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);
alter table public.unkindle_reports enable row level security;
drop policy if exists "logado denuncia" on public.unkindle_reports;
create policy "logado denuncia" on public.unkindle_reports for insert to authenticated with check (auth.uid() = user_id);
-- só o próprio sistema mexe nos contadores: ninguém edita (update) diretamente
revoke update on public.unkindle_topics, public.unkindle_posts, public.unkindle_chat, public.unkindle_polls from anon, authenticated;

-- ============ WhatsApp (servidor Unkindle Zap na Render) ============
-- Sessão do WhatsApp e últimas conversas, CRIPTOGRAFADAS pelo servidor (ZAP_SECRET).
-- Sem nenhuma política: o site e os usuários não leem nem escrevem; só a chave secreta do servidor.
create table if not exists public.unkindle_zap_kv (
  k text primary key,
  v text not null,
  updated_at timestamptz not null default now()
);
alter table public.unkindle_zap_kv enable row level security;
revoke all on public.unkindle_zap_kv from anon, authenticated;
