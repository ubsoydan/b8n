import Balancer from "react-wrap-balancer";
interface AboutChargeProps {
    description?: string | null;
}

export default function AboutCharge({ description }: AboutChargeProps) {
    return (
        <div className="w-auto max-w-2xl mt-2 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
            <h3 className="text-lg md:text-xl font-semibold ">
                Bu Harcama Hakkında
            </h3>
            <article className="whitespace-pre-wrap mt-4 px-2">
                <Balancer>{description}</Balancer>
            </article>
        </div>
    );
}
