"use client";

import Link from "next/link";
import useScroll from "@/lib/hooks/useScroll";
import Image from "next/image";
import { Josefin_Sans } from "next/font/google";
const font_thin = Josefin_Sans({
    subsets: ["latin"],
    weight: "300",
    style: ["normal"],
});
const font_bold = Josefin_Sans({
    subsets: ["latin"],
    weight: "400",
    style: ["normal"],
});
// import { Session } from "next-auth";
// import UserDropdown from "../auth/Dropdown";
// { session }: { session: Session | null } as func arg

export default function NavBar() {
    const isScrolled = useScroll(50);

    return (
        <nav
            className={`fixed top-0 w-full z-30 transition-all ${
                isScrolled
                    ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
                    : "bg-white/0"
            }`}
        >
            <div className="md:flex items-center justify-around">
                <div className="flex h-16 max-w-screen-sm">
                    <Link
                        href="/"
                        className="flex items-center font-display text-2xl ml-4"
                    >
                        <Image
                            src="/logo.png"
                            alt="Bilinmeyen Harcama Logo"
                            width={64}
                            height={64}
                        />
                        <p className="text-4xl text-[#387bda] ml-1 mt-2">
                            <span className={font_thin.className}>
                                Bilinmeyen
                            </span>
                            <span className={font_bold.className}>Harcama</span>
                        </p>
                    </Link>
                </div>
                <div className="mx-4 md:w-1/3 lg:w-1/4 xl:w-1/5">
                    {/* <SearchBox /> search component  */}
                    <div className="gcse-searchbox-only"></div>
                </div>
                {/* DISABLED THE AUTH DUE TO CHANGE OF PLANS */}
                {/* <div>
                        {session ? (
                            <UserDropdown session={session} />
                        ) : (
                            <button className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black">
                                <Link href="/auth/signin">Giriş yap</Link>
                            </button>
                        )}
                    </div> */}
            </div>
        </nav>
    );
}
