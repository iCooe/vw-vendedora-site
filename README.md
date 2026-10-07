# Site Miriane Alves — Consultora Volkswagen Brasília

Landing page de captação de leads da consultora **Miriane Alves** (Volkswagen, Brasília-DF): frota em carrossel, simulador de financiamento, avaliação de usado, prova social com entregas reais e painel de métricas.

## Como rodar localmente
```bash
node server.js          # http://localhost:8080
```
Não há build: é HTML/CSS/JS puro.

## Como publicar
- **Netlify (principal):** todo `git push origin main` publica automaticamente.
- **Surge (legado):** `npx surge . miriane-alves-vw-brasilia.surge.sh`

## Banco de dados (Supabase)
- Configuração pública em `supabase-client.js`. A chave é do tipo *publishable*, feita para ser pública, e o acesso é controlado por RLS.
- Mudanças de banco: `supabase/migrations/NNN_*.sql`. Para aplicar, cole no **Supabase → SQL Editor → Run**.
- Variáveis de ambiente: copie `.env.example` para `.env` (o `.env` nunca vai para o git).

## Estrutura
| Caminho | O que é |
|---|---|
| `index.html` / `traco-1.html` | página principal (SEO) e espelho |
| `app.js` · `styles.css` | lógica e estilo |
| `supabase-client.js` | gravação de leads/pageviews e estatísticas do painel |
| `supabase/migrations/` | histórico versionado do banco |
| `AGENTS.md` · `ESTADO.md` · `docs/` | memória do projeto (Padrão de Engenharia Universal v3.5) |
