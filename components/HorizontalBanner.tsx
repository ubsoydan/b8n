import { Card, CardContent } from "./ui/card";

export default function HorizontalBanner() {
    return (
        <div className="hidden lg:block">
            <Card className="h-72 w-[72rem]">
                <CardContent></CardContent>
            </Card>
        </div>
    );
}
