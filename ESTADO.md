# ESTADO.md — Ledger de Memória e Pontos de Restauração (Restore Points)

> **Regra CTX-RESTORE-01:** Este arquivo é um ledger append-only. Cada alteração aprovada gera um Ponto de Restauração com instruções exatas de reversão via Git.

---

## 📌 Estado Atual do Projeto
- **Versão Atual:** `v1.2-dashboard-sync`
- **Último Checkpoint:** `CP-003-DASHBOARD-SUPABASE-SYNC`
- **Projeto Supabase:** Miriane Alves (`https://jrleyeoubalefjzgudcx.supabase.co`)
- **Status:** Fase 3 Concluída — Sincronização em Tempo Real da Dashboard com o Supabase Ativa em Produção

---

## 📜 Histórico de Checkpoints (Append-Only)

### [CP-003-DASHBOARD-SUPABASE-SYNC] — 19/09/2026
- **Data/Hora:** 2026-09-19 10:10:00 (UTC-3)
- **Autor da Autorização:** Usuário (via chat: *"ok"*)
- **Resumo:**
  - Adicionado rastreamento de acessos (analytics_pageviews) com contagem de dispositivos no Supabase.
  - Sincronização dos KPIs de visualização e preenchimentos da Dashboard diretamente do Supabase Miriane Alves.
  - Deploy atualizado no Surge Cloud (`https://miriane-alves-vw-brasilia.surge.sh`).
- **Arquivos Criados/Modificados:**
  - `supabase-client.js` [MODIFY]
  - `app.js` [MODIFY]
  - `ESTADO.md` [MODIFY]
  - `FASES.md` [MODIFY]
- **Commit/Tag Git:** `v1.2-dashboard-sync`
- **Instruções de Reversão (Rollback):**
  ```bash
  git checkout v1.2-dashboard-sync
  ```

---

### [CP-002-SUPABASE-LEADS-CONNECTED] — 19/09/2026
- **Data/Hora:** 2026-09-19 10:05:00 (UTC-3)
- **Autor da Autorização:** Usuário (via chat: *"ok"*)
- **Resumo:**
  - Incluída a SDK do Supabase no `index.html`.
  - Conectado o formulário de Cotação do Usado (`#trade-in-form`) e a captura automática de UTMs ao Supabase Miriane Alves (`leads`).
  - Mantido o FormSubmit e o WhatsApp como canais de contingência.
  - Deploy atualizado no Surge Cloud (`https://miriane-alves-vw-brasilia.surge.sh`).
- **Arquivos Criados/Modificados:**
  - `index.html` [MODIFY]
  - `app.js` [MODIFY]
  - `ESTADO.md` [MODIFY]
  - `FASES.md` [MODIFY]
- **Commit/Tag Git:** `v1.1-leads-supabase`
- **Instruções de Reversão (Rollback):**
  ```bash
  git checkout v1.1-leads-supabase
  ```

---

### [CP-001-UNIVERSAL-SUPABASE-INIT] — 19/09/2026
- **Data/Hora:** 2026-09-19 09:58:00 (UTC-3)
- **Autor da Autorização:** Usuário (via chat: *"ok"*)
- **Resumo:**
  - Instanciação do Padrão de Engenharia Universal v3.2.
  - Criação dos artefatos `AGENTS.md`, `ESTADO.md`, `FASES.md`, `.env`, `supabase-client.js` e `schema.sql`.
  - Conexão vinculada ao projeto Supabase **Miriane Alves**.
- **Arquivos Criados/Modificados:**
  - `AGENTS.md` [NEW]
  - `ESTADO.md` [NEW]
  - `FASES.md` [NEW]
  - `.env` [NEW]
  - `supabase-client.js` [NEW]
  - `schema.sql` [NEW]
- **Commit/Tag Git:** `v1.0-universal-init`
- **Instruções de Reversão (Rollback):**
  ```bash
  git checkout v1.0-universal-init
  ```
