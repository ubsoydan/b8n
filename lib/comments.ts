import { db } from "./db";

interface interactionProps {
    commentId: string;
}

export async function likeComment({ commentId }: interactionProps) {
    try {
        const comment = await db.comment.update({
            where: {
                id: commentId,
            },
            data: {
                likes: {
                    increment: 1,
                },
            },
        });
        console.log("db calisti");
        return { comment };
    } catch (err) {
        return { err };
    }
}

export async function dislikeComment({ commentId }: interactionProps) {
    try {
        const comment = await db.comment.update({
            where: {
                id: commentId,
            },
            data: {
                likes: {
                    increment: 1,
                },
            },
        });
        console.log("db calisti");

        return { comment };
    } catch (err) {
        return { err };
    }
}
