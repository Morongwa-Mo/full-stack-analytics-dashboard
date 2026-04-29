import React, { useEffect, useRef, useState } from "react";

export default function EmbeddableDashboard({
  embeddableId,
  onVariablesChange,
}) {
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const embeddableRef = useRef(null);

  useEffect(() => {
    const getToken = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/api/token?embeddableId=${embeddableId}`
        );
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
  }, [embeddableId]);

  useEffect(() => {
    const element = embeddableRef.current;
    if (!element) return;

   const handleVariablesChange = (e) => {
  console.log("variablesChange fired raw:", e.detail);
  console.log("variablesChange fired json:", JSON.stringify(e.detail));

  const updates = Object.fromEntries(
    (e.detail || []).map((item) => [item.variableName, item.newValue])
  );

  console.log("parsed updates:", JSON.stringify(updates));

  onVariablesChange?.((prev) => ({
    ...prev,
    ...updates,
  }));
};

    const handleEmbeddableError = (e) => {
      console.error("Embeddable error:", e.detail);
    };

    element.addEventListener("variablesChange", handleVariablesChange);
    element.addEventListener("embeddableError", handleEmbeddableError);

    return () => {
      element.removeEventListener("variablesChange", handleVariablesChange);
      element.removeEventListener("embeddableError", handleEmbeddableError);
    };
  }, [onVariablesChange]);

  if (error) return <p>Error: {error}</p>;
  if (!token) return <p>Loading dashboard...</p>;

  return React.createElement("em-beddable", {
    ref: embeddableRef,
    token,
    "embeddable-id": embeddableId,
  });
}