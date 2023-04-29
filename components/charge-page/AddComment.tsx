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

export default function AddComment() {
    return (
        <div className="flex">
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
                <div
                    id="commentor-name"
                    className="grid w-full max-w-xs items-center gap-1.5"
                >
                    <Label htmlFor="commentor-name">Isminiz</Label>
                    <Input
                        type="text"
                        id="commentor-name"
                        aria-placeholder="Isminizi giriniz..."
                    />
                </div>
                <div
                    id="commentor-email"
                    className="grid w-full max-w-xs items-center gap-1.5"
                >
                    <Label htmlFor="commentor-email">E-posta</Label>
                    <Input
                        type="text"
                        id="commentor-email"
                        aria-placeholder="E-posta adresinizi giriniz..."
                    />
                </div>
                <div aria-label="Yorumu gonder">
                    <Button>Yorumu gonder</Button>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="grid w-full gap-1.5">
                    <Label htmlFor="message-2">Yorumunuzu yaziniz...</Label>
                    <Textarea
                        placeholder="Type your message here."
                        id="message-2"
                    />
                    <p className="text-sm text-muted-foreground">
                        Yorumunuzu aciklayici bir sekilde yaziniz. Varsa link
                        veya kaynaklari eklemeyi unutmayiniz.
                    </p>
                </div>
            </div>
        </div>
    );
}
