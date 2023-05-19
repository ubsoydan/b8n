import * as z from "zod";
import { dislikeComment } from "@/lib/comments";

const dislikeCommentSchema = z.object({
    commentId: z.string(),
});

export async function PATCH(req: Request) {
    try {
        const json = await req.json();
        const { commentId } = dislikeCommentSchema.parse(json);

        const { comment, err } = await dislikeComment({ commentId });
        console.log("res calisti");

        if (err)
            throw new Error(
                "Failed at disliking the comment! See the API route",
                err
            );

        return new Response(null, { status: 200 });
    } catch (err) {
        if (err instanceof z.ZodError) {
            return new Response(JSON.stringify(err.issues), { status: 418 });
        }
        return err;
    }
}
