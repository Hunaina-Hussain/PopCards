import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from '@google/generative-ai'; // Ensure correct import

export async function POST(req) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    console.error("API Key is missing");
    return NextResponse.json({ error: "API Key is missing" }, { status: 500 });
  }

  try {
    // Initialize the API client with the API key
    const genAI = new GoogleGenerativeAI({ apiKey });

    // Set system instructions and model parameters
    const model = genAI.getGenerativeModell({
      model: "gemini-1.5-flash",
      systemInstruction: `
        You are a flashcard creator. Your task is to generate concise and effective flashcards based on the given text. 
        Create exactly 10 flashcards, each with a front and back side, formatted as follows:

        {
          "flashcards": [
            {
              "front": "Front of the card",
              "back": "Back of the card"
            }
          ]
        }
      `,
    });

    // Get request data
    const data = await req.json();
    
    if (!data.text) {
      console.error("Text content is missing");
      return NextResponse.json({ error: "Text content is missing" }, { status: 400 });
    }

    // Send prompt to generate flashcards
    const result = await model.generateContent(data.text);
    const flashcards = JSON.parse(result.response) || []; // Adjust based on actual result structure

    return NextResponse.json({ flashcards }, { status: 200 });
  } catch (error) {
    console.error("Error in API Call:", error.message || error);
    return NextResponse.json({ error: "Error generating response" }, { status: 500 });
  }
}
