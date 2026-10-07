# ESTADO — Site Miriane Alves VW
> Atualizado em: 2026-10-07 · Fase atual: F7 — Adequação ao Padrão v3.5
> Teste de validade: uma sessão nova retoma o trabalho lendo SÓ `AGENTS.md` + este arquivo.
> Histórico completo de checkpoints: `docs/PONTOS-DE-RESTAURACAO.md` (antes ficava aqui).

## Último checkpoint
- PR-020 — Adequação ao Padrão v3.5 (Blocos A + B) — commit no ledger.
- Savepoint antes da mudança: tag `savepoint-pre-padrao-v3.5` (`32623bc`).
- Estado do sistema: site no ar (Netlify + Surge). O painel já usa `rpc('dashboard_stats')`; enquanto a migration 001 não for aplicada, ele mostra os números locais (comportamento seguro).

## Decisões desta sessão
- Padrão de engenharia atualizado de v3.2 para **v3.5**. Porte: `app-simples`.
- Leitura pública de leads removida; o painel lê só contagens → `docs/adr/ADR-002`.
- Chave publishable no histórico: não rotacionar (pública por design) → ADR-002.
- Regras de infraestrutura não aplicáveis (sem servidor próprio) → `docs/adr/ADR-001`.

## Próximos 3 passos
1. **Owner:** aplicar `supabase/migrations/001_fechar_leitura_publica.sql` no Supabase → SQL Editor → Run.
2. **Agente:** rodar a prova de disparo (leitura anon de `leads` = 0 linhas/erro; `dashboard_stats` = números) e registrar abaixo.
3. Bloco C (aguarda aprovação): keep-alive do Supabase, `_headers` no Netlify, GitHub Action com `audit.sh`.

## Bloqueios / pendências
- Migration 001 aplicada? **Aguardando o owner** (o agente não tem acesso de escrita ao banco).
- Painel sem login e com senhas de demonstração em texto puro no `app.js` (`DEFAULT_USERS_DATA`), visíveis para qualquer visitante → owner decide: remover a tabela de usuários fictícia ou implementar Supabase Auth.
- Domínio próprio: recomendado `mirianevwbrasilia.com` (não registrado ainda).

## Evidências (IA-EVIDENCE-01)
- 2026-10-07 antes da migration: `HEAD /rest/v1/analytics_pageviews` com a chave anon → **HTTP 206, 27 linhas legíveis**. `HEAD /rest/v1/leads` → HTTP 200, `*/0` (tabela vazia ou policy não aplicada; inconclusivo).
- `audit.sh` v3.5: antes 7✅ 4❌ 9⚠️ → depois: ver saída no commit PR-020.

## Capacidade e hardware (SCALE-CAP-01)
- Hospedagem estática em CDN (Netlify/Surge). Não há servidor próprio e o teto é dado pelos planos grátis. Não medido (sem cliente pagante).

## Serviços externos (DEP-SERVICE-01)
- **Supabase** `jrleyeoubalefjzgudcx` — conta: cleitonoliveira9577@gmail.com · plano: Free · limite que morde: **pausa após 7 dias sem requisições** · monitor: **não** (Bloco C).
- **Netlify** projeto "miriane" — conta: GitHub iCooe · plano: Free · deploy automático de `main` · monitor: não.
- **Surge** `miriane-alves-vw-brasilia.surge.sh` — conta: cleitonoliveira9577@gmail.com · plano: Free · legado.
- **GitHub** `iCooe/vw-vendedora-site` — público.
- **FormSubmit** — contingência do formulário · sem conta.

## Fases concluídas
- F1–F4 — Governança, leads, painel, produção — `93eb2a0` — 2026-09-19
- F5 — SEO 360/GEO + prova social + carrosséis — `2ea7974` — 2026-09-25
- F6 — GitHub + Netlify — `32623bc` — 2026-10-02
