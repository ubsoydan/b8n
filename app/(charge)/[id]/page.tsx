import { db } from "@/lib/db";
import { Charge } from "@prisma/client";
import AboutCharge from "@/components/charge-page/AboutCharge";
import AddComment from "@/components/charge-page/AddComment";
import ChargeCompanyInfo from "@/components/charge-page/ChargeCompanyInfo";
import ChargeHeader from "@/components/charge-page/ChargeHeader";
import CommentCard from "@/components/charge-page/CommentCard";
import HorizontalBanner from "@/components/HorizontalBanner";
import VerticalBanner from "@/components/VerticalBanner";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";

async function getCharge(chargeName: Charge["name"]) {
    // Get relevant charge -case insensitive-
    const result = await db.charge.findFirst({
        where: {
            name: {
                equals: chargeName,
                mode: "insensitive",
            },
        },
        // Get comments by like count
        include: {
            comments: { orderBy: { likes: "desc" } },
        },
    });

    if (!result) {
        throw new Error(
            "Failed at fetching that charge! See getCharge at dynamic page"
        );
    }
    // Increase view count +1 in database
    await db.charge.update({
        where: {
            name: result?.name,
        },
        data: {
            views: {
                increment: 1,
            },
        },
    });

    return result;
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
    // Replace dashes that are found in Url
    const decodedChargeName = decodeURI(params.id.replace(/-/g, " "));
    // Charge gets parsed as keywords for SEO
    const processKeywords = decodedChargeName.split(" ");

    const charge = await getCharge(decodedChargeName);
    return {
        title: charge?.name,
        description: `${charge?.name} adlı kart ödemesi veya harcaması hakkında bilgi alın. Sizden habersiz kartınızdan harcama mı yapılmış? Harcama itirazında bulunmak mı istiyorsunuz? Ne ödemesi olduğunu anlamadınız mı?`,
        keywords: [
            ...processKeywords,
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
}

interface ChargePageProps {
    params: { id: string };
}

export default async function ChargePage({ params }: ChargePageProps) {
    const decodedChargeName = decodeURI(params.id.replace(/-/g, " "));

    const charge = await getCharge(decodedChargeName);

    if (!charge) {
        throw new Error("No such charge!");
    }

    const comments = charge.comments;

    return (
        <div>
            <ChargeHeader header={charge.name} />
            <Separator className="my-2 w-3/4" />
            <HorizontalBanner />
            <div className="md:flex">
                <div>
                    <AboutCharge description={charge.description} />
                    <div className="block md:hidden">
                        {charge.companyName ? (
                            <ChargeCompanyInfo
                                companyname={charge.companyName}
                                website={charge.website}
                                contactweb={charge.contactWeb}
                                contactphone={charge.contactPhone}
                            />
                        ) : null}
                    </div>

                    <Separator className="my-2 w-3/4" />
                    <h3 className="text-lg md:text-xl font-semibold my-4 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
                        Yorumlar
                    </h3>
                    {comments.map((comment) => {
                        return (
                            <CommentCard
                                key={comment.id}
                                id={comment.id}
                                content={comment.content}
                                commentor={comment.displayName}
                                likes={comment.likes}
                                dislikes={comment.dislikes}
                                date={comment.createdAt}
                                commentType={comment.commentType}
                            />
                        );
                    })}
                    <Separator className="my-2 md:my-4 w-3/4" />
                    <AddComment charge={decodedChargeName} />
                </div>
                <div className="hidden md:block">
                    {charge.companyName ? (
                        <ChargeCompanyInfo
                            companyname={charge.companyName}
                            website={charge.website}
                            contactweb={charge.contactWeb}
                            contactphone={charge.contactPhone}
                        />
                    ) : null}
                    <VerticalBanner />
                </div>
            </div>
            <HorizontalBanner />
        </div>
    );
}
