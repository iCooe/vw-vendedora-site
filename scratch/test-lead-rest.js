const https = require("https");

const options = {
  hostname: "jrleyeoubalefjzgudcx.supabase.co",
  port: 443,
  path: "/rest/v1/leads?select=*&order=created_at.desc&limit=3",
  method: "GET",
  headers: {
    "apikey": "sb_publishable_oX3AeWe3TtRsa1Kv7bI_pQ_Twn7tm8m",
    "Authorization": "Bearer sb_publishable_oX3AeWe3TtRsa1Kv7bI_pQ_Twn7tm8m"
  }
};

const req = https.request(options, (res) => {
  let body = "";
  res.on("data", (chunk) => body += chunk);
  res.on("end", () => {
    console.log("Status Code:", res.statusCode);
    console.log("Response Body:", body);
  });
});

req.on("error", (e) => console.error(e));
req.end();
