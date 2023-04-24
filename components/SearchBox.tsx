import Card from "./Card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function SearchBox() {
    return (
        <div className="w-[50rem]">
            <Card
                title="Sorgula"
                description="Bilmedigin bir harcamayi buradan sorgulayabilirsin"
                reverseOrder
            >
                <Input />
                <Button className="ml-6">Sorgula</Button>
            </Card>
        </div>
    );
}