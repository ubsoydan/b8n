import { ThumbsUp, ThumbsDown } from "lucide-react";
import { Button } from "./ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";

export default function CommentCard() {
    return (
        <div className="relative max-w-xl mx-auto">
            <Card>
                <CardContent>
                    <p className="whitespace-pre-wrap">
                        birisi yorum yazdiginda yazilan yorum aha da boyle
                        gorunecek hatta ve hatta daha uzun oldugunda soyle
                        gorunecek hatta boyle de gorunebilir{" "}
                    </p>
                </CardContent>
            </Card>
            <div className="flex justify-between">
                <div
                    id="comment-date-and-user"
                    aria-label="Yorum tarihi ve yapan"
                    className="mt-1 ml-2"
                >
                    <p>Su tarihte su kisi tarafindan</p>
                </div>
                <div
                    id="is-comment-helpful"
                    aria-label="Yorum yardımcı oldu mu?"
                    className="flex items-center"
                >
                    <p>(12)</p>
                    <Button variant="ghost">
                        <ThumbsUp className="mr-2 h-4 w-4" />
                        Faydalı
                    </Button>

                    <Button variant="ghost">
                        <ThumbsDown className="mr-2 h-4 w-4" />
                        Faydalı Değil
                    </Button>
                    <p>(-5)</p>
                </div>
            </div>
        </div>
    );
}
