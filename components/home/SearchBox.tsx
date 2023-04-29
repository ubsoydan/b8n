import {
    Card,
    CardContent,
    CardTitle,
    CardHeader,
    CardDescription,
} from "components/ui/card";
import { Input } from "components/ui/input";
import { Button } from "components/ui/button";

export default function SearchBox() {
    return (
        <Card className="w-[48rem]">
            <CardHeader>
                <CardTitle>Sorgula</CardTitle>
                <CardDescription>
                    Banka dekontunuzda veya harcama detayinda yer alan
                    harcamanin ismini girerek bilinmeyen harcamanizi
                    ogrenebilirsiniz.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex">
                    <form action="/api/charges/[id]" method="get">
                        <Input
                            type="text"
                            placeholder="Bilinmeyen harcamanizi girin..."
                        />
                        <Button type="submit" className="ml-6 px-10">
                            Sorgula
                        </Button>
                    </form>
                </div>
            </CardContent>
        </Card>
    );
}
