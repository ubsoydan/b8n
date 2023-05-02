"use client";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "components/ui/select";
import { Input } from "components/ui/input";
import { Label } from "components/ui/label";
import { Button } from "components/ui/button";
import { Textarea } from "components/ui/textarea";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface AddCommentProps {
    charge: string;
}

export default function AddComment({ charge }: AddCommentProps) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [content, setContent] = useState("");
    const chargeName = charge;

    const router = useRouter();

    async function postComment(event: React.FormEvent) {
        event.preventDefault();

        const res = await fetch("/api/comment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                displayName: name,
                email: email,
                content: content,
                chargeName: chargeName,
            }),
        });

        const comment = await res.json();
        console.log("this is the post req from addcomment", comment);

        setName("");
        setEmail("");
        setContent("");
        // Refresh to see new comment
        router.refresh();
    }

    return (
        <form onSubmit={postComment} className="flex">
            <div className="flex flex-col">
                <div id="comment-type">
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Lutfen seciniz" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="providing-info">
                                    Bilgi/Tavsiye vermek istiyorum
                                </SelectItem>
                                <SelectItem value="requesting-info">
                                    Bilgi/Tavsiye almak istiyorum
                                </SelectItem>
                                <SelectItem value="reporting-possible-fraud">
                                    Dolandiricilik olabilecegini dusunuyorum
                                </SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className="grid w-full max-w-xs items-center gap-1.5">
                    <Label htmlFor="commentorName">Isminiz</Label>
                    <Input
                        type="text"
                        id="commentorName"
                        aria-placeholder="Isminizi giriniz..."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="grid w-full max-w-xs items-center gap-1.5">
                    <Label htmlFor="commentorEmail">E-posta</Label>
                    <Input
                        type="text"
                        id="commentorEmail"
                        aria-placeholder="E-posta adresinizi giriniz..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div aria-label="Yorumu gonder">
                    <Button type="submit">Yorumu gonder</Button>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="grid w-full gap-1.5">
                    <Label htmlFor="content">Yorumunuzu yaziniz...</Label>
                    <Textarea
                        placeholder="Type your message here."
                        id="content"
                        name="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                    <p className="text-sm text-muted-foreground">
                        Yorumunuzu aciklayici bir sekilde yaziniz. Varsa link
                        veya kaynaklari eklemeyi unutmayiniz.
                    </p>
                </div>
            </div>
        </form>
    );
}
