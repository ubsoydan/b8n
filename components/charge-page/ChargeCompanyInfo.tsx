import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

type CardProps = React.ComponentProps<typeof Card>;

interface ChargeCompanyInfoProps {
    companyname?: string | null;
    website?: string | null;
    contactweb?: string | null;
    contactphone?: string | null;
}

export default function ChargeCompanyInfo({
    className,
    ...props
}: CardProps & ChargeCompanyInfoProps) {
    const { companyname, website, contactweb, contactphone } = props;

    return (
        <Card className="mx-20 w-2/3 md:w-72 md:mx-0 my-4">
            <CardContent className="mt-2">
                <p className="mt-2 text-base font-semibold leading-none text-[#387bda]">
                    İşletme adı
                </p>

                <p className="ml-2 mt-1 text-sm text-muted-foreground">
                    {companyname}
                </p>
                <p className="mt-2 text-base font-semibold  leading-none text-[#387bda]">
                    İnternet Sitesi
                </p>
                <p className="ml-2 mt-1 text-sm text-muted-foreground">
                    {website}
                </p>
                <p className="mt-2 text-base font-semibold  leading-none text-[#387bda]">
                    İletişim
                </p>
                <p className="ml-2 mt-1 text-sm text-muted-foreground">
                    {contactweb}
                </p>
                <p className=" ml-2 mt-1 text-sm text-muted-foreground">
                    {contactphone}
                </p>
            </CardContent>
        </Card>
    );
}
