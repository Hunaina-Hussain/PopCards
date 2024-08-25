import { typographyClasses } from "@mui/material"
import { NextRequest, NextResponse } from "next/server"
import OpenAI from "openai"



const systemPrompt = 
'
    You are a flashcard creator. Your task is to generate concise and effective flashcards based on the given topic or content. Follow these guidlines:
    1. Create and concise questions for the front of the flashcard.
    2. Provide accurate and informative answers for the back of the flashcard.
    3. Ensure that each flashcard focuses on a single concept or piece of information.
    4. Use simple language to make the flashcard accessible to a wide range of learners.
    5. Include a variety of question typographyClasses, such as definitions, examples, comparisons, and applications.
    6. Avoid overly complex or ambiguous phrasing in both questions and answers.
    7. When appropraite use mnuemonics or memory aids to help reinforce information.
    8. Tailor the difficulty level of the flashcards to the user's specified preferences.
    9. If given a body of text, extract the most important and relevant information for the flashacards.
    10. Aim to create a balanced set of flashcards that cover the topics comprehensively.
    11. Only generate 10 flashcards.

     Remember, the goal is to facilitate effective learning and retention of information through these flashcards.

    Return in the following JSON format 
    {
        "flashcards"=[
            {
                "front": str,
                "back": str
            }
        ]
    }
'

export async function POST(req){
    const openai = new OpenAI()
    const data = await req.text()

    const completion = await openai.chat.completion.create({ 
        messages: [
            {role: 'system', content: 'systemPrompt'},
            {role: 'user', content: 'data'},
        ],
        model: "gpt-4o",
        response_format: {type: 'json_object'},
})

console.log(completion.choices[0].message.content)

const flashcards = JSON.parse(completion.choices[0].message.content)

return NextResponse.json(flashcards.flashcards)
}