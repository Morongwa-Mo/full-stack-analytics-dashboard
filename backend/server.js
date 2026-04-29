const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/token", async (req, res) => {
  try {
    const embeddableId = req.query.embeddableId;

    if (!embeddableId) {
      return res.status(400).json({ error: "Missing embeddableId" });
    }

    console.log("==== ENV CHECK ====");
    console.log("Region:", process.env.EMBEDDABLE_REGION);
    console.log("Requested Embeddable ID:", embeddableId);
    console.log("API key prefix:", process.env.EMBEDDABLE_API_KEY?.slice(0, 10));
    console.log("API key length:", process.env.EMBEDDABLE_API_KEY?.length);
    console.log("===================");

    const response = await fetch(
      `https://api.${process.env.EMBEDDABLE_REGION}.embeddable.com/api/v1/security-token`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${process.env.EMBEDDABLE_API_KEY}`,
        },
        body: JSON.stringify({
          embeddableId: embeddableId,
          savedVersion: "production",
          expiryInSeconds: 60 * 60 * 24 * 7,
          securityContext: {
            userId: "test-user",
            regions: ["us-east", "eu-west"],
          },
          user: "morongwa.wimmy@gmail.com",
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json(data);
    }

    res.json({ token: data.token });
  } catch (error) {
    console.error("Token generation error:", error);
    res.status(500).json({ error: "Failed to generate token" });
  }
}
);

app.get("/api/metrics", async (req, res) => {
  const industry = req.query.industry;

  if (!industry) {
    return res.status(400).json({ error: "Industry is required" });
  }

  try {
    // Replace this temporary block with your real query later
    const data = {
      conversionRate: 63,
      averageDealsWon: 342000,
      averageDealsLost: 3000000,
      avgDaysToClose: 178,
    };

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});