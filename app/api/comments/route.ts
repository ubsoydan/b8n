import * as z from "zod";
import { db } from "@/lib/db";

const commentCreateSchema = z.object({
    displayName: z.string(),
    email: z.string(),
    content: z.string(),
    chargeName: z.string(),
});

export async function POST(req: Request) {
    try {
        const json = await req.json();
        const body = commentCreateSchema.parse(json);

        const comment = await db.comment.create({
            data: {
                displayName: body.displayName,
                email: body.email,
                content: body.content,
                chargeName: body.chargeName,
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

        return new Response(JSON.stringify(comment));
    } catch (err) {
        if (err instanceof z.ZodError) {
            return new Response(JSON.stringify(err.issues), { status: 422 });
        }

        return new Response(null, { status: 500 });
    }

    /**
     *
     */
}
