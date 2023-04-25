import AboutCharge from "components/AboutCharge";
import ChargeCompanyInfo from "components/ChargeCompanyInfo";
import ChargeHeader from "components/ChargeHeader";
import CommentCard from "components/CommentCard";

export default function chargePage() {
    return (
        <div>
            <ChargeHeader />
            <AboutCharge />
            <CommentCard />
            <ChargeCompanyInfo />
        </div>
    );
}
