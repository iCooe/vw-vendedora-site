/* ==========================================================================
   SUPABASE CLIENT INTEGRATION - PROJETO MIRIANE ALVES (VOLKSWAGEN BRASÍLIA)
   ========================================================================== */

const SUPABASE_CONFIG = {
  url: "https://jrleyeoubalefjzgudcx.supabase.co",
  anonKey: "sb_publishable_oX3AeWe3TtRsa1Kv7bI_pQ_Twn7tm8m"
};

// Módulo universal para Browser e Node.js
let supabaseClient = null;

function getSupabaseClient() {
  if (supabaseClient) return supabaseClient;
  
  if (typeof window !== "undefined" && window.supabase) {
    supabaseClient = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
    return supabaseClient;
  }
  
  return null;
}

// Inserir Lead no Supabase
async function saveLeadToSupabase(leadData) {
  try {
    const client = getSupabaseClient();
    if (!client) {
      console.warn("Supabase SDK não carregado no navegador. Usando salvamento de contingência.");
      return { success: false, reason: "no_sdk" };
    }

    const { data, error } = await client.from("leads").insert([
      {
        modelo_usado: leadData.model,
        ano: parseInt(leadData.year) || null,
        quilometragem: parseInt(leadData.km) || null,
        vw_desejado: leadData.targetCar,
        valor_pretendido_parcela: leadData.installment,
        origem: "Landing Page VW Miriane Alves",
        utm_source: leadData.utmSource || null,
        utm_medium: leadData.utmMedium || null,
        utm_campaign: leadData.utmCampaign || null
      }
    ]);

    if (error) {
      console.error("Erro ao salvar lead no Supabase:", error);
      return { success: false, error };
    }

    console.log("✅ Lead gravado com sucesso no Supabase Miriane Alves!", data);
    return { success: true, data };
  } catch (err) {
    console.error("Exceção ao salvar lead no Supabase:", err);
    return { success: false, error: err };
  }
}

// Registrar Visualizacao de Pagina (Analytics)
async function trackPageviewSupabase() {
  try {
    const client = getSupabaseClient();
    if (!client) return;

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const deviceType = isMobile ? "Mobile" : "Desktop";

    await client.from("analytics_pageviews").insert([
      {
        device_type: deviceType,
        user_agent: navigator.userAgent,
        referrer: document.referrer || "Direto",
        page_url: window.location.href
      }
    ]);
  } catch (err) {
    console.warn("Erro ao registrar pageview no Supabase:", err);
  }
}

// Buscar Dados Consolidados da Dashboard no Supabase
async function fetchDashboardDataFromSupabase() {
  try {
    const client = getSupabaseClient();
    if (!client) return null;

    // 1. Total Acessos
    const { count: totalViews } = await client.from("analytics_pageviews").select("*", { count: "exact", head: true });

    // 2. Dispositivos Mobile vs Desktop
    const { data: pageviews } = await client.from("analytics_pageviews").select("device_type, user_agent");
    const uniqueDevices = pageviews ? new Set(pageviews.map(p => p.user_agent)).size : 0;

    // 3. Total Preenchimentos / Leads
    const { count: totalLeads, data: leadsList } = await client.from("leads").select("*", { count: "exact" }).order("created_at", { ascending: false });

    return {
      totalViews: totalViews || 0,
      uniqueDevices: uniqueDevices || 0,
      totalLeads: totalLeads || 0,
      leadsList: leadsList || []
    };
  } catch (err) {
    console.error("Erro ao buscar estatísticas do Supabase:", err);
    return null;
  }
}

// Exportar para Node ou escopo global
if (typeof module !== "undefined" && module.exports) {
  module.exports = { SUPABASE_CONFIG, getSupabaseClient, saveLeadToSupabase, trackPageviewSupabase, fetchDashboardDataFromSupabase };
} else {
  window.SUPABASE_CONFIG = SUPABASE_CONFIG;
  window.saveLeadToSupabase = saveLeadToSupabase;
  window.trackPageviewSupabase = trackPageviewSupabase;
  window.fetchDashboardDataFromSupabase = fetchDashboardDataFromSupabase;
}
