"use client";

import Link from "next/link";
import useScroll from "@/lib/hooks/useScroll";
import SearchBox from "./SearchBox";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Session } from "next-auth";
import UserDropdown from "../auth/Dropdown";

export default function NavBar({ session }: { session: Session | null }) {
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
                            <p>Bilinmeyen Harcama</p>
                        </Link>
                    </div>
                    <div className="mx-4 md:w-1/3 lg:w-1/4 xl:w-1/5">
                        {/* <SearchBox /> search component  */}
                        <div className="gcse-searchbox-only"></div>
                    </div>
                    <div>
                        {session ? (
                            <UserDropdown session={session} />
                        ) : (
                            <button className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black">
                                <Link href="/auth/signin">Giriş yap</Link>
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
