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
import { getCurrentUser } from "@/lib/session";

async function getCharge(chargeName: Charge["name"]) {
    const result = await db.charge.findFirst({
        where: {
            name: {
                equals: chargeName,
                mode: "insensitive",
            },
        },
        include: {
            comments: true,
        },
    });

    if (!result) {
        console.log("getcharge on charge page is causing problems");
    }
    // Increase view count +1 in database
    await db.charge.update({
        where: {
            name: result?.name,
        },
        data: {
            viewsCount: {
                increment: 1,
            },
        },
    });

    return result;
}

interface ChargePageProps {
    params: { id: string };
}

export default async function ChargePage({ params }: ChargePageProps) {
    const user = await getCurrentUser();

    const decodedChargeName = decodeURI(params.id.replace(/-/g, " "));

    const charge = await getCharge(decodedChargeName);

    if (!charge || charge === null) {
        // put an error page here later
        throw new Error("boyle bi kayit yok");
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
                                // likeCount={comment.likeCounter}
                                // dislikeCount={comment.dislikeCounter}
                                date={comment.createdAt}
                                commentType={comment.commentType}
                            />
                        );
                    })}
                    <Separator className="my-2 md:my-4 w-3/4" />

                    {/* @ts-expect-error Server Component */}
                    <AddComment charge={decodedChargeName} user={user} />
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
