"use client";

import { buttonVariants } from "../ui/button";
import Link from "next/link";

type ChargeItemProps = {
    chargeName: string;
};

export default function ChargeItem({ chargeName }: ChargeItemProps) {
    const encodedChargeName = encodeURI(chargeName).replace(/%20/g, "-");
    return (
        <li>
            <Link
                href={`/${encodedChargeName}`}
                className={buttonVariants({ variant: "link" })}
            >
                {chargeName}
            </Link>
        </li>
    );
}
