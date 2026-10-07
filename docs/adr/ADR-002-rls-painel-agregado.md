# ADR-002: Painel lê só contagens agregadas; o público nunca lê linhas de leads
> Data: 2026-10-07 · Status: aceito · Decisor: Cleiton (owner)

## Contexto
A auditoria v3.5 encontrou `FOR SELECT USING (true)` em `leads` e `analytics_pageviews`. Como a chave *publishable* fica visível no JavaScript do site (e no repositório público), qualquer pessoa podia listar nome, telefone e carro de troca dos clientes. Isso é exposição de dados pessoais (LGPD). O painel baixava todas as linhas de leads para cada visitante, mas só exibia a **contagem**.

## Decisão
1. Migration `001_fechar_leitura_publica.sql`: remove toda policy de SELECT/ALL dessas tabelas. O público só faz `INSERT`.
2. Função `public.dashboard_stats()` (`SECURITY DEFINER`, `search_path` fixo) devolve apenas `total_views`, `unique_devices` e `total_leads`. Ela é liberada para `anon`.
3. O `supabase-client.js` usa só `rpc('dashboard_stats')`. Se a função não existir, o painel cai nos números locais e nunca tenta ler linhas.
4. Chave publishable no histórico git (`SECRETS-LEAK-01`): **não rotacionar**. Ela é pública por design. O risco era a policy, não a chave.

## Alternativas rejeitadas
- Login no painel com Supabase Auth: correto para o futuro, mas exige definir o admin. Fica para quando o painel precisar mostrar os leads em si.
- Manter a leitura e "esconder" a chave: a chave é necessária no navegador para inserir leads. Esconder não é controle.

## Consequências
- Contagens agregadas continuam públicas (risco baixo e aceito).
- Ver a lista de leads só no painel do Supabase, até existir login.
- **Prova de disparo (SEC-CONTROL-LIVE-01):** depois de aplicar a migration, um `GET /rest/v1/leads` com a chave publishable tem que voltar 0 linhas ou erro. Evidência em `ESTADO.md`.
