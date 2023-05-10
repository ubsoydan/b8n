"use client";

import Link from "next/link";
import useScroll from "@/lib/hooks/useScroll";
import SearchBox from "./SearchBox";
import Image from "next/image";
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
                <div className="flex items-center justify-around">
                    <div className="flex h-16 max-w-screen-lg">
                        <Image
                            src="/logo.png"
                            alt="Bilinmeyen Harcama Logo"
                            width={64}
                            height={64}
                        />
                        <Link
                            href="/"
                            className="flex items-center font-display text-2xl ml-4"
                        >
                            <p>Bilinmeyen Harcama</p>
                        </Link>
                    </div>
                    <div className="flex items-center">
                        {/* <SearchBox /> */}
                        <p>Ara: </p>
                        <div className="gcse-searchbox-only"></div>
                    </div>
                </div>
            </div>
        </>
    );
}
