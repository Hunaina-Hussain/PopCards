import axios from 'axios';

const API_KEY = process.env.GEMINI_API_KEY;

export async function POST(request) {
  try {
    // Parse incoming request body
    const { topic, numCards } = await request.json();

    if (!topic || !numCards) {
      return new Response(JSON.stringify({ error: 'Topic and number of cards are required.' }), { status: 400 });
    }

    // Make sure to replace with the correct API endpoint
    const response = await axios.post('YOUR_ACTUAL_API_ENDPOINT_HERE', {
      topic: topic,
      numCards: numCards
    }, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    return new Response(JSON.stringify(response.data), { status: 200 });
  } catch (error) {
    console.error('Error generating flashcards:', error.response?.data || error.message || error);
    return new Response(JSON.stringify({ error: 'An error occurred while generating flashcards.' }), { status: 500 });
  }
}
