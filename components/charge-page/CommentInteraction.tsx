"use client";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
useRouter;
interface CommentInteractionProps {
    likes: number;
    dislikes: number;
    commentId: string;
}

export default function CommentInteraction({
    likes,
    dislikes,
    commentId,
}: CommentInteractionProps): JSX.Element {
    const [isLiked, setIsLiked] = useState<Boolean>(false);
    const [isDisliked, setIsDisliked] = useState<Boolean>(false);

    const router = useRouter();

    async function handleLike() {
        if (!isLiked && !isDisliked) {
            try {
                const req = await fetch(`/api/comments/${commentId}/like`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        commentId: commentId,
                    }),
                });
                // const final = await req.json();

                setIsLiked(true);
                console.log("req calisti");
                router.refresh();

                return new Response("okeyto", { status: 200 });
            } catch (err) {
                return new Response(
                    "Error at handleLike function inside CommentInteraction",
                    { status: 400 }
                );
            }
        }
    }

    async function handleDislike() {
        if (!isLiked && !isDisliked) {
            try {
                const req = await fetch(`/api/comments/${commentId}/dislike`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        commentId: commentId,
                    }),
                });
                // const final = await req.json();

                setIsDisliked(true);
                console.log("req calisti");
                router.refresh();

                return new Response("okeyto", { status: 200 });
            } catch (err) {
                return new Response(
                    "Error at handleDislike function inside CommentInteraction",
                    { status: 400 }
                );
            }
        }
    }

    return (
        <div
            id="is-comment-helpful"
            aria-label="Yorum yardımcı oldu mu?"
            className="flex items-center"
        >
            <p className="text-sm">{`(${likes})`}</p>
            <Button
                variant="ghost"
                value="like"
                onClick={() => handleLike()}
                size="sm"
            >
                {isLiked ? (
                    <ThumbsUp fill="#2edce5" className="h-4 w-4 md:mr-2" />
                ) : (
                    <ThumbsUp className="h-4 w-4 md:mr-2" />
                )}
                <span className="hidden md:block">Faydalı</span>
            </Button>

            <Button
                variant="ghost"
                value="dislike"
                onClick={() => handleDislike()}
                size="sm"
            >
                {isDisliked ? (
                    <ThumbsDown fill="#2edce5" className="h-4 w-4 md:mr-2" />
                ) : (
                    <ThumbsDown className="h-4 w-4 md:mr-2" />
                )}
                <span className="hidden md:block">Faydalı Değil</span>
            </Button>
            <p className="text-sm">{`(${dislikes})`}</p>
        </div>
    );
}
