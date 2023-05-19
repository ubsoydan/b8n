import { Info, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import CommentInteraction from "./CommentInteraction";
import formatTimestamp from "@/lib/format-timestamp";
interface CommentCardProps {
    content: string;
    date: Date;
    commentor: string;
    likes: number;
    dislikes: number;
    id: string;
    commentType: string;
}

export default function CommentCard({
    content,
    date,
    commentor,
    likes,
    dislikes,
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
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <AlertTriangle color="red" size="20" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Kullanıcı harcamayı şüpheli buldu</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
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
                    likes={likes}
                    dislikes={dislikes}
                />
            </div>
        </div>
    );
}
