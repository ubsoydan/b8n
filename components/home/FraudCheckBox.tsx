import {
    Card,
    CardContent,
    CardTitle,
    CardHeader,
    CardDescription,
} from "components/ui/card";
import Link from "next/link";

export default function FraudCheckBox() {
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
                <Link href="/check">CHECK FRAUD</Link>
            </CardContent>
        </Card>
    );
}
