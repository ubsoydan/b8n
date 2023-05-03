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
}

export default function CommentCard({
    content,
    date,
    commentor,
    likeCount,
    dislikeCount,
    id,
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
                <div
                    id="comment-date-and-user"
                    aria-label="Yorum tarihi ve yapan"
                    className="mt-1 ml-2"
                >
                    <p>{`${commentor} - ${formattedDate}`}</p>
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
