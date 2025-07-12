import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function MargiesBags() {
  const [email, setEmail] = useState("");

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-4">Margie’s Bags</h1>
      <p className="text-center text-lg mb-8 italic">
        Proof of survival. A gift of hope.
      </p>

      <Card className="bg-purple-50 shadow-xl rounded-2xl p-6">
        <CardContent>
          <h2 className="text-2xl font-semibold mb-2">Margie’s Story</h2>
          <p className="mb-4">
            In 1988, I was diagnosed with cancer. Long-term survival was not expected.
            Yet years later, I am still here. These bags are proof that survival is
            possible, and are meant to give hope to everyone fighting the battle.
          </p>
        </CardContent>
      </Card>

      <div className="my-10 grid gap-4">
        <Card className="bg-white shadow-md rounded-2xl p-4">
          <CardContent>
            <h2 className="text-xl font-semibold mb-2">The Bags</h2>
            <p>
              Handmade with love and filled with meaning, each bag offers a
              practical way for cancer patients to carry their essentials — and a
              message of strength and support.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-md rounded-2xl p-4">
          <CardContent>
            <h2 className="text-xl font-semibold mb-2">Contact</h2>
            <p className="mb-2">Want to reach out or learn more?</p>
            <p className="mb-2 font-medium">Email: <a href="mailto:margie@margiesbags.org" className="text-purple-700">margie@margiesbags.org</a></p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}