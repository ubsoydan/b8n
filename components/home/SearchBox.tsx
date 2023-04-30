import {
    Card,
    CardContent,
    CardTitle,
    CardHeader,
    CardDescription,
} from "components/ui/card";
import SearchForm from "./SearchForm";
SearchForm;

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
                <SearchForm />
            </CardContent>
        </Card>
    );
}
