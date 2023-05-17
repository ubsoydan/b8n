"use client";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useRouter } from "next/navigation";
// import UserLS from "@/lib/user";
interface AddCommentProps {
    charge: string;
    user: object;
}

export default function AddComment({ charge, user }: AddCommentProps) {
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    const [content, setContent] = useState("");
    const [commentType, setCommentType] = useState("info");
    const chargeName = charge;
    const userEmail = user?.email;
    const userName = user?.name;

    const router = useRouter();

    async function postComment(event: React.FormEvent) {
        event.preventDefault();
        // const user = await UserLS();

        if (user) {
            const res = await fetch("/api/comments", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    // displayName: name,
                    // email: email,
                    content: content,
                    chargeName: chargeName,
                    userEmail: userEmail,
                    displayName: userName,
                    // user: user,
                    commentType: commentType,
                }),
            });

            const comment = await res.json();
            console.log("this is the post req from addcomment", comment);

            // setName("");
            // setEmail("");
            setContent("");
            // Refresh to see new comment
            router.refresh();
        }
    }

    return (
        <>
            <h3 className="text-lg md:text-xl font-semibold ml-4 mb-4 md:mb-8">
                Yorum Yapın
            </h3>
            <form onSubmit={postComment} className="ml-6 md:flex" id="comment">
                <div className="flex flex-col">
                    {/* <div className="grid w-full max-w-xs items-center gap-1.5 my-2">
                        <Label htmlFor="commentorName">İsminiz</Label>
                        <Input
                            type="text"
                            id="commentorName"
                            aria-placeholder="İsminizi giriniz..."
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="grid w-full max-w-xs items-center gap-1.5 my-2">
                        <Label htmlFor="commentorEmail">
                            E-posta adresiniz
                        </Label>
                        <Input
                            type="text"
                            id="commentorEmail"
                            aria-placeholder="E-posta adresinizi giriniz..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div> */}
                    <div id="comment-type" className="my-2">
                        <Label>Yorumunuz ne hakkında?</Label>

                        <Select
                            onValueChange={(value) => setCommentType(value)}
                            value={commentType}
                            required
                        >
                            <SelectTrigger className="w-[180px]">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="info">
                                        Bilgi / Tavsiye
                                    </SelectItem>
                                    <SelectItem value="fraud">
                                        Şüpheli Harcama
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="grid w-[20rem] lg:w-[32rem] gap-1.5 my-4 md:m-4">
                        <Label htmlFor="content">Yorum</Label>
                        <Textarea
                            placeholder="Yorumunuzu yazınız..."
                            id="content"
                            name="content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required
                        />
                        <p className="text-sm text-muted-foreground">
                            Yorumunuzu açıklayıcı bir şekilde yazınız. Varsa
                            link eklemeyi unutmayınız.
                        </p>
                    </div>
                </div>
            </form>
            <Button
                type="submit"
                form="comment"
                className="my-4 ml-4 w-1/2 md:w-1/3"
            >
                YORUMU GÖNDER
            </Button>
        </>
    );
}
