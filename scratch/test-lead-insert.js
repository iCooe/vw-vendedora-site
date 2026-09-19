const https = require("https");

const leadData = JSON.stringify([{
  modelo_usado: "Gol 1.6 MSI",
  ano: 2021,
  quilometragem: 45000,
  vw_desejado: "Nivus Highline 200 TSI",
  valor_pretendido_parcela: "R$ 1.200,00",
  origem: "Teste Antigravity / Padrão Universal",
  utm_source: "google_ads",
  utm_medium: "cpc",
  utm_campaign: "vw_brasilia_2026"
}]);

const options = {
  hostname: "jrleyeoubalefjzgudcx.supabase.co",
  port: 443,
  path: "/rest/v1/leads",
  method: "POST",
  headers: {
    "apikey": "sb_publishable_oX3AeWe3TtRsa1Kv7bI_pQ_Twn7tm8m",
    "Authorization": "Bearer sb_publishable_oX3AeWe3TtRsa1Kv7bI_pQ_Twn7tm8m",
    "Content-Type": "application/json",
    "Prefer": "return=representation"
  }
};

const req = https.request(options, (res) => {
  let body = "";
  res.on("data", (chunk) => body += chunk);
  res.on("end", () => {
    console.log("Status Code:", res.statusCode);
    console.log("Inserted Lead:", body);
  });
});

req.on("error", (e) => console.error(e));
req.write(leadData);
req.end();
