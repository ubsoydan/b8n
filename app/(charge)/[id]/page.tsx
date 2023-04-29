import AboutCharge from "components/charge-page/AboutCharge";
import AddComment from "components/charge-page/AddComment";
import ChargeCompanyInfo from "components/charge-page/ChargeCompanyInfo";
import ChargeHeader from "components/charge-page/ChargeHeader";
import CommentCard from "components/charge-page/CommentCard";
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
