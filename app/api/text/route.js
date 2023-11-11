import openai, { TEXT_MODEL } from "@/utils/openai";

import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { prompt } = await request.json();

        const response = await openai.createChatCompletion({
            model: TEXT_MODEL,
            temperature: 0.7,
            messages: [
                {
                    role: 'system',
                    content: 'You are a content creation tool that generates text and images from user input.'
                },
                {
                    role: 'user',
                    content: prompt
                }
            ]
        });

        const text = response.data.choices[0].message.content.trim();
        return NextResponse.json({ data: text });
    } catch (err) {
        if (err.response) {
            return NextResponse.json({ error: err.response.data.error.message }, { status: err.response.status });
        } else {
            return NextResponse.json({ error: err.message }, { status: 500 });
        }
    }
}