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

    // non-null assertion for description prop
    const description: string = charge.description!;

    return (
        <div>
            <ChargeHeader header={charge.name} />
            <HorizontalBanner />
            <div className="flex">
                <div>
                    <AboutCharge description={description} />
                    <CommentCard />
                    <CommentCard />
                    <CommentCard />
                    <CommentCard />
                    <CommentCard />
                    <CommentCard />
                    <CommentCard />
                    <CommentCard />
                    <CommentCard />
                    <CommentCard />
                    <CommentCard />
                    <CommentCard />

                    <AddComment />
                </div>
                <div>
                    <ChargeCompanyInfo />
                    <VerticalBanner />
                </div>
            </div>
            <HorizontalBanner />
        </div>
    );
}
