"use client";

import { ChevronRight } from "lucide-react";
import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ChargeItemProps = {
    chargeName: string;
};

export default function ChargeItem({ chargeName }: ChargeItemProps) {
    const encodedChargeName = encodeURIComponent(chargeName);
    return (
        <li className="flex items-center">
            <ChevronRight size="18" color="#73a1d5" />
            <Link
                href={`/${encodedChargeName}`}
                className={cn(
                    buttonVariants({ variant: "link" }),
                    "text-muted-foreground text-base font-semibold "
                )}
            >
                {chargeName}
            </Link>
        </li>
    );
}
