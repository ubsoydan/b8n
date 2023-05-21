import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import ChargeItem from "./ChargeItem";
import { db } from "@/lib/db";
import { Charge } from "@prisma/client";

export const revalidate = 10;

async function getCharges() {
    const res = await db.charge.findMany({
        select: { name: true, views: true },
        orderBy: { id: "desc" },
        take: 15,
    });
    return res;
}

export default async function MostRecentCharges() {
    const charges = await getCharges();
    return (
        <Card className="w-full h-auto my-6 md:my-0 lg:w-1/2">
            <CardHeader>
                <CardTitle className="text-xl text-[#1797ff]">
                    En son arananlar
                </CardTitle>
            </CardHeader>
            <CardContent>
                <ul>
                    {charges.map((charge: any) => {
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
