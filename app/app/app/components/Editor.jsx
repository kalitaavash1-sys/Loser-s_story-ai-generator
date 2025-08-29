"use client";
import { useState } from "react";

export default function Editor() {
  const [prompt, setPrompt] = useState("");
  const [story, setStory] = useState("");
  const [loading, setLoading] = useState(false);

  async function generate() {
    setLoading(true);
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    setStory(data.story);
    setLoading(false);
  }

  return (
    <div>
      <textarea
        rows="4"
        cols="50"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your story prompt..."
      />
      <br />
      <button onClick={generate} disabled={loading}>
        {loading ? "Generating..." : "Generate Story"}
      </button>
      <div style={{ marginTop: "20px", whiteSpace: "pre-wrap" }}>
        {story}
      </div>
    </div>
  );
}
