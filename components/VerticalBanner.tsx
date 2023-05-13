import { Card, CardContent } from "./ui/card";

export default function VerticalBanner() {
    return (
        <div className="hidden mr-4 lg:mr-0 sm:block sm:sticky sm:top-28">
            <Card className="w-40 h-[38rem]">
                <CardContent></CardContent>
            </Card>
        </div>
    );
}
