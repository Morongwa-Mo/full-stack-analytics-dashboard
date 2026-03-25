import React, { useEffect, useState } from "react";

export default function EmbeddableDashboard() {
  const [token, setToken] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const getToken = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/token");
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Failed to fetch token");
        }

        setToken(data.token);
      } catch (err) {
        setError(err.message);
      }
    };

    getToken();
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (!token) return <p>Loading dashboard...</p>;

  return React.createElement("em-beddable", { token });
}