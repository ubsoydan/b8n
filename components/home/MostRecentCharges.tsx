import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card";

import ChargeItem from "./ChargeItem";
import { db } from "@/lib/db";

async function getCharges() {
    const res = await db.charge.findMany({
        orderBy: { id: "desc" },
        take: 10,
    });
    return res;
}

export default async function MostRecentCharges() {
    const charges = await getCharges();
    return (
        <Card className="w-full h-auto my-6 md:my-0 lg:w-1/2">
            <CardHeader>
                <CardTitle>En son arananlar</CardTitle>
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
