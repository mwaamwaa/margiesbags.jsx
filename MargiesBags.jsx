import React, { useState } from "react";

export default function MargiesBags() {
  const [email, setEmail] = useState("");

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2rem", textAlign: "center" }}>Margie’s Bags</h1>
      <p style={{ textAlign: "center", fontStyle: "italic" }}>
        Proof of survival. A gift of hope.
      </p>

      <div style={{ background: "#f3e8ff", borderRadius: "16px", padding: "1.5rem", margin: "1rem 0" }}>
        <h2>Margie’s Story</h2>
        <p>
          In 1988, I was diagnosed with cancer. Long-term survival was not expected.
          Yet years later, I am still here. These bags are proof that survival is
          possible, and are meant to give hope to everyone fighting the battle.
        </p>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <div style={{ background: "#fff", borderRadius: "16px", padding: "1rem", marginBottom: "1rem" }}>
          <h2>The Bags</h2>
          <p>
            Handmade with love and filled with meaning, each bag offers a
            practical way for cancer patients to carry their essentials — and a
            message of strength and support.
          </p>
        </div>

        <div style={{ background: "#fff", borderRadius: "16px", padding: "1rem" }}>
          <h2>Contact</h2>
          <p>Want to reach out or learn more?</p>
          <p><strong>Email:</strong> <a href="mailto:margie@margiesbags.org">margie@margiesbags.org</a></p>
        </div>
      </div>
    </div>
  );
}