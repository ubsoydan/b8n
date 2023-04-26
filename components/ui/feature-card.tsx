import { ReactNode } from "react";
import Balancer from "react-wrap-balancer";

export default function Card({
    title,
    description,
    reverseOrder,
    children,
}: {
    title?: string;
    description?: string;
    reverseOrder?: boolean;
    children: ReactNode;
}) {
    return (
        <div className="px-10 col-span-1 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md md:col-span-2">
            {reverseOrder ? (
                <>
                    <div className="flex h-60 items-center justify-center">
                        {children}
                    </div>
                    <div className="mx-auto max-w-md text-center">
                        <h2 className="bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-xl font-bold text-transparent md:text-3xl md:font-normal">
                            <Balancer>{title}</Balancer>
                        </h2>
                        <div className="prose-sm -mt-2 leading-normal text-gray-500 md:prose">
                            <Balancer>{description}</Balancer>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="mx-auto max-w-md text-center">
                        <h2 className="bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-xl font-bold text-transparent md:text-3xl md:font-normal">
                            <Balancer>{title}</Balancer>
                        </h2>
                        <div className="prose-sm -mt-2 leading-normal text-gray-500 md:prose">
                            <Balancer>{description}</Balancer>
                        </div>
                    </div>
                    <div className="flex h-60 items-center justify-center">
                        {children}
                    </div>
                </>
            )}
        </div>
    );
}
