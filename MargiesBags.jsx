import { useState } from "react";

export default function MargiesBags() {
  const [email, setEmail] = useState("");

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2rem", textAlign: "center", marginBottom: "1rem" }}>
        Margie’s Bags
      </h1>
      <p style={{ textAlign: "center", fontStyle: "italic", marginBottom: "2rem" }}>
        Proof of survival. A gift of hope.
      </p>

      <div style={{ backgroundColor: "#f3e8ff", borderRadius: "1rem", padding: "1.5rem", marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Margie’s Story</h2>
        <p>
          In 1988, I was diagnosed with cancer. Long-term survival was not expected.
          Yet years later, I am still here. These bags are proof that survival is
          possible, and are meant to give hope to everyone fighting the battle.
        </p>
      </div>

      <div style={{ display: "grid", gap: "1.5rem" }}>
        <div style={{ backgroundColor: "#ffffff", borderRadius: "1rem", padding: "1rem", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
          <h2 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>The Bags</h2>
          <p>
            Handmade with love and filled with meaning, each bag offers a
            practical way for cancer patients to carry their essentials — and a
            message of strength and support.
          </p>
        </div>

        <div style={{ backgroundColor: "#ffffff", borderRadius: "1rem", padding: "1rem", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
          <h2 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>Contact</h2>
          <p style={{ marginBottom: "0.5rem" }}>Want to reach out or learn more?</p>
          <p style={{ fontWeight: "500" }}>Email: <a href="mailto:margie@margiesbags.org" style={{ color: "#7c3aed" }}>margie@margiesbags.org</a></p>
        </div>
      </div>
    </div>
  );
}



