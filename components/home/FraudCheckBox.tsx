import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import { Icons } from "../ui/icons";
import Image from "next/image";
import Balancer from "react-wrap-balancer";

export default function FraudCheckBox() {
    return (
        <Card className="lg:w-[48rem] flex flex-col items-center">
            <CardHeader>
                <CardTitle className="text-xl md:text-2xl text-[#387bda]">
                    Kartınızdaki bilinmeyen harcamaları açıklamanın en kolay
                    yolu!
                </CardTitle>
            </CardHeader>
            <CardContent className="ml-2 md:ml-8 text-base md:text-lg">
                <p className="flex mb-2">
                    <Icons.bell className="mr-4" size="20" />
                    Sizden habersizce kartınızdan harcama mı yapılmış?
                </p>
                <p className="flex mb-2">
                    <Icons.question className="mr-4" size="20" />
                    Hesap hareketlerinizde hatırlamadığınız bir ödeme mi var?
                </p>
                <p className="flex mb-4">
                    <Icons.danger className="mr-4" size="20" />
                    <Link href="/check">
                        <span className="text-rose-600">
                            {" "}
                            Dolandırıcılık ihtimali
                        </span>
                        nden mi şüpheleniyorsunuz?
                    </Link>
                </p>
                <Image
                    src="/ill.svg"
                    alt="confused person-şaşırmış insan"
                    width={230}
                    height={230}
                    className="mx-auto"
                />
            </CardContent>
            <Link
                href="/check"
                className="inline-flex items-center justify-center rounded-3xl text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-cyan-500 text-primary-foreground hover:bg-cyan-600 w-5/6 mb-8 py-2"
            >
                <Balancer>
                    ŞÜPHELİ HARCAMAYI KOLAYCA SORGULAMAK İÇİN TIKLAYIN!
                </Balancer>
            </Link>
        </Card>
    );
}
