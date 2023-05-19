"use client";

export default function GlobalError({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    return (
        <html>
            <body>
                <h2 className="text-sky-900 text-3xl mb-5">
                    Aradığınız şeyi bulamadık!
                </h2>
                <button
                    onClick={
                        // Attempt to recover by trying to re-render the segment
                        () => reset()
                    }
                >
                    Buraya tıklayıp tekrar denerseniz belki bulabiliriz...
                </button>
            </body>
        </html>
    );
}
