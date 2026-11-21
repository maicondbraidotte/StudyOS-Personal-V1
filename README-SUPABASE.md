# StudyOS 2027 — Integração Supabase

## O que foi integrado
- Cadastro, login, logout e recuperação de senha por e-mail.
- Salvamento automático de checklist e metadados na tabela `public.studyos_data`.
- Cache local para permitir continuar registrando alterações sem conexão.
- Envio das alterações pendentes quando a conexão voltar.
- Realtime para propagar atualizações entre dispositivos (quando habilitado no projeto).
- Migração inicial: se a conta ainda não possuir dados na nuvem, os dados locais do navegador são enviados no primeiro login.

## 1. Configurar a chave pública
Abra `supabase-config.js` e substitua `COLE_SUA_CHAVE_PUBLISHABLE_OU_ANON_AQUI` pela chave **Publishable** (`sb_publishable_...`) do projeto Supabase. A chave `anon` legada também é aceita.

A URL do projeto já está preenchida. Não use a chave `service_role` ou qualquer chave `secret` no navegador.

## 2. Conferir a tabela e RLS
O projeto Supabase usado anteriormente já tinha a tabela `studyos_data` planejada com estas colunas:
- `user_id` (uuid, chave primária, referência a `auth.users.id`)
- `data` (jsonb)
- `updated_at` (timestamptz)

Confira as políticas RLS no arquivo `supabase-schema.sql`. Se a tabela e as políticas já estiverem corretas, não precisa recriá-las. Caso contrário, execute o SQL no Supabase SQL Editor.

## 3. Habilitar Realtime
No Supabase, abra Database > Publications e confirme que `studyos_data` está habilitada na publicação `supabase_realtime`. Isso permite receber atualizações enquanto o app estiver aberto em outro dispositivo.

## 4. Configurar autenticação
Em Authentication > URL Configuration, configure:
- Site URL: endereço de produção da Vercel (por exemplo `https://seu-projeto.vercel.app`).
- Redirect URLs: inclua o endereço de produção e, para testes, `http://localhost:3000/**`.

Para cadastro com confirmação de e-mail, configure SMTP ou use o serviço de e-mail de teste do Supabase. A recuperação de senha usa a URL atual do app.

## 5. Publicar
Envie todos os arquivos desta pasta ao GitHub, incluindo `supabase-config.js` (contém apenas a chave pública). Na Vercel, mantenha o projeto como site estático:
- Framework Preset: Other
- Build Command: vazio
- Output Directory: `.`

## Observações importantes
- Os dados locais antigos só são enviados automaticamente se a conta ainda não tiver um registro em `studyos_data`. Se já houver dados na nuvem, a nuvem será carregada no navegador para evitar sobrescrever o registro remoto.
- O salvamento offline é mantido no navegador. Quando a internet voltar, as alterações locais são enviadas. Para reduzir risco de conflito, evite editar simultaneamente o mesmo dado em vários dispositivos enquanto estiver offline.
- A tabela guarda o objeto de estado completo em JSONB, mantendo a estrutura atual do StudyOS sem exigir várias tabelas.
