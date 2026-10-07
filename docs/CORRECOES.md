# CORREÇÕES — Site Miriane Alves VW
> Registro de bugs não triviais. O código corrigido referencia a entrada (`ver docs/CORRECOES.md#NN`).
> Sessão futura que achar o código "estranho" lê aqui ANTES de "melhorar". O estranho pode ser a correção.

## #01 — 2026-10-07 — Dados pessoais de leads legíveis publicamente
- **Sintoma:** com a chave publishable (visível no site), um `GET /rest/v1/leads` listava os leads.
- **Causa raiz:** `schema.sql` criou `FOR SELECT USING (true)` para alimentar o painel no navegador.
- **Solução e por que ESTA:** a migration 001 remove o SELECT público, e o painel passa a usar `rpc('dashboard_stats')`, só com contagens (ADR-002). As policies são removidas **pelo tipo, não pelo nome**: o `schema.sql` original foi salvo fora de UTF-8, e os nomes acentuados ("pública", "inserção") podem não bater com os nomes gravados no banco.
- **Alternativas rejeitadas:** `DROP POLICY IF EXISTS "nome"`, porque falharia em silêncio se o acento divergisse.
- **Teste de regressão:** `GET /rest/v1/leads?select=id` com a chave publishable → 0 linhas ou 401/42501 (ver `ESTADO.md` § Evidências).
