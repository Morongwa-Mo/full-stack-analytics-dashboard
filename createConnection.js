require("dotenv").config();

const BASE_URL = "https://api.us.embeddable.com"; // or eu
const apiKey = process.env.EMBEDDABLE_API_KEY;
const connectionName = "hubspot_BQ"
async function createConnection() {
  try {
    const resp = await fetch(`${BASE_URL}/api/v1/connections`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: connectionName,
        type: "bigquery",
        credentials: {
          projectId: "wimmy-dev",
          credentials: {
            // paste FULL service account JSON here
          }
        }
      })
    });

    const data = await resp.json();

    console.log("Response:", data);
  } catch (error) {
    console.error("Error creating connection:", error);
  }
}

createConnection();