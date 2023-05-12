"use client";

import { ChevronRight } from "lucide-react";
import { buttonVariants } from "../ui/button";
import Link from "next/link";

type ChargeItemProps = {
    chargeName: string;
};

export default function ChargeItem({ chargeName }: ChargeItemProps) {
    const encodedChargeName = encodeURI(chargeName).replace(/%20/g, "-");
    return (
        <li className="flex items-center">
            <ChevronRight size="18" />
            <Link
                href={`/${encodedChargeName}`}
                className={buttonVariants({ variant: "link" })}
            >
                {chargeName}
            </Link>
        </li>
    );
}
