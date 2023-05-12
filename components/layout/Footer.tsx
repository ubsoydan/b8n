export default function Footer() {
    return (
        <div className="absolute w-full border-t border-gray-200 bg-white py-4 text-center">
            <div className="flex justify-center">
                <a
                    href="/about"
                    className="text-sm text-gray-500 mx-4 hover:text-gray-700"
                >
                    Hakkımızda
                </a>
                <a
                    href="/contact"
                    className="text-sm text-gray-500 mx-4 hover:text-gray-700"
                >
                    İletişim
                </a>
                <a
                    href="/disclaimer"
                    className="text-sm text-gray-500 mx-4 hover:text-gray-700"
                >
                    Gizlilik & Kullanım Sözleşmesi
                </a>
            </div>
        </div>
    );
}
