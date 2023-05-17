import { Info, AlertTriangle } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import CommentInteraction from "./CommentInteraction";

function formatTimestamp(timestamp: Date, locale: string): string {
    return timestamp.toLocaleDateString(locale, {
        year: "numeric",
        month: "numeric",
        day: "numeric",
    });
}
interface CommentCardProps {
    content: string | null;
    date: Date | null;
    commentor: string | null;
    // likeCount: number | null;
    // dislikeCount: number | null;
    id: string | null;
    commentType: string | null;
}

export default function CommentCard({
    content,
    date,
    commentor,
    // likeCount,
    // dislikeCount,
    id,
    commentType,
}: CommentCardProps) {
    // formats date object to string for readibility
    const formattedDate: string | null = date
        ? formatTimestamp(date, "tr-TR")
        : null;

    return (
        <div className="max-w-xl my-4 mx-8">
            <Card>
                <CardContent className="pb-0 py-2 md:py-4">
                    <p className="whitespace-pre-wrap">{content} </p>
                </CardContent>
            </Card>
            <div className="flex justify-between">
                <div className="flex justify-start">
                    <div className="mt-1 ml-2 md:mt-2">
                        {commentType === "info" ? (
                            <Info color="blue" size="20" />
                        ) : (
                            <AlertTriangle color="red" size="20" />
                        )}
                    </div>
                    <div
                        id="comment-date-and-user"
                        aria-label="Yorum tarihi ve yapan"
                        className="mt-1 ml-2 text-xs text-gray-500 md:text-base"
                    >
                        <p>{`${commentor} - ${formattedDate}`}</p>
                    </div>
                </div>
                <CommentInteraction
                    commentId={id}
                    likeCount={likeCount}
                    dislikeCount={dislikeCount}
                />
            </div>
        </div>
    );
}
