-- ============================================================================
-- 001 — Fechar leitura pública de dados pessoais (LGPD)
-- Padrão de Engenharia Universal v3.5 · SEC-CONTROL-LIVE-01 · ver docs/adr/ADR-002
--
-- ANTES: leads e analytics_pageviews tinham "FOR SELECT USING (true)" — qualquer
--        pessoa com a chave publishable (visível no JS do site) lia nome/telefone.
-- DEPOIS: o público só INSERE. O Dashboard recebe apenas CONTAGENS agregadas pela
--         função dashboard_stats() (SECURITY DEFINER), nunca linhas com PII.
--
-- Idempotente: pode rodar mais de uma vez sem erro.
-- Como aplicar: Supabase → SQL Editor → colar este arquivo → Run.
-- ============================================================================

-- 1) Remover TODA policy de leitura (SELECT/ALL) das tabelas com dados de visitantes,
--    e qualquer policy de system_checkpoints (tabela interna, sem uso no site).
--    Feito pelo TIPO da policy, não pelo nome: o schema original foi salvo fora de
--    UTF-8 e os nomes acentuados podem não bater (ver docs/CORRECOES.md#01).
DO $$
DECLARE p record;
BEGIN
  FOR p IN
    SELECT policyname, tablename FROM pg_policies
     WHERE schemaname = 'public'
       AND (
         (tablename IN ('leads','analytics_pageviews') AND cmd IN ('SELECT','ALL'))
         OR tablename = 'system_checkpoints'
       )
  LOOP
    EXECUTE format('DROP POLICY %I ON public.%I', p.policyname, p.tablename);
    RAISE NOTICE 'Removida policy "%" de %', p.policyname, p.tablename;
  END LOOP;
END $$;

-- 3) Garantir RLS ligado (sem policy de SELECT = leitura negada para anon)
ALTER TABLE public.leads               ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.analytics_pageviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.system_checkpoints  ENABLE ROW LEVEL SECURITY;

-- 4) Função agregada para o Dashboard — devolve só números, nenhuma linha
CREATE OR REPLACE FUNCTION public.dashboard_stats()
RETURNS json
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT json_build_object(
    'total_views',    (SELECT count(*) FROM public.analytics_pageviews),
    'unique_devices', (SELECT count(DISTINCT user_agent) FROM public.analytics_pageviews),
    'total_leads',    (SELECT count(*) FROM public.leads)
  );
$$;

REVOKE ALL ON FUNCTION public.dashboard_stats() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.dashboard_stats() TO anon, authenticated;

-- ============================================================================
-- VERIFICAÇÃO (rodar depois; esperado):
--   SELECT public.dashboard_stats();                         -> {"total_views":N,...}
--   SELECT policyname, cmd FROM pg_policies
--    WHERE tablename IN ('leads','analytics_pageviews');      -> só INSERT
-- ============================================================================
