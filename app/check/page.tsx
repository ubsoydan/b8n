// @ts-nocheck
import { db } from "@/lib/db";
import FraudCheckForm from "components/home/FraudCheckForm";
import { Badge } from "components/ui/badge";
import {
    Card,
    CardContent,
    CardTitle,
    CardHeader,
    CardDescription,
} from "components/ui/card";
import { Separator } from "components/ui/separator";
import Link from "next/link";

async function checkCommentsForFraud(
    chargeName: string
): Promise<number | null> {
    const charge = await db.charge.findFirst({
        where: {
            name: {
                equals: chargeName,
                mode: "insensitive",
            },
        },
        include: { comments: true },
    });

    if (charge) {
        const fraudCount = charge.comments.filter(
            (comment) => comment.commentType === "fraud"
        ).length;
        console.log(
            "CHECKING COMMENTS FOR FRAUD, result is",
            fraudCount,
            typeof fraudCount
        );
        return fraudCount;
    }

    return null;
}

// @ts-ignore
async function showFraudRisk(reportedFraudCount: number | null) {
    if (reportedFraudCount === null) {
        console.log("cant run showFraudRisk bc its null");
        return null;
    }

    if (reportedFraudCount === 0) {
        console.log("badge low");
        return { color: "low", level: "DÜŞÜK" };
    }

    if (reportedFraudCount >= 1 && reportedFraudCount < 4) {
        console.log("badge med");

        return { color: "medium", level: "ORTA" };
    } else if (reportedFraudCount >= 4) {
        console.log("badge high");

        return { color: "high", level: "YÜKSEK" };
    }
}

async function fetchChargeURL(chargeName: string): string {
    const charge = await db.charge.findFirst({
        where: {
            name: {
                equals: chargeName,
                mode: "insensitive",
            },
        },
    });

    const url = charge?.name;
    const correctUrl = url.replace(/ /g, "-");
    return correctUrl;
}

export default async function CheckPage({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined | null };
}) {
    // Get the charge that is checked from URL
    let checkedCharge = searchParams.q;

    // URL to redirect to, comes with dashes frm FraudCheckForm

    let checkedChargeUrl;
    let fraudCount;
    let showRisk;

    if (typeof checkedCharge === "string") {
        // Format the charge name to be representable
        checkedCharge = checkedCharge.replace(/-/g, " ");
        fraudCount = await checkCommentsForFraud(checkedCharge);
        showRisk = await showFraudRisk(fraudCount);
        checkedChargeUrl = await fetchChargeURL(checkedCharge);
        console.log(checkedChargeUrl);
    } else {
        console.log("checkedCharge type is not supported! It must be a string");
    }

    return (
        <>
            <h1>CHECK PAGE</h1>
            <Card className="w-[48rem]">
                <CardHeader>
                    <CardTitle>Dolandiricilik Ihtimalini Ogren</CardTitle>
                    <CardDescription>
                        ...fdagesgrwg Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit. Aut id maxime nobis laboriosam
                        deleniti rerum omnis? Obcaecati blanditiis, quae ab
                        consectetur dolorum fugiat corporis iste, magni vero
                        neque adipisci dicta?
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FraudCheckForm />
                </CardContent>
            </Card>
            {checkedCharge ? (
                <Card className="w-[48rem]">
                    <CardHeader>
                        <CardTitle>SONUÇLAR</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex ">
                            <div className="flex flex-col">
                                <h3>Harcama adi</h3>
                                <Separator />
                                <Link href={`/${checkedChargeUrl}`}>
                                    {checkedCharge}
                                </Link>
                            </div>
                            <div className="flex flex-col ml-10">
                                <h3>Risk Seviyesi</h3>
                                <Separator />

                                <Badge variant={showRisk?.color}>
                                    {showRisk?.level}
                                </Badge>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ) : null}
        </>
    );
}
