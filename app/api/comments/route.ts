import { z } from "zod";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { validateEmail } from "@/lib/validation";

const commentCreateSchema = z.object({
    displayName: z.string(),
    email: z.string(),
    content: z.string(),
    chargeName: z.string(),
    commentType: z.string(),
});

export async function POST(req: Request) {
    try {
        const json = await req.json();
        const body = commentCreateSchema.parse(json);
        // const body = await req.json();

        const submittedEmail = body.email;
        const isValidEmail = validateEmail(submittedEmail);

        if (!isValidEmail) {
            return new Response("Invalid email!", { status: 400 });
        }

        const comment = await db.comment.create({
            data: {
                displayName: body.displayName,
                email: body.email,
                content: body.content,
                chargeName: body.chargeName,
                commentType: body.commentType,
            },
        });

        // const updatedCharge = await db.charge.update({
        //     where: { name: body.chargeName },
        //     data: {
        //         comments: {
        //             set: [comment, ...existingComments],
        //         },
        //     },
        // });

        return NextResponse.json({ body });
    } catch (err) {
        if (err instanceof z.ZodError) {
            return new Response(JSON.stringify(err.issues), { status: 422 });
        }
        console.log(err);
        return new Response(null, { status: 500 });
    }

    /**
     *
     */
}
