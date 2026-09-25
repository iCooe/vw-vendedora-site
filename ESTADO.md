# ESTADO.md — Ledger de Memória e Pontos de Restauração (Restore Points)

> **Regra CTX-RESTORE-01:** Este arquivo é um ledger append-only. Cada alteração aprovada gera um Ponto de Restauração com instruções exatas de reversão via Git.

---

## 📌 Estado Atual do Projeto
- **Versão Atual:** `v3.2-seo-as-primary`
- **Último Checkpoint:** `CP-010-PROMOTE-SEO-TO-INDEX`
- **Projeto Supabase:** Miriane Alves / Projeto iCooe (`https://jrleyeoubalefjzgudcx.supabase.co`)
- **Status:** Página principal `index.html` promovida para a versão com SEO 360 & GEO Master Playbook. Página original mantida como secundária em `pagina-original.html`. Publicado no Surge Cloud.

---

## 📜 Histórico de Checkpoints (Append-Only)

### [CP-010-PROMOTE-SEO-TO-INDEX] — 24/09/2026
- **Data/Hora:** 2026-09-24 22:13:00 (UTC-3)
- **Autor da Autorização:** Usuário (via chat: *"A página que a gente acabou de criar, que é a traco-1, ela deve se tornar a principal e a outra, secundária..."*)
- **Resumo:**
  - Versão otimizada com Playbook Master de SEO 360 & GEO promovida para a página principal (`index.html`).
  - Versão original sem otimizações preservada como página secundária em `pagina-original.html`.
  - Canonical URL, Open Graph URL e Schema.org JSON-LD atualizados para apontar para a raiz `https://miriane-alves-vw-brasilia.surge.sh/`.
  - Arquivo `sitemap.xml` atualizado com a nova hierarquia de URLs.
  - Deploy publicado em produção no Surge Cloud (`https://miriane-alves-vw-brasilia.surge.sh`).
- **Arquivos Criados/Modificados:**
  - `index.html` [MODIFY]
  - `pagina-original.html` [NEW]
  - `sitemap.xml` [MODIFY]
  - `ESTADO.md` [MODIFY]
  - `FASES.md` [MODIFY]
- **Commit/Tag Git:** `v3.2-seo-as-primary`
- **Instruções de Reversão (Rollback):**
  ```bash
  git checkout v3.2-seo-as-primary
  ```

---

### [CP-009-SEO-DUPLICATED-SUBPAGE] — 24/09/2026
- **Data/Hora:** 2026-09-24 21:55:00 (UTC-3)
- **Autor da Autorização:** Usuário (via chat: *"Pode executar. Assim que você finalizar, eu quero que você me envie os dois links..."*)
- **Resumo:**
  - Página original `index.html` mantida 100% intocada.
  - Criada a subpágina `traco-1.html` aplicando a totalidade das otimizações do **Playbook Master de SEO 360 & GEO**: Meta Tags completas, Open Graph, Twitter Cards, Schema.org `AutoDealer` (LocalBusiness em SGCV Brasília) & `FAQPage` em JSON-LD, marcações semânticas e imagens alt com keywords locais.
  - Criados os arquivos técnicos de indexação no root: `sitemap.xml` e `robots.txt`.
  - Publicado o site atualizado no Surge Cloud (`https://miriane-alves-vw-brasilia.surge.sh`).
- **Arquivos Criados/Modificados:**
  - `traco-1.html` [NEW]
  - `sitemap.xml` [NEW]
  - `robots.txt` [NEW]
  - `ESTADO.md` [MODIFY]
  - `FASES.md` [MODIFY]
- **Commit/Tag Git:** `v3.1-seo-subpage`
- **Instruções de Reversão (Rollback):**
  ```bash
  git checkout v3.1-seo-subpage
  ```

---

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
