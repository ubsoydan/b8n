import FraudCheckBox from "@/components/home/FraudCheckBox";
import VerticalBanner from "@/components/VerticalBanner";
import MostPopularCharges from "@/components/home/MostPopularCharges";
import MostRecentCharges from "@/components/home/MostRecentCharges";

export default function Home() {
    return (
        <div className="flex">
            <div className="flex-col px-10">
                <div>
                    <FraudCheckBox />
                </div>
                <div className="m-auto md:flex py-10">
                    <MostPopularCharges />
                    <MostRecentCharges />
                </div>
            </div>
            <div>
                <VerticalBanner />
            </div>
        </div>
    );
}
