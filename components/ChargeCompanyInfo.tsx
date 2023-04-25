import { cn } from "@/lib/utils";
import { Card, CardContent } from "./ui/card";

type CardProps = React.ComponentProps<typeof Card>;

export default function ChargeCompanyInfo({ className, ...props }: CardProps) {
    return (
        <Card className={cn("relative w-72", className)} {...props}>
            <CardContent className={cn("mt-2", className)}>
                <p className="mt-2 text-md font-md leading-none">Isletme adi</p>

                <p className="text-sm text-muted-foreground">
                    isletmenin adi buraya
                </p>
                <p className="mt-2 text-md font-md leading-none">Web Sitesi</p>
                <p className="text-sm text-muted-foreground">www.isletme.com</p>
                <p className="mt-2 text-md font-md leading-none">Iletisim</p>
                <p className="text-sm text-muted-foreground">
                    mail@isletme.com
                </p>
                <p className="text-sm text-muted-foreground">444 00 11</p>
            </CardContent>
        </Card>
    );
}
