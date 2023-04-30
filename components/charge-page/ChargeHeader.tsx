interface ChargeHeaderProps {
    header: string;
}

export default function ChargeHeader({ header }: ChargeHeaderProps) {
    return (
        <header>
            <h1 className="text-4xl font-semibold">{header}</h1>
            <h2 className="text-xl ml-2 mt-2 text-muted-foreground">
                {header} harcamasini ve ekstrenizde gorunme sebebini ogrenin
            </h2>
        </header>
    );
}
// {chargeName }: { chargeName: string }
