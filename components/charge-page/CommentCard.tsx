import { Info, AlertTriangle } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "components/ui/card";
import CommentInteraction from "./CommentInteraction";

function formatTimestamp(timestamp: Date, locale: string): string {
    return timestamp.toLocaleDateString(locale, {
        year: "numeric",
        month: "numeric",
        day: "numeric",
    });
}
interface CommentCardProps {
    content: String | null;
    date: Date | null;
    commentor: String | null;
    likeCount: Number | null;
    dislikeCount: Number | null;
    id: String | null;
    commentType: String | null;
}

export default function CommentCard({
    content,
    date,
    commentor,
    likeCount,
    dislikeCount,
    id,
    commentType,
}: CommentCardProps) {
    // formats date object to string for readibility
    const formattedDate: string | null = date
        ? formatTimestamp(date, "tr-TR")
        : null;

    return (
        <div className="max-w-xl mx-auto">
            <Card>
                <CardContent>
                    <p className="whitespace-pre-wrap">{content} </p>
                </CardContent>
            </Card>
            <div className="flex justify-between">
                <div className="flex justify-start">
                    <div>
                        {commentType === "info" ? (
                            <Info color="blue" size="20" />
                        ) : (
                            <AlertTriangle color="red" size="20" />
                        )}
                    </div>
                    <div
                        id="comment-date-and-user"
                        aria-label="Yorum tarihi ve yapan"
                        className="mt-1 ml-2"
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
