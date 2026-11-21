-- StudyOS 2027: estrutura compatível com o projeto Supabase já criado.
-- A tabela studyos_data armazena o estado e os metadados do StudyOS em JSONB.
-- Se ela já existir com estas colunas e políticas, não é necessário executar novamente.

create table if not exists public.studyos_data (
  user_id uuid primary key references auth.users(id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.studyos_data enable row level security;

drop policy if exists "Users can read their own StudyOS data" on public.studyos_data;
create policy "Users can read their own StudyOS data"
  on public.studyos_data for select to authenticated
  using (auth.uid() = user_id);

drop policy if exists "Users can insert their own StudyOS data" on public.studyos_data;
create policy "Users can insert their own StudyOS data"
  on public.studyos_data for insert to authenticated
  with check (auth.uid() = user_id);

drop policy if exists "Users can update their own StudyOS data" on public.studyos_data;
create policy "Users can update their own StudyOS data"
  on public.studyos_data for update to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- Para sincronização instantânea entre dispositivos, habilite Realtime para
-- public.studyos_data no painel Database > Publications, se ainda não estiver habilitado.
