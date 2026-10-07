-- ==========================================================================
-- SCRIPT DDL SUPABASE - PROJETO MIRIANE ALVES (VOLKSWAGEN BRASÍLIA)
-- Execute este script no SQL Editor do seu painel Supabase (supabase.com/dashboard)
-- ==========================================================================

-- 1. TABELA DE LEADS & COTAÇÕES DE USADO
CREATE TABLE IF NOT EXISTS public.leads (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    modelo_usado TEXT NOT NULL,
    ano INTEGER,
    quilometragem INTEGER,
    vw_desejado TEXT NOT NULL,
    valor_pretendido_parcela TEXT,
    telefone TEXT,
    origem TEXT DEFAULT 'Landing Page VW Miriane Alves',
    utm_source TEXT,
    utm_medium TEXT,
    utm_campaign TEXT,
    status TEXT DEFAULT 'Novo Lead'
);

-- 2. TABELA DE ANALYTICS & VISUALIZAÇÕES DE PÁGINA
CREATE TABLE IF NOT EXISTS public.analytics_pageviews (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    device_type TEXT,
    user_agent TEXT,
    referrer TEXT,
    page_url TEXT
);

-- 3. TABELA DE CHECKPOINTS & PONTOS DE RESTAURAÇÃO (PADRÃO UNIVERSAL V3.2)
CREATE TABLE IF NOT EXISTS public.system_checkpoints (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    checkpoint_code TEXT NOT NULL UNIQUE,
    summary TEXT NOT NULL,
    git_commit TEXT,
    author TEXT DEFAULT 'IA Antigravity / Padrão Universal'
);

-- HABILITAR ROW LEVEL SECURITY (RLS) COM POLÍTICAS DE INSERÇÃO PÚBLICA (ANON)
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.analytics_pageviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.system_checkpoints ENABLE ROW LEVEL SECURITY;

-- POLÍTICAS PERMISSIVAS PARA INSERÇÃO VIA WEBSITE (KEY PUBLISHABLE / ANON)
CREATE POLICY "Permitir inserção pública de leads" ON public.leads FOR INSERT WITH CHECK (true);
CREATE POLICY "Permitir leitura pública de leads" ON public.leads FOR SELECT USING (true);

CREATE POLICY "Permitir inserção pública de pageviews" ON public.analytics_pageviews FOR INSERT WITH CHECK (true);
CREATE POLICY "Permitir leitura pública de pageviews" ON public.analytics_pageviews FOR SELECT USING (true);

CREATE POLICY "Permitir leitura pública de checkpoints" ON public.system_checkpoints FOR SELECT USING (true);
CREATE POLICY "Permitir inserção de checkpoints" ON public.system_checkpoints FOR INSERT WITH CHECK (true);
