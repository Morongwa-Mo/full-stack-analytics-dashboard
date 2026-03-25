import React from "react";

export default function EmbeddableDashboard() {
  const token = "eyJhbGciOiJIUzI1NiJ9.eyJzZWN1cml0eVRva2VuSWQiOiJjOWVlY2E1NC1kNjg2LTQ5NWUtODMwYy04ZTM3YzBjNTJkMzIiLCJpYXQiOjE3NzQ0MzE4NjEsImV4cCI6MTc3NTAzNjY2MX0.2MlMwzWwadBapPo9xiKsA46qguSr9kx4oK74IU6uMWI";

  return React.createElement("em-beddable", { token });
}