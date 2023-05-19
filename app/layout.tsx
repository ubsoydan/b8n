import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import Script from "next/script";
import { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
const font = Nunito_Sans({
    subsets: ["latin"],
    weight: "400",
    style: "normal",
});

export const metadata: Metadata = {
    title: "Bilinmeyen Harcama",
    description:
        "Kartınızdaki bilinmeyen harcamaları kontrol edin! Sizden habersiz kartınızdan harcama mı yapılmış? Harcama itirazında bulunmak mı istiyorsunuz? Ne ödemesi olduğunu anlamadınız mı? Kart harcamanız hakkında bilgi alın.",
    keywords: [
        "bilinmeyen",
        "izinsiz",
        "habersiz",
        "harcama",
        "ödeme",
        "itiraz",
        "kart",
        "banka",
        "kredi",
        "öğren",
        "sorgula",
        "bilgi",
        "nedir",
        "hesap",
        "para",
        "çekilmiş",
        "finans",
        "ekonomi",
    ],

    icons: {
        icon: {
            url: "/favicon.png",
            type: "image/png",
        },
        shortcut: { url: "/favicon.png", type: "image/png" },
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="tr">
            <body>
                <div
                    className={`h-full w-full bg-gradient-to-br from-sky-100 via-white to-cyan-200 ${font.className}`}
                >
                    {/* @ts-expect-error Server Component */}
                    <Nav />
                    <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
                        {children}
                    </main>
                    <Footer />
                    {/* analytics */}
                </div>
            </body>
            <Script
                src="https://cse.google.com/cse.js?cx=a279719b2965145d8"
                strategy="lazyOnload"
            />
        </html>
    );
}
