import * as z from "zod";
import { likeComment } from "@/lib/comments";

const likeCommentSchema = z.object({
    commentId: z.string(),
});

export async function PATCH(req: Request) {
    try {
        const json = await req.json();
        const { commentId } = likeCommentSchema.parse(json);

        const { comment, err } = await likeComment({ commentId });
        console.log("res calisti");

        if (err)
            throw new Error(
                "Failed at liking the comment. See the API route",
                err
            );

        return new Response("ok", { status: 200 });
    } catch (err) {
        if (err instanceof z.ZodError) {
            return new Response(JSON.stringify(err.issues), { status: 418 });
        }
        return err;
    }
}
