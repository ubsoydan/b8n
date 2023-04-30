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
    const decodedChargeName = chargeName.replace(/-/g, " ");

    return await db.charge.findUnique({
        where: {
            name: decodedChargeName,
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
    const charge = await getCharge(params.id);

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
                    <AddComment />
                </div>
                <div>
                    <ChargeCompanyInfo
                        companyName={charge.companyName}
                        website={charge.website}
                        contactWeb={charge.contactWeb}
                        contactPhone={charge.contactPhone}
                    />
                    <VerticalBanner />
                </div>
            </div>
            <HorizontalBanner />
        </div>
    );
}
