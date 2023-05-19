import { db } from "@/lib/db";
import * as z from "zod";

const updateCommentInteraction = z.object({
    id: z.string(),
    interaction: z.string(),
    // userId: z.string().optional(),
});

export async function PATCH(req: Request) {
    try {
        const json = await req.json();
        const body = updateCommentInteraction.parse(json);

        // const user = await db.user.findUnique({ where: { id: body.userId } });

        switch (body.interaction) {
            case "like":
                const updateLike = await db.comment.update({
                    where: {
                        id: body.id,
                    },
                    data: {
                        // likedBy: {
                        //     connect: {
                        //         id: user?.id,
                        //     },
                        // },
                        likes: {
                            increment: 1,
                        },
                    },
                });
                return new Response(JSON.stringify(updateLike));

            case "dislike":
                const updateDislike = await db.comment.update({
                    where: {
                        id: body.id,
                    },
                    data: {
                        // dislikedBy: {
                        //     connect: {
                        //         id: user?.id,
                        //     },
                        // },
                        dislikes: {
                            increment: 1,
                        },
                    },
                });
                return new Response(JSON.stringify(updateDislike));

            default:
                return new Response(
                    "Invalid interaction type, must be either like or dislike",
                    { status: 400 }
                );
        }
    } catch (err) {
        if (err instanceof z.ZodError) {
            return new Response(JSON.stringify(err.issues), { status: 422 });
        }

        return new Response(null, { status: 500 });
    }
}
