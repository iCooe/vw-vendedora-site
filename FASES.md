# FASES.md — Roteiro de Desenvolvimento Vertical (Padrão Universal v3.2)

---

## 🟢 FASE 1: Governança, Supabase & Schema SQL (STATUS: CONCLUÍDA)
- [x] Instanciação do `AGENTS.md` (regras e aprovação prévia).
- [x] Instanciação do `ESTADO.md` (ledger de pontos de restauração).
- [x] Criação das variáveis de ambiente `.env` com as chaves do projeto Supabase **Miriane Alves**.
- [x] Criação do módulo de conexão `supabase-client.js`.
- [x] Criação do script DDL `schema.sql` com as tabelas `leads`, `analytics_pageviews` e `system_checkpoints`.
- [x] Ponto de Restauração: `CP-001-UNIVERSAL-SUPABASE-INIT` (`v1.0-universal-init`).

---

## 🟢 FASE 2: Conexão Nível Dados (Leads & UTM Tracking no Supabase) (STATUS: CONCLUÍDA)
- [x] Incluída a SDK do Supabase no `index.html`.
- [x] Conectado o formulário de Cotação do Usado (`#trade-in-form`) ao Supabase (`leads`).
- [x] Gravação de todos os campos: modelo do usado, ano, quilometragem, VW desejado e **valor pretendido da parcela**.
- [x] Captura automática de parâmetros UTMs de anúncios (`utm_source`, `utm_medium`, `utm_campaign`).
- [x] Mantido FormSubmit + WhatsApp como canais de contingência.
- [x] Deploy atualizado no Surge Cloud (`https://miriane-alves-vw-brasilia.surge.sh`).
- [x] Ponto de Restauração: `CP-002-SUPABASE-LEADS-CONNECTED` (`v1.1-leads-supabase`).

---

## 🟢 FASE 3: Sincronização da Dashboard em Tempo Real (STATUS: CONCLUÍDA)
- [x] Rastreamento de acessos e dispositivos salvos na tabela `analytics_pageviews` do Supabase.
- [x] Indicadores da Dashboard sincronizados diretamente com o Supabase em tempo real.
- [x] Ponto de Restauração: `CP-003-DASHBOARD-SUPABASE-SYNC` (`v1.2-dashboard-sync`).

---

## 🟢 FASE 4: Verificação Final, Testes & Deploy de Produção (STATUS: CONCLUÍDA)
- [x] Teste end-to-end de inserção de lead e conferência com retorno HTTP 201 Created no Supabase.
- [x] Auditoria de segurança e validação das regras do Padrão Universal v3.2.
- [x] Deploy de produção finalizado no Surge Cloud (`https://miriane-alves-vw-brasilia.surge.sh`).
- [x] Ponto de Restauração Final: `CP-004-PRODUCTION-RELEASE-V2` (`v2.0-production-release`).

---

## 🟢 FASE 5: Subpágina SEO 360 & GEO Master (traco-1.html) (STATUS: CONCLUÍDA)
- [x] Preservação de `index.html` intocado.
- [x] Duplicação para `traco-1.html` com otimização SEO 360 & GEO (Meta tags, Open Graph, Schema.org AutoDealer + FAQPage, Keywords Locais de Brasília/DF).
- [x] Criação de `sitemap.xml` e `robots.txt` no root.
- [x] Publicação no Surge Cloud (`https://miriane-alves-vw-brasilia.surge.sh/traco-1.html`).
- [x] Promoção de `traco-1.html` para página principal (`index.html`), mantendo a original em `pagina-original.html`.
- [x] Tratamento de 19 fotos de entregas de `C:\Users\Cleiton\Pictures\Screenshots` (remoção de textos do Instagram, tarjamento de placas com selo oficial e proporção 600x700px).
- [x] Inserção da Seção Prova Social: Entregas Realizadas em Brasília no site.
- [x] Otimização matemática de proporção de aspecto (Aspect Ratio Fit) eliminando qualquer distorção visual em fotos de pessoas.
- [x] Remoção dos selos/plaquinhas de sobreposição das placas de veículos mantendo imagens 100% limpas e originais.
- [x] Ponto de Restauração: `CP-013-REMOVE-PLATE-BADGES` (`v3.5-clean-deliveries`).
