import Image from "next/image";
import { Inter } from "next/font/google";

import FraudCheckBox from "components/home/FraudCheckBox";
import VerticalBanner from "components/VerticalBanner";
import MostPopularCharges from "components/home/MostPopularCharges";
import MostRecentCharges from "components/home/MostRecentCharges";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <div className="flex">
            <div className="flex-col px-10">
                <div>
                    <FraudCheckBox />
                </div>
                <div className="m-auto md:flex py-10">
                    {/* @ts-expect-error Server Component */}
                    <MostPopularCharges />
                    {/* @ts-expect-error Server Component */}
                    <MostRecentCharges />
                </div>
            </div>
            <div>
                <VerticalBanner />
            </div>
        </div>
    );
}
