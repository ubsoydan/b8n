"use client";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { Button } from "components/ui/button";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import UserLS from "@/lib/user";

interface CommentInteractionProps {
    likeCount: Number | null;
    dislikeCount: Number | null;
    commentId: String | null;
}

export default function CommentInteraction({
    likeCount,
    dislikeCount,
    commentId,
}: CommentInteractionProps) {
    const [likeOrDislike, setLikeOrDislike] = useState("");
    const [isVoted, setIsVoted] = useState(false);

    const router = useRouter();

    useEffect(() => {
        async function handleLikeOrDislike() {
            if (likeOrDislike !== "" && !isVoted) {
                // const userId = await UserLS();

                try {
                    const res = await fetch("/api/comments/interaction", {
                        method: "PATCH",
                        body: JSON.stringify({
                            id: commentId,
                            interaction: likeOrDislike,
                            // userId: userId,
                        }),
                    });

                    const final = await res.json();
                    console.log(
                        `a new ${likeOrDislike} is added for comment ${commentId}`,
                        final
                    );
                    setIsVoted(true);
                    // router.refresh();
                } catch (err) {
                    console.error(err);
                }
            }
        }
        handleLikeOrDislike();
    }, [likeOrDislike, isVoted, commentId, router]);

    function handleButtonClick(event: React.MouseEvent<HTMLButtonElement>) {
        const target = event.target as HTMLButtonElement;
        const interaction = target.value;

        if (isVoted) {
            return alert("zaten yapmisin bisiler");
        }

        setLikeOrDislike(interaction);
    }

    return (
        <div
            id="is-comment-helpful"
            aria-label="Yorum yardımcı oldu mu?"
            className="flex items-center"
        >
            <p className="text-sm">{`(${likeCount})`}</p>
            <Button
                variant="ghost"
                value="like"
                onClick={(e) => handleButtonClick(e)}
                size="sm"
            >
                {likeOrDislike === "like" ? (
                    <ThumbsUp fill="grey" className="h-4 w-4 md:mr-2" />
                ) : (
                    <ThumbsUp className="h-4 w-4 md:mr-2" />
                )}
                <span className="hidden md:block">Faydalı</span>
            </Button>

            <Button
                variant="ghost"
                value="dislike"
                onClick={(e) => handleButtonClick(e)}
                size="sm"
            >
                {likeOrDislike === "dislike" ? (
                    <ThumbsDown fill="grey" className="h-4 w-4 md:mr-2" />
                ) : (
                    <ThumbsDown className="h-4 w-4 md:mr-2" />
                )}
                <span className="hidden md:block">Faydalı Değil</span>
            </Button>
            <p className="text-sm">{`(${dislikeCount})`}</p>
        </div>
    );
}
