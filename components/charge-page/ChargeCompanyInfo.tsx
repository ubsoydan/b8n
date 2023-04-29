import { cn } from "@/lib/utils";
import { Card, CardContent } from "components/ui/card";

type CardProps = React.ComponentProps<typeof Card>;

interface ChargeCompanyInfoProps {
    companyName?: string | null;
    website?: string | null;
    contactWeb?: string | null;
    contactPhone?: string | null;
}

export default function ChargeCompanyInfo({
    className,
    ...props
}: CardProps & ChargeCompanyInfoProps) {
    const { companyName, website, contactWeb, contactPhone } = props;

    return (
        <Card className={cn("w-72", className)} {...props}>
            <CardContent className={cn("mt-2", className)}>
                <p className="mt-2 text-md font-md leading-none">Isletme adi</p>

                <p className="text-sm text-muted-foreground">{companyName}</p>
                <p className="mt-2 text-md font-md leading-none">Web Sitesi</p>
                <p className="text-sm text-muted-foreground">{website}</p>
                <p className="mt-2 text-md font-md leading-none">Iletisim</p>
                <p className="text-sm text-muted-foreground">{contactWeb}</p>
                <p className="text-sm text-muted-foreground">{contactPhone}</p>
            </CardContent>
        </Card>
    );
}
