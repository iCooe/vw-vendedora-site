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
