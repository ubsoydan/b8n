interface AboutChargeProps {
    description?: string | null;
}

export default function AboutCharge({ description }: AboutChargeProps) {
    return (
        <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold">Bu Harcama Hakkinda</h3>
            <article className="whitespace-pre-wrap">{description}</article>
        </div>
    );
}
