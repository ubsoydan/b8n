import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
    title: "İletişim | Bilinmeyen Harcama",
    description: "Bilinmeyen Harcama platformuyla iletişime geçin.",
};

export default function Contact() {
    return (
        <div>
            <h2 className="text-2xl text-[#387bda] mb-2">İletişim (e-posta)</h2>
            <Link href="mailto:berkaidev@protonmail.com">
                berkaidev @ protonmail.com
            </Link>
        </div>
    );
}
