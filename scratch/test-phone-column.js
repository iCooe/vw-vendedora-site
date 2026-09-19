const https = require("https");

const leadData = JSON.stringify([{
  modelo_usado: "Polo Track 1.0",
  ano: 2023,
  quilometragem: 20000,
  vw_desejado: "T-Cross Highline",
  valor_pretendido_parcela: "R$ 1.500/mês",
  telefone: "(61) 99888-7777",
  origem: "Teste Campo Telefone Antigravity"
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
    console.log("Inserted Lead with Phone:", body);
  });
});

req.on("error", (e) => console.error(e));
req.write(leadData);
req.end();
