require("dotenv").config();

const fs = require("fs");
const path = require("path");
const apiKey = process.env.EMBEDDABLE_API_KEY;
const connectionName = "hubspot_BQ";
const projectId = "wimmy-dev";

const serviceAccount = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../../../../backend/secrets/serviceAccount.json"),
    "utf-8")
);

const BASE_URL = "https://api.us.embeddable.com"; // US
// const BASE_URL = 'https://api.eu.embeddable.com'; // EU

const dbType = "bigquery";

async function run() {
  try {
    const resp = await fetch(`${BASE_URL}/api/v1/connections/${connectionName}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        type: dbType,
        credentials: {
          projectId: projectId,
          credentials: serviceAccount,
        },
      }),
    });

    console.log(`${resp.status} ${resp.statusText}`);
    const json = await resp.json();
    console.log(json);
  } catch (error) {
    console.error("Update connection error:", error);
  }
}

run();