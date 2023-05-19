import { Separator } from "@/components/ui/separator";
import type { Metadata } from "next";
import Balancer from "react-wrap-balancer";
Separator;

export const metadata: Metadata = {
    title: "Hakkımızda | Bilinmeyen Harcama",
    description: "Bilinmeyen Harcama platformu hakkında bilgi alın.",
};

function AboutPage() {
    return (
        <div className="text-center">
            <h2 className="text-4xl text-muted-foreground mb-3">
                Bilinmeyen Harcama
            </h2>
            <h3 className="text-2xl mb-4 text-[#387bda]">
                Kart harcamalarına dair bilgi platformu
            </h3>
            <Separator />
            <h4 className="font-bold mt-4 text-lg text-[#387bda]">Nedir?</h4>
            <p>
                <Balancer>
                    Bilinmeyen Harcama; banka ve kredi kartı kullanıcılarının
                    hesap hareketlerinde ve ekstrelerinde tanımadığı, bilmediği,
                    güvenilirliğinden şüphelendiği harcama ve ödemeleri
                    tartıştığı, hakkında bilgi paylaştığı bir platformdur.
                </Balancer>
            </p>
            <h4 className="font-bold mt-4 text-lg text-[#387bda]">
                Ne işe yarar?
            </h4>
            <p>
                <Balancer>
                    Kullanıcılar ve tüketiciler buradan edindikleri ve burada
                    paylaştıkları bilgiler doğrultusunda, bankalar ve/veya
                    harcama yapılan üye işyerleri ile iletişime geçme zahmetine
                    girmeden, kart harcamaları ve ödemeleri hakkındaki
                    endişelerini giderebilir. Güvenilirliğinden şüphelenilen
                    veya dolandırıcılık ihtimali bulunan harcamalar söz
                    konusuysa kullanıcıyı bilgilendirir.
                </Balancer>
            </p>
        </div>
    );
}

export default AboutPage;
