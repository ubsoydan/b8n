import { db } from "@/lib/db";
import { Charge } from "@prisma/client";
import AboutCharge from "components/charge-page/AboutCharge";
import AddComment from "components/charge-page/AddComment";
import ChargeCompanyInfo from "components/charge-page/ChargeCompanyInfo";
import ChargeHeader from "components/charge-page/ChargeHeader";
import CommentCard from "components/charge-page/CommentCard";
import HorizontalBanner from "components/HorizontalBanner";
import VerticalBanner from "components/VerticalBanner";

async function getCharge(chargeName: Charge["name"]) {
    return await db.charge.findUnique({
        where: {
            name: chargeName,
        },
        include: {
            comments: true,
        },
    });
}

interface ChargePageProps {
    params: { id: string };
}

export default async function ChargePage({ params }: ChargePageProps) {
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
            <HorizontalBanner />
            <div className="flex">
                <div>
                    <AboutCharge description={charge.description} />
                    {comments.map((comment) => {
                        return (
                            <CommentCard
                                key={comment.id}
                                content={comment.content}
                                commentor={comment.displayName}
                                likeCount={comment.likeCounter}
                                dislikeCount={comment.dislikeCounter}
                                date={comment.createdAt}
                            />
                        );
                    })}
                    <AddComment charge={decodedChargeName} />
                </div>
                <div>
                    <ChargeCompanyInfo
                        companyname={charge.companyName}
                        website={charge.website}
                        contactweb={charge.contactWeb}
                        contactphone={charge.contactPhone}
                    />
                    <VerticalBanner />
                </div>
            </div>
            <HorizontalBanner />
        </div>
    );
}
