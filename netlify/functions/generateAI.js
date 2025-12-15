import { GoogleGenAI } from "@google/genai";

export async function handler(event, context) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  try {
    const { prompt, style } = JSON.parse(event.body);

    if (!prompt) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Prompt is required" }),
      };
    }

    const apiKey = process.env.GEMINI_API_KEY;
    const ai = new GoogleGenAI({ apiKey });

    const styleInstructions = {
      default: `You are HistoryTwister, an AI that creates alternate history scenarios. 
        Write 150 words max. Stay on topic; refuse requests about unrelated prompts.
        Do not include greetings,intros, just start with scenario
        Prompt: "${prompt}"`,

      newspaper: `You are HistoryTwister, an AI that writes alternate history newspaper articles. 
        Write 130 words max. Stay on topic; refuse requests about unrelated prompts.
        Do not include greetings,intros, just start with scenario
        Prompt: "${prompt}"`,

      tweet: `Pretend you are Twitter users. Write 5 tweets as if in the alternate history scenario, 20-30 words max. 
        Hashtags optional, 1 hashtag max, don't say "Here's 5 tweets". Refuse requests about unrelated prompts.
        Do not include greetings/intros, just start with scenario
        Prompt: "${prompt}"`,

      blog: `Pretend you are a blogger. Write a 150-word blog about living in alternate history scenario. 
        Stay on topic, creative but natural. Refuse requests about unrelated prompts.
        Do not include greetings,intros, just start with scenario
        Prompt: "${prompt}"`
    };

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: styleInstructions[style] || styleInstructions.default,
    });

    const output = response.text ?? "No output";

    return {
      statusCode: 200,
      body: JSON.stringify({ output }),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
}
