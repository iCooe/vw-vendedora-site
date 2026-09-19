const { createClient } = require("@supabase/supabase-js");

const url = "https://jrleyeoubalefjzgudcx.supabase.co";
const key = "sb_publishable_oX3AeWe3TtRsa1Kv7bI_pQ_Twn7tm8m";

const supabase = createClient(url, key);

async function checkLatestLead() {
  console.log("🔍 Verificando os leads no Supabase Miriane Alves...");
  const { data, error } = await supabase
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(3);

  if (error) {
    console.error("❌ Erro ao consultar Supabase:", error);
  } else {
    console.log("✅ Leads encontrados no Supabase:", JSON.stringify(data, null, 2));
  }
}

checkLatestLead();
