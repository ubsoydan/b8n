import AboutCharge from "components/AboutCharge";
import AddComment from "components/AddComment";
import ChargeCompanyInfo from "components/ChargeCompanyInfo";
import ChargeHeader from "components/ChargeHeader";
import CommentCard from "components/CommentCard";
import HorizontalBanner from "components/HorizontalBanner";
import VerticalBanner from "components/VerticalBanner";

export default function chargePage() {
    return (
        <div>
            <ChargeHeader />
            <HorizontalBanner />
            <div className="flex">
                <div>
                    <AboutCharge />
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
