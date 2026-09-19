# ESTADO.md — Ledger de Memória e Pontos de Restauração (Restore Points)

> **Regra CTX-RESTORE-01:** Este arquivo é um ledger append-only. Cada alteração aprovada gera um Ponto de Restauração com instruções exatas de reversão via Git.

---

## 📌 Estado Atual do Projeto
- **Versão Atual:** `v2.3-taos-image`
- **Último Checkpoint:** `CP-007-FIX-TAOS-IMAGE`
- **Projeto Supabase:** Miriane Alves / Projeto iCooe (`https://jrleyeoubalefjzgudcx.supabase.co`)
- **Status:** Foto Oficial do Novo Volkswagen Taos Highline Atualizada em Produção

---

## 📜 Histórico de Checkpoints (Append-Only)

### [CP-007-FIX-TAOS-IMAGE] — 19/09/2026
- **Data/Hora:** 2026-09-19 11:01:00 (UTC-3)
- **Autor da Autorização:** Usuário (via chat: *"ok"*)
- **Resumo:**
  - Substituída a imagem genérica da concessionária (`./assets/vw_hero.jpg`) pela foto oficial do SUV **Novo Volkswagen Taos Highline** (`./assets/vw_taos.jpg`).
  - Atualizada a propriedade `image` em `VEHICLES_DATA` no `app.js`.
  - Deploy publicado em produção no Surge Cloud (`https://miriane-alves-vw-brasilia.surge.sh`).
- **Arquivos Criados/Modificados:**
  - `assets/vw_taos.jpg` [NEW]
  - `app.js` [MODIFY]
  - `ESTADO.md` [MODIFY]
  - `FASES.md` [MODIFY]
- **Commit/Tag Git:** `v2.3-taos-image`
- **Instruções de Reversão (Rollback):**
  ```bash
  git checkout v2.3-taos-image
  ```

---

### [CP-006-REMOVE-PRICES] — 19/09/2026
- **Data/Hora:** 2026-09-19 10:52:00 (UTC-3)
- **Commit/Tag Git:** `v2.2-remove-prices`

---

### [CP-005-ADD-PHONE-FIELD-TO-LEAD] — 19/09/2026
- **Data/Hora:** 2026-09-19 10:45:00 (UTC-3)
- **Commit/Tag Git:** `v2.1-phone-field`

---

### [CP-004-PRODUCTION-RELEASE-V2] — 19/09/2026
- **Data/Hora:** 2026-09-19 10:18:00 (UTC-3)
- **Commit/Tag Git:** `v2.0-production-release`
