"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/useScroll";

import { Button } from "components/ui/button";

export default function NavBar() {
    const isScrolled = useScroll(50);

    return (
        <>
            <div
                className={`fixed top-0 w-full z-30 transition-all ${
                    isScrolled
                        ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
                        : "bg-white/0"
                }`}
            >
                <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
                    <Link
                        href="/"
                        className="flex items-center font-display text-2xl"
                    >
                        {/* imagehere */}
                        <p>Bilinmeyen Harcama</p>
                    </Link>
                    <div>
                        <Button size="sm">Giris Yap</Button>
                    </div>
                </div>
            </div>
        </>
    );
}
