import Balancer from "react-wrap-balancer";
interface AboutChargeProps {
    description?: string | null;
}

export default function AboutCharge({ description }: AboutChargeProps) {
    return (
        <div className="w-auto max-w-2xl my-8 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
            <h3 className="text-xl ml-4 md:text-2xl font-semibold text-[#2e7ce5] ">
                Bu Harcama Hakkında
            </h3>
            <article className="whitespace-pre-wrap mt-4 ml-4 px-2">
                <Balancer>
                    {description
                        ? description
                        : "Şu an bu harcama hakkında bir bilgi yok. Yorum yazarak bildiklerinizi, merak ettiklerinizi veya varsa şikayetinizi belirtebilirsiniz."}
                </Balancer>
            </article>
        </div>
    );
}
