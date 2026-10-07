# PONTOS DE RESTAURAÇÃO — Site Miriane Alves VW
> Append-only. Entrada antiga é IMUTÁVEL. Sem código/diff aqui — o commit guarda o conteúdo.
> Visão MACRO: leia só os títulos `## PR-NNN`. Visão MICRO: leia o corpo da entrada.
>
> COMO RESTAURAR (sempre via git, com o hash da entrada — nunca de memória):
> - Inspecionar um ponto:            `git switch -c inspecao-prNNN <hash>`
> - Voltar arquivos específicos:     `git restore --source <hash> -- <caminhos>`
> - Reverter um ponto ruim:          `git revert <hash>`
> - Voltar o projeto INTEIRO:        criar branch de resgate a partir do `<hash>`
>   (`reset --hard` só com autorização explícita do owner — IA-DESTRUCT-01)
>
> Migração 2026-10-07: PR-001…PR-018 vieram do antigo histórico em `ESTADO.md` (CP-NNN → PR-NNN,
> mesma numeração). Não existe PR-008: o CP-008 nunca foi registrado. Cada ponto também tem tag git.

## PR-001 — 2026-09-19 — Governança + Supabase: inicialização
- **Commit:** `3423351` · **Tag:** `v1.0-universal-init` · **Tipo:** adicionado
- **Adicionado:** AGENTS.md, ESTADO.md, `.env`, `supabase-client.js`, `schema.sql` (leads, analytics_pageviews, system_checkpoints).

## PR-002 — 2026-09-19 — Formulário de usado gravando leads no Supabase
- **Commit:** `f07e5a1` · **Tag:** `v1.1-leads-supabase` · **Tipo:** adicionado
- **Adicionado:** insert em `leads` com UTMs; FormSubmit + WhatsApp como contingência.

## PR-003 — 2026-09-19 — Dashboard sincronizado com Supabase
- **Commit:** `7ba10b5` · **Tag:** `v1.2-dashboard-sync` · **Tipo:** adicionado
- **Adicionado:** tracking de pageviews; KPIs lidos do Supabase.

## PR-004 — 2026-09-19 — Release de produção v2
- **Commit:** `93eb2a0` · **Tag:** `v2.0-production-release` · **Tipo:** modificado
- **Estado verificado:** insert de lead com HTTP 201; deploy Surge.

## PR-005 — 2026-09-19 — Campo telefone no lead
- **Commit:** `cd69b6b` · **Tag:** `v2.1-phone-field` · **Tipo:** adicionado

## PR-006 — 2026-09-19 — Remoção de preços da frota
- **Commit:** `8ca8fef` · **Tag:** `v2.2-remove-prices` · **Tipo:** removido

## PR-007 — 2026-09-19 — Foto oficial do Taos Highline
- **Commit:** `e4eaa4a` · **Tag:** `v2.3-taos-image` · **Tipo:** modificado
- **Modificado:** `VEHICLES_DATA` Taos: `vw_hero.jpg` → `vw_taos.jpg`.

## PR-009 — 2026-09-24 — Subpágina SEO 360 & GEO (traco-1.html)
- **Commit:** `a2bb737` · **Tag:** `v3.1-seo-subpage` · **Tipo:** adicionado
- **Adicionado:** `traco-1.html` (meta, OG, Schema AutoDealer + FAQPage), `sitemap.xml`, `robots.txt`.

## PR-010 — 2026-09-24 — Versão SEO promovida a página principal
- **Commit:** `08f30a4` · **Tag:** `v3.2-seo-as-primary` · **Tipo:** modificado
- **Modificado:** `index.html` ← versão SEO; original preservada em `pagina-original.html`.

## PR-011 — 2026-09-24 — Prova social: entregas realizadas
- **Commit:** `3a993dd` · **Tag:** `v3.3-proof-of-delivery` · **Tipo:** adicionado
- **Adicionado:** 19 fotos tratadas (sem texto do Instagram) + seção de entregas.

## PR-012 — 2026-09-24 — Proporção natural das fotos de entrega
- **Commit:** `21907e3` · **Tag:** `v3.4-aspect-ratio-fix` · **Tipo:** corrigido
- **Corrigido:** fotos esticadas → corte com proporção preservada; `object-fit: cover`.

## PR-013 — 2026-09-24 — Remoção dos selos sobre as placas
- **Commit:** `35b303e` · **Tag:** `v3.5-clean-deliveries` · **Tipo:** removido
- **Removido:** selos sobre placas (pedido do owner, ficaram ruins).

## PR-014 — 2026-09-24 — Prova social em carrossel
- **Commit:** `29a9411` · **Tag:** `v3.6-deliveries-slider` · **Tipo:** modificado
- **Modificado:** grade de entregas → carrossel com setas, dots e swipe (3/2/1 por tela).

## PR-015 — 2026-09-24 — Remoção da 19ª foto
- **Commit:** `d275a6a` · **Tag:** `v3.7-remove-image-19` · **Tipo:** removido

## PR-016 — 2026-09-24 — Só fotos em que a Miriane aparece
- **Commit:** `5be6482` · **Tag:** `v3.8-filter-delivery-photos` · **Tipo:** removido
- **Removido:** entregas 06, 15 e 17 (Miriane ausente ou cortada).

## PR-017 — 2026-09-25 — Frota em carrossel
- **Commit:** `6965670` · **Tag:** `v3.9-fleet-slider` · **Tipo:** modificado
- **Modificado:** grade da frota → carrossel sincronizado com os filtros de categoria.

## PR-018 — 2026-09-25 — Remoção de "Aprovação em 15 Minutos"
- **Commit:** `2ea7974` · **Tag:** `v4.0-remove-approval-kw` · **Tipo:** removido

## PR-019 — 2026-10-02 — `.gitignore` e publicação no GitHub/Netlify
- **Commit:** `32623bc` · **Tipo:** adicionado
- **Adicionado:** `.gitignore` (node_modules, scratch, .env); repositório `iCooe/vw-vendedora-site`; deploy Netlify a partir de `main`.
