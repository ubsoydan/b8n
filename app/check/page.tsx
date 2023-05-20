// @ts-nocheck
import { db } from "@/lib/db";
import FraudCheckForm from "@/components/home/FraudCheckForm";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardTitle,
    CardHeader,
    CardDescription,
} from "components/ui/card";
import { Separator } from "components/ui/separator";
import Link from "next/link";
import { Metadata } from "next";
import {
    Accordion,
    AccordionItem,
    AccordionContent,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Sorgula | Bilinmeyen Harcama",
    description:
        "Kartınızda ne olduğunu anlamadığınız bir ödeme mi gördünüz? Ödemeniz veya harcamanız hakkında bilgi almak için buradan sorgulayın.",
    keywords: [
        "bilinmeyen",
        "izinsiz",
        "habersiz",
        "harcama",
        "ödeme",
        "itiraz",
        "kart",
        "banka",
        "kredi",
        "öğren",
        "sorgula",
        "bilgi",
        "nedir",
        "hesap",
        "para",
        "çekilmiş",
        "finans",
        "ekonomi",
    ],
};

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
            <h3 className="text-2xl mx-4 text-center font-semibold md:text-3xl lg:text-4xl ">
                GÜVENİLİRLİK ÖLÇÜMÜ
            </h3>

            <Card className="mx-4 lg:w-[48rem]">
                <CardHeader>
                    <CardTitle>
                        Harcamanın güvenilirliğini ölçerek dolandırıcılık
                        ihtimalini öğrenin.
                    </CardTitle>
                    <CardDescription>
                        Harcama hakkında daha detaylı bilgi almak için{" "}
                        <strong>
                            banka kayıtlarında görünen harcama ismini girin.
                        </strong>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Accordion type="single" collapsible className="mb-4">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                Harcama ismini nereden öğrenebilirim?
                            </AccordionTrigger>
                            <AccordionContent>
                                Bankacılık uygulamanızdan mevzubahis harcamanın
                                dekontuna veya detayına ulaşın. Harcama ismi
                                &quot;İŞLEM NO&quot; veya &quot;ÜYE İŞYERİ&quot;
                                olarak görünecektir.
                                <Image
                                    src="/how-to.gif"
                                    width={360}
                                    height={240}
                                    alt="harcama ismini bul"
                                />
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <FraudCheckForm />
                </CardContent>
            </Card>
            {checkedCharge ? (
                <Card className="mt-6 w-5/6 md:w-[44rem] lg:w-[48rem]">
                    <CardHeader>
                        <CardTitle className=" text-cyan-700">
                            SONUÇLAR
                        </CardTitle>
                        <CardDescription>
                            Harcama ismine tıklayarak detaylara ulaşabilirsiniz.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex">
                            <div className="flex flex-col justify-start w-1/2">
                                <h3 className="font-medium text-cyan-700">
                                    Harcama adi
                                </h3>
                                <Separator className="w-5/6" />
                                <Link
                                    href={`/${checkedChargeUrl}`}
                                    className="mt-2 ml-2"
                                >
                                    {checkedCharge}
                                </Link>
                            </div>
                            <div className="flex flex-col justify-start w-1/2 lg:ml-10">
                                <h3 className="font-medium text-cyan-700">
                                    Risk Seviyesi
                                </h3>
                                <Separator className="w-5/6" />

                                <Badge
                                    variant={showRisk?.color}
                                    className="mt-2 ml-2 max-w-fit"
                                >
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
