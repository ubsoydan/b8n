import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";

import ChargeItem from "./ChargeItem";
import { db } from "@/lib/db";

async function getCharges() {
    const res = await db.charge.findMany({
        orderBy: { viewsCount: "desc" },
        take: 5,
    });
    return res;
}

export default async function MostPopularCharges() {
    const charges = await getCharges();

    return (
        <Card className="w-1/2 mr-4">
            <CardHeader>
                <CardTitle>En cok arananlar</CardTitle>
            </CardHeader>
            <CardContent>
                <ul>
                    {charges.map((charge) => {
                        return (
                            <ChargeItem
                                key={charge.name}
                                chargeName={charge.name}
                            />
                        );
                    })}
                </ul>
            </CardContent>
        </Card>
    );
}
