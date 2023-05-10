import NavBar from "components/layout/NavBar";
import Footer from "components/layout/Footer";
import "./globals.css";
import Script from "next/script";

export const metadata = {
    title: "Bilinmeyen Harcama",
    description: "Kartınızdaki bilinmeyen harcamaları kontrol edin!",
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
                <div className="h-full w-full bg-gradient-to-br from-indigo-100 via-white to-cyan-200">
                    <NavBar />
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
