import Balancer from "react-wrap-balancer";

interface ChargeHeaderProps {
    header: string;
}

export default function ChargeHeader({ header }: ChargeHeaderProps) {
    return (
        <header className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
            <h1 className="w-full max-w-sm text-2xl md:text-3xl lg:text-4xl font-semibold">
                <Balancer> {header} </Balancer>
            </h1>
            <h2 className="text-md md:text-lg lg:text-xl ml-2 mt-2 text-muted-foreground">
                <Balancer>
                    {header} harcamasını ve hesap hareketlerinizde görünme
                    sebebini öğrenin
                </Balancer>
            </h2>
        </header>
    );
}
