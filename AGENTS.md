# AGENTS.md — Site Miriane Alves · Consultora VW Brasília

> Padrão seguido: Constituição de Engenharia Universal **v3.5** · Porte: `app-simples` · Auditado em: 2026-10-07
> (ASCII para o audit.sh: padrao seguido = Constituicao Universal v3.5)
> Pendências de auditoria (GOV-ADOPT-01) — detalhe e prazo em `ESTADO.md` § Bloqueios:
> - `SECRETS-LEAK-01` — `.env` no histórico git. **Aceito**: só contém a chave *publishable* (pública por design). Ver `docs/adr/ADR-002`.
> - `GOV-ENFORCE-01` — sem hook de pre-push / CI rodando `audit.sh`. Previsto no Bloco C.
> - `DEP-SERVICE-01` — Supabase plano grátis pausa após 7 dias sem uso; sem keep-alive. Previsto no Bloco C.
> - `SEC-HEADERS-02` — headers de segurança não configurados no Netlify. Previsto no Bloco C.
> - `SEC-AUTH` — Dashboard sem autenticação real; `app.js` contém senhas de demonstração em texto puro (`DEFAULT_USERS_DATA`). Aguarda decisão do owner.

## Ritual obrigatório de início de sessão (CTX-RITUAL-01)
1. Leia este arquivo inteiro.
2. Leia `ESTADO.md` — ele diz onde o trabalho parou e o que vem agora.
3. Leia os ADRs em `docs/adr/` citados no `ESTADO.md`.
4. SE for tocar área já corrigida: leia a entrada correspondente em `docs/CORRECOES.md`.

NUNCA comece a codar sem os passos 1-2. NUNCA pergunte "onde paramos?" — o `ESTADO.md` responde.

## O projeto
- **O que é:** landing page de captação de leads da consultora Miriane Alves (Volkswagen, Brasília-DF), com simulador, prova social e um painel de métricas.
- **Stack:** HTML5 + CSS3 + JavaScript puro (sem build) · Supabase (Postgres + RLS) via SDK no navegador · Hospedagem: Netlify (deploy automático do GitHub `iCooe/vw-vendedora-site`, branch `main`) + Surge (legado).
- **Comandos:** rodar local: `node server.js` (http://localhost:8080) · testes: — (verificação manual + `audit.sh`) · build: — · deploy: `git push origin main` (Netlify) · `npx surge . miriane-alves-vw-brasilia.surge.sh` (Surge).

## Regras específicas deste projeto
1. **PROTO-GOV-01 — aprovação prévia:** nenhuma alteração de código sem proposta apresentada e autorização explícita do owner.
2. **Dados pessoais (LGPD):** o navegador NUNCA lê linhas de `leads`. O Dashboard usa só `rpc('dashboard_stats')` (contagens). Não recriar policy de `SELECT` público — ver `docs/adr/ADR-002`.
3. **Mudança de banco = migration nova** em `supabase/migrations/NNN_*.sql`, idempotente, aplicada pelo owner no SQL Editor. Nunca editar migration já aplicada.
4. `index.html` e `traco-1.html` são espelhos — alteração de conteúdo vale para os dois. `pagina-original.html` é arquivo histórico, não editar.
5. Fotos de entrega: só as que mostram a Miriane (ver PR-016).
6. Idiomas: domínio=pt-BR · código=pt-BR/en misto (legado) · commits=en (convencional) com ID do ponto `[PR-NNN]`.

## Ritual obrigatório de fim de sessão
1. Atualize `ESTADO.md` (checkpoint, decisões, próximos 3 passos, bloqueios).
2. Acrescente a entrada `PR-NNN` em `docs/PONTOS-DE-RESTAURACAO.md` com o hash do commit (CTX-RESTORE-01).
3. Rode `audit.sh` e cole a saída (IA-EVIDENCE-01). Commit + push.
4. Decisão tomada no chat → grave em ADR/ESTADO antes de encerrar (CTX-RESUMO-01).
5. Antes de qualquer operação de risco: savepoint (commit/tag) primeiro (CTX-RESTORE-02).
