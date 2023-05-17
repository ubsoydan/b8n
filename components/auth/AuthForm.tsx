"use client";

import * as React from "react";
import { signIn } from "next-auth/react";
import { Icons } from "../ui/icons";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

interface AuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function AuthForm({ className, ...props }: AuthFormProps) {
    const [isGoogleLoading, setIsGoogleLoading] =
        React.useState<boolean>(false);

    return (
        <div className={cn("grid gap-6", className)} {...props}>
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                        GİRİŞ SEÇENEKLERİ
                    </span>
                </div>
            </div>
            <button
                type="button"
                className={cn(buttonVariants({ variant: "outline" }))}
                onClick={() => {
                    setIsGoogleLoading(true);
                    signIn("google", { callbackUrl: "/" });
                }}
                disabled={isGoogleLoading}
            >
                {isGoogleLoading ? (
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                    <Icons.google className="mr-2 h-4 w-4" />
                )}{" "}
                Google{" "}
            </button>
        </div>
    );
}
