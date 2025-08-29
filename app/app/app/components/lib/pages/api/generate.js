import { generateStory } from "../../lib/openai";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { prompt } = req.body;
    try {
      const story = await generateStory(prompt);
      res.status(200).json({ story });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Something went wrong" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
