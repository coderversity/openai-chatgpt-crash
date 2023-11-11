import openai, { IMAGE_MODEL } from "@/utils/openai";

import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { prompt } = await request.json();

        const response = await openai.createImage({
            prompt,
            n: 4,
            size: "512x512",
        });

        const imageUrls = response.data.data?.map(image => image.url);
        return NextResponse.json({ data: imageUrls });
    } catch (err) {
        if (err.response) {
            return NextResponse.json({ error: err.response.data.error.message }, { status: err.response.status });
        } else {
            return NextResponse.json({ error: err.message }, { status: 500 });
        }
    }
}