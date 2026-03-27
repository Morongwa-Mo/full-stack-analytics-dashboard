const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/token", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.${process.env.EMBEDDABLE_REGION}.embeddable.com/api/v1/security-token`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `Bearer ${process.env.EMBEDDABLE_API_KEY}`,
        },
        body: JSON.stringify({
          embeddableId: process.env.EMBEDDABLE_DASHBOARD_ID,
          savedVersion: "production",
          expiryInSeconds: 60 * 60,
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
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});