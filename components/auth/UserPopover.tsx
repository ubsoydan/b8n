"use client";

import { Dispatch, SetStateAction, ReactNode, useRef } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";

export default function UserPopover({
    children,
    content,
    align = "center",
    openPopover,
    setOpenPopover,
}: {
    children: ReactNode;
    content: ReactNode | string;
    align?: "center" | "start" | "end";
    openPopover: boolean;
    setOpenPopover: Dispatch<SetStateAction<boolean>>;
}) {
    return (
        <>
            <Popover
                open={openPopover}
                onOpenChange={(isOpen) => setOpenPopover(isOpen)}
            >
                <PopoverTrigger className="inline-flex" asChild>
                    {children}
                </PopoverTrigger>
                <PopoverContent
                    sideOffset={4}
                    align={align}
                    className="z-20 animate-slide-up-fade items-center rounded-md border border-gray-200 bg-white drop-shadow-lg"
                >
                    {content}
                </PopoverContent>
            </Popover>
        </>
    );
}
