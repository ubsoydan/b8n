import { ThumbsUp, ThumbsDown } from "lucide-react";
import { Button } from "components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "components/ui/card";

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
}

export default function CommentCard({
    content,
    date,
    commentor,
    likeCount,
    dislikeCount,
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
                <div
                    id="is-comment-helpful"
                    aria-label="Yorum yardımcı oldu mu?"
                    className="flex items-center"
                >
                    <p>{`(${likeCount})`}</p>
                    <Button variant="ghost">
                        <ThumbsUp className="mr-2 h-4 w-4" />
                        Faydalı
                    </Button>

                    <Button variant="ghost">
                        <ThumbsDown className="mr-2 h-4 w-4" />
                        Faydalı Değil
                    </Button>
                    <p>{`(${dislikeCount})`}</p>
                </div>
            </div>
        </div>
    );
}
