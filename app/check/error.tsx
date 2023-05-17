"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function CheckPageError({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div>
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
        </div>
    );
}
