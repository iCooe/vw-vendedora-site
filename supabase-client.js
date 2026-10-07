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
        telefone: leadData.phone || null,
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
// Usa SOMENTE a função agregada dashboard_stats() — devolve contagens, nunca linhas.
// O navegador não pede mais dados pessoais de leads (ver docs/adr/ADR-002).
async function fetchDashboardDataFromSupabase() {
  try {
    const client = getSupabaseClient();
    if (!client) return null;

    const { data, error } = await client.rpc("dashboard_stats");
    if (error || !data) {
      console.warn("dashboard_stats indisponível (migration 001 aplicada?):", error);
      return null;
    }

    return {
      totalViews: data.total_views || 0,
      uniqueDevices: data.unique_devices || 0,
      totalLeads: data.total_leads || 0
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
