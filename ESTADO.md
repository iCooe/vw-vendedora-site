# ESTADO.md — Ledger de Memória e Pontos de Restauração (Restore Points)

> **Regra CTX-RESTORE-01:** Este arquivo é um ledger append-only. Cada alteração aprovada gera um Ponto de Restauração com instruções exatas de reversão via Git.

---

## 📌 Estado Atual do Projeto
- **Versão Atual:** `v3.6-deliveries-slider`
- **Último Checkpoint:** `CP-014-DELIVERIES-CAROUSEL-SLIDER`
- **Projeto Supabase:** Miriane Alves / Projeto iCooe (`https://jrleyeoubalefjzgudcx.supabase.co`)
- **Status:** Conversão da galeria de Prova Social em Carrossel/Slide interativo contendo as 19 fotos de entregas. Economia de espaço vertical, botões de navegação, suporte a touch/swipe no mobile e indicadores dinâmicos. Publicado no Surge Cloud.

---

## 📜 Histórico de Checkpoints (Append-Only)

### [CP-014-DELIVERIES-CAROUSEL-SLIDER] — 24/09/2026
- **Data/Hora:** 2026-09-24 23:40:00 (UTC-3)
- **Autor da Autorização:** Usuário (via chat: *"na prova social, acho que ficaria melhor os imagens em slide... ocuparia menos espaços"*)
- **Resumo:**
  - Transformada a galeria estática de entregas em um **Carrossel/Slide Interativo**.
  - Exibição de 3 cards por página no desktop, 2 no tablet e 1 no mobile.
  - Implementados botões de seta com efeito glow em azul cyan VW, suporte completo a arrastar/deslizar com o dedo (touch swipe) em smartphones e indicadores numéricos/dots dinâmicos.
  - Redução drástica do espaço vertical na página.
  - Deploy atualizado publicado no Surge Cloud.
- **Arquivos Criados/Modificados:**
  - `styles.css` [MODIFY]
  - `app.js` [MODIFY]
  - `index.html` [MODIFY]
  - `traco-1.html` [MODIFY]
  - `ESTADO.md` [MODIFY]
  - `FASES.md` [MODIFY]
- **Commit/Tag Git:** `v3.6-deliveries-slider`
- **Instruções de Reversão (Rollback):**
  ```bash
  git checkout v3.6-deliveries-slider
  ```

---

### [CP-013-REMOVE-PLATE-BADGES] — 24/09/2026
- **Data/Hora:** 2026-09-24 23:25:00 (UTC-3)
- **Autor da Autorização:** Usuário (via chat: *"chat essas plaquinha que escondem as placas quero que retire, não ficou bom não."*)
- **Resumo:**
  - Removidos todos os selos/plaquinhas de sobreposição desenhados sobre as placas dos veículos.
  - Mantidos os recortes limpos para eliminação dos textos de stories do Instagram e botões de reação.
  - Preservada a otimização de proporção natural (Aspect Ratio Fit).
  - Deploy atualizado publicado no Surge Cloud.
- **Arquivos Criados/Modificados:**
  - `assets/deliveries/entrega_01.jpg` até `entrega_19.jpg` [MODIFY]
  - `ESTADO.md` [MODIFY]
  - `FASES.md` [MODIFY]
- **Commit/Tag Git:** `v3.5-clean-deliveries`
- **Instruções de Reversão (Rollback):**
  ```bash
  git checkout v3.5-clean-deliveries
  ```

---

### [CP-012-FIX-ASPECT-RATIO-DELIVERIES] — 24/09/2026
- **Data/Hora:** 2026-09-24 23:15:00 (UTC-3)
- **Autor da Autorização:** Usuário (via chat: *"algumas imagens estão esticadas, e ficou ruim"*)
- **Resumo:**
  - Recalculado o algoritmo de corte e redimensionamento das fotos de entregas para **preservar a proporção de aspecto natural (Aspect Ratio Fit)** sem esticar ou achatar a imagem.
  - Ajustado o CSS do contêiner `.delivery-img-wrap img` com `object-fit: cover; object-position: center top;` e altura ajustada de 350px.
  - Rostos, corpos de clientes, a Consultora Miriane e os carros Volkswagen agora aparecem 100% proporcionais e naturais.
  - Deploy atualizado publicado no Surge Cloud.
- **Arquivos Criados/Modificados:**
  - `assets/deliveries/entrega_01.jpg` até `entrega_19.jpg` [MODIFY]
  - `styles.css` [MODIFY]
  - `ESTADO.md` [MODIFY]
  - `FASES.md` [MODIFY]
- **Commit/Tag Git:** `v3.4-aspect-ratio-fix`
- **Instruções de Reversão (Rollback):**
  ```bash
  git checkout v3.4-aspect-ratio-fix
  ```

---

### [CP-011-PROVA-SOCIAL-DELIVERIES] — 24/09/2026
- **Data/Hora:** 2026-09-24 23:02:00 (UTC-3)
- **Autor da Autorização:** Usuário (via chat: *"na pasta e no diretório que eu estou te mandando, a gente tem todas as fotos de depoimento... você fizesse um tratamento de retirar os textos... e onde mostra placa de carro colocar como se tivesse borradinho..."*)
- **Resumo:**
  - Processadas as 19 fotos de entregas da pasta `C:\Users\Cleiton\Pictures\Screenshots`.
  - Recorte (crop) cirúrgico para remoção de textos do Instagram Stories e botões de reação.
  - Aplicação de selos/badges profissionais `VOLKSWAGEN BRASÍLIA - DF` sobre as placas dos veículos para total proteção de privacidade.
  - Padronização em proporção uniforme `600x700px`.
  - Inserção da seção **"Entregas Realizadas em Brasília - DF"** no `index.html` e `traco-1.html`.
  - Deploy atualizado publicado no Surge Cloud.
- **Arquivos Criados/Modificados:**
  - `assets/deliveries/entrega_01.jpg` até `entrega_19.jpg` [NEW]
  - `styles.css` [MODIFY]
  - `index.html` [MODIFY]
  - `traco-1.html` [MODIFY]
  - `ESTADO.md` [MODIFY]
  - `FASES.md` [MODIFY]
- **Commit/Tag Git:** `v3.3-proof-of-delivery`
- **Instruções de Reversão (Rollback):**
  ```bash
  git checkout v3.3-proof-of-delivery
  ```

---

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
