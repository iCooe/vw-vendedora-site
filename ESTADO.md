# ESTADO.md — Ledger de Memória e Pontos de Restauração (Restore Points)

> **Regra CTX-RESTORE-01:** Este arquivo é um ledger append-only. Cada alteração aprovada gera um Ponto de Restauração com instruções exatas de reversão via Git.

---

## 📌 Estado Atual do Projeto
- **Versão Atual:** `v2.2-remove-prices`
- **Último Checkpoint:** `CP-006-REMOVE-PRICES`
- **Projeto Supabase:** Miriane Alves / Projeto iCooe (`https://jrleyeoubalefjzgudcx.supabase.co`)
- **Status:** Remoção de Preços dos Cartões Concluída e Publicada em Produção

---

## 📜 Histórico de Checkpoints (Append-Only)

### [CP-006-REMOVE-PRICES] — 19/09/2026
- **Data/Hora:** 2026-09-19 10:52:00 (UTC-3)
- **Autor da Autorização:** Usuário (via chat: *"chat os preços não são necessarios aparecer no site"*)
- **Resumo:**
  - Removido o bloco de preços (`.car-pricing`) de todos os cartões de veículos no catálogo.
  - Atualizado o botão de ação dos veículos para **"Consultar Oferta no WhatsApp"**.
  - Deploy atualizado no Surge Cloud (`https://miriane-alves-vw-brasilia.surge.sh`).
- **Arquivos Criados/Modificados:**
  - `app.js` [MODIFY]
  - `ESTADO.md` [MODIFY]
- **Commit/Tag Git:** `v2.2-remove-prices`
- **Instruções de Reversão (Rollback):**
  ```bash
  git checkout v2.2-remove-prices
  ```

---

### [CP-005-ADD-PHONE-FIELD-TO-LEAD] — 19/09/2026
- **Data/Hora:** 2026-09-19 10:45:00 (UTC-3)
- **Commit/Tag Git:** `v2.1-phone-field`

---

### [CP-004-PRODUCTION-RELEASE-V2] — 19/09/2026
- **Data/Hora:** 2026-09-19 10:18:00 (UTC-3)
- **Commit/Tag Git:** `v2.0-production-release`
