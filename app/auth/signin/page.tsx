import { Metadata } from "next";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { AuthForm } from "@/components/auth/AuthForm";

export const metadata: Metadata = {
    title: "Giriş yap",
    description: "Hesabınıza giriş yapın",
};

export default function LoginPage() {
    return (
        <div className="container flex h-screen w-screen flex-col items-center justify-center">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <div className="flex flex-col space-y-2 text-center">
                    <Icons.logo className="mx-auto h-6 w-6" />
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Hoş geldin!
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Yorumlarınızı görmek veya değiştirmek için giriş
                        yapabilirsiniz.
                    </p>
                </div>
                <AuthForm />
            </div>
        </div>
    );
}
