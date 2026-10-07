# ADR-001: Stack — site estático + Supabase, sem backend próprio
> Data: 2026-10-07 (registro retroativo da decisão de 2026-09-19) · Status: aceito · Decisor: Cleiton (owner)

## Contexto
O site é uma landing page de captação para uma consultora autônoma. Precisa ser barato, rápido e fácil de manter, e guardar leads com segurança.

## Decisão
HTML/CSS/JS puro, sem build. Os dados ficam no Supabase (Postgres gerenciado, com RLS), acessado do navegador com a chave *publishable*. Hospedagem estática no Netlify, com deploy a partir do GitHub (o Surge fica como legado).

## Alternativas rejeitadas
- Backend Node próprio: aumenta a superfície de ataque, o custo e a operação (servidor, patches, backups) sem ganho para o porte.
- WordPress/Wix: menos controle de SEO técnico e de performance.

## Consequências
- Não há servidor para manter. Regras de infraestrutura (`NET-*`, `DB-POOL-01`, `QUEUE-*`, `OPS-RESTART-01`, `HARD-CAP-01`, `TEST-CHAOS-01`, `BKP-REMEDIATE-01`) **não se aplicam**.
- Toda a segurança dos dados depende do **RLS** e de funções `SECURITY DEFINER` (ver ADR-002).
- Dependência de serviço gerenciado: o plano grátis do Supabase pausa por inatividade (`DEP-SERVICE-01`).
