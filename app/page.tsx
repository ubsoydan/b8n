import Image from "next/image";
import { Inter } from "next/font/google";

import SearchBox from "components/home/SearchBox";
import VerticalBanner from "components/VerticalBanner";
import MostPopularCharges from "components/home/MostPopularCharges";
import MostRecentCharges from "components/home/MostRecentCharges";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <div className="flex">
            <div className="flex-col px-10">
                <div>
                    <SearchBox />
                </div>
                <div className="flex py-10">
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
