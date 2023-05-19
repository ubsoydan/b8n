export default function Footer() {
    return (
        <footer className="absolute w-full border-t border-gray-200 bg-white py-3 md:py-4 text-center">
            <div className="flex justify-center">
                <a
                    href="/i/about"
                    className="text-xs md:text-sm text-gray-500 mx-4 hover:text-gray-700"
                >
                    Hakkımızda
                </a>
                <a
                    href="/i/contact"
                    className="text-xs md:text-sm text-gray-500 mx-4 hover:text-gray-700"
                >
                    İletişim
                </a>
                <a
                    href="/i/disclaimer"
                    className="text-xs md:text-sm text-gray-500 mx-4 hover:text-gray-700"
                >
                    Gizlilik & Kullanım Sözleşmesi
                </a>
            </div>
        </footer>
    );
}
