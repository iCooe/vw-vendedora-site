# ESTADO.md — Ledger de Memória e Pontos de Restauração (Restore Points)

> **Regra CTX-RESTORE-01:** Este arquivo é um ledger append-only. Cada alteração aprovada gera um Ponto de Restauração com instruções exatas de reversão via Git.

---

## 📌 Estado Atual do Projeto
- **Versão Atual:** `v2.1-phone-field`
- **Último Checkpoint:** `CP-005-ADD-PHONE-FIELD-TO-LEAD`
- **Projeto Supabase:** Miriane Alves / Projeto iCooe (`https://jrleyeoubalefjzgudcx.supabase.co`)
- **Status:** Campo Telefone/WhatsApp com Máscara e Gravação em Nuvem Ativos em Produção

---

## 📜 Histórico de Checkpoints (Append-Only)

### [CP-005-ADD-PHONE-FIELD-TO-LEAD] — 19/09/2026
- **Data/Hora:** 2026-09-19 10:45:00 (UTC-3)
- **Autor da Autorização:** Usuário (via chat: *"ok"*)
- **Resumo:**
  - Adicionado o campo obrigatório `Seu Telefone / WhatsApp (com DDD)` ao formulário de Cotação do Usado.
  - Implementada máscara de digitação de telefone no padrão brasileiro `(XX) XXXXX-XXXX`.
  - Atualizada a gravação no Supabase (`telefone`) e o texto da mensagem no WhatsApp da Consultora.
  - Deploy atualizado no Surge Cloud (`https://miriane-alves-vw-brasilia.surge.sh`).
- **Arquivos Criados/Modificados:**
  - `index.html` [MODIFY]
  - `app.js` [MODIFY]
  - `supabase-client.js` [MODIFY]
  - `schema.sql` [MODIFY]
  - `ESTADO.md` [MODIFY]
  - `FASES.md` [MODIFY]
- **Commit/Tag Git:** `v2.1-phone-field`
- **Instruções de Reversão (Rollback):**
  ```bash
  git checkout v2.1-phone-field
  ```

---

### [CP-004-PRODUCTION-RELEASE-V2] — 19/09/2026
- **Data/Hora:** 2026-09-19 10:18:00 (UTC-3)
- **Autor da Autorização:** Usuário (via chat: *"feito"*)
- **Resumo:**
  - Script SQL `schema.sql` executado no Supabase Miriane Alves com sucesso.
  - Tabelas `leads` e `analytics_pageviews` criadas com RLS e políticas de inserção públicas habilitadas.
  - Teste de gravação end-to-end verificado com retorno HTTP 201 Created.
  - Projeto no Padrão de Engenharia Universal v3.2 pronto e publicado em produção no Surge.
- **Commit/Tag Git:** `v2.0-production-release`

---

### [CP-003-DASHBOARD-SUPABASE-SYNC] — 19/09/2026
- **Data/Hora:** 2026-09-19 10:10:00 (UTC-3)
- **Commit/Tag Git:** `v1.2-dashboard-sync`

---

### [CP-002-SUPABASE-LEADS-CONNECTED] — 19/09/2026
- **Data/Hora:** 2026-09-19 10:05:00 (UTC-3)
- **Commit/Tag Git:** `v1.1-leads-supabase`

---

### [CP-001-UNIVERSAL-SUPABASE-INIT] — 19/09/2026
- **Data/Hora:** 2026-09-19 09:58:00 (UTC-3)
- **Commit/Tag Git:** `v1.0-universal-init`
