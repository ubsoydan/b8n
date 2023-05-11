import { Card, CardContent } from "./ui/card";

export default function VerticalBanner() {
    return (
        <div className="sticky top-28  overflow-auto">
            <Card className="w-40 h-[38rem]">
                <CardContent></CardContent>
            </Card>
        </div>
    );
}
