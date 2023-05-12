import { db } from "@/lib/db";
import ChargeItem from "./ChargeItem";
import { Card, CardHeader, CardTitle, CardContent } from "components/ui/card";

async function getCharges() {
    const res = await db.charge.findMany({
        orderBy: { viewsCount: "desc" },
        take: 10,
    });
    return res;
}

async function MostPopularCharges() {
    const charges = await getCharges();

    return (
        <Card className="w-full h-auto lg:w-1/2 mr-4">
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

export default MostPopularCharges;
