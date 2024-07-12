import OpenAI from 'openai';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY // This is the default and can be omitted
});





export async function POST(req: Request){
 
    const prompt = await req.json()
    console.log("prompt------------" + JSON.stringify(prompt))

    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: JSON.stringify(prompt) }],
      model: 'gpt-3.5-turbo',
    });
    console.log("OpenAI------------"+JSON.stringify(chatCompletion))
    return NextResponse.json(chatCompletion);
  
}

