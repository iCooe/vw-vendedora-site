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

// Exportar para Node ou escopo global
if (typeof module !== "undefined" && module.exports) {
  module.exports = { SUPABASE_CONFIG, getSupabaseClient, saveLeadToSupabase };
} else {
  window.SUPABASE_CONFIG = SUPABASE_CONFIG;
  window.saveLeadToSupabase = saveLeadToSupabase;
}
