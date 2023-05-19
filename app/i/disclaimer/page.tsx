import { Metadata } from "next";
import Balancer from "react-wrap-balancer";

const metadata: Metadata = {
    title: "Yasal Bilgilendirme | Bilinmeyen Harcama",
    description:
        "Bilinmeyen Harcama platformunun kullanım şartları ve kullanıcı gizlilik sözleşmesi hakkında bilgi alın.",
};

export default function Disclaimer() {
    return (
        <div className="w-2/3">
            <p className="mb-8 font-medium">
                <Balancer>
                    Bu siteyi kullanarak kullanım şartlarını ve gizlilik
                    sözleşmemizi kabul etmiş sayılırsınız.
                </Balancer>
            </p>
            <h2 className="text-xl font-semibold mb-4 text-[#387bda]">
                Kullanım Şartları
            </h2>
            <p>
                <Balancer className="mb-1">
                    Bilinmeyen Harcama platformu, hiçbir kurum ve kuruluşla
                    bağlantısı olmayan bir bilgi platformudur. Banka ve kredi
                    kartı kullanıcıları arasında, banka hesapları ve kartları
                    üzerinden yapılan harcamalar ve ödemeler hakkında bilgi
                    paylaşımını mümkün kılmayı amaçlar. Kullanıcılar siteyi
                    kullanarak bu şartları kabul etmiş sayılır. Kullanıcı,
                    platformunda kullanımından doğan tüm sorumluluğu ve riski
                    üstlendiğini kabul eder. <br />
                </Balancer>
                <Balancer className="mb-1">
                    Bilinmeyen Harcama, platform üzerinde paylaşılan hiçbir
                    bilgi, düşünce, tavsiye, materyal ve hizmetin doğruluk,
                    tamlık ve kullanılırlığını garanti etmez. Bunları
                    değerlendirmek kullanıcının sorumluluğundadır. Bilinmeyen
                    Harcama platformu, bu şartlarda her zaman değişiklik
                    yapabilir. Kullanıcılar bulundukları ülkenin hiçbir
                    yasasını, uluslararası sözleşmeyi veya herhangi bir devletin
                    yasasını ihlal etmeyeceğini; gerçek veya tüzel kişilere
                    karşı tehdit, hakaret, kötüleme, taciz ve zararlı davranışta
                    bulunmayacağını; ilgili konudaki kurum ve kuruluşların
                    temsilcisiymiş gibi yanıltıcı şekilde davranmayacağını
                    kabul, beyan ve taahhüt eder. Tüm bunlardan ve doğabilecek
                    sonuçlardan kullanıcının kendisi sorumludur ve Bilinmeyen
                    Harcama platformu hiçbir sorumluluk taşımamaktadır. <br />
                </Balancer>
                <Balancer className="mb-1">
                    Kullanıcı, gerekli görüldüğü takdirde Türkçe dil kuralları,
                    genel ahlak, yürürlükteki mevzuat vb. sebeplerle gönderdiği
                    içerik üzerinde değişiklik yapılabileceğini; bu
                    değişiklikler sebebiyle hiçbir tazmin veya benzeri talebinin
                    olmayacağını kabul, beyan ve taahhüt eder. <br />
                </Balancer>
                <Balancer className="mb-1">
                    Kullanıcı, Bilinmeyen Harcama platformunun kullanıcı
                    şikayetlerini ve problemlerini çözme yükümlülüğünün ve
                    garantisi olmadığını kabul beyan, taahhüt eder.{" "}
                </Balancer>
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-[#387bda]">
                Gizlilik Sözleşmesi
            </h2>
            <p>
                <Balancer>
                    Bilinmeyen Harcama platformu verilerinizin gizliliğini ve
                    güvenliğini ön planda tutar. 6698 sayılı KVKK 10.
                    maddesinden doğan bilgilendirme yükümlülüğü gereğiyle
                    toplanan kişisel verileriniz hakkında bilgilendirmek
                    isteriz. Kişisel veri, kimliğinizi belirli ya da
                    belirlenebilir kılan her türlü bilgi anlamına gelmektedir.
                    Bilinmeyen Harcama platformu, geliştiricisinin inançları
                    gereği en az düzeyde kişisel veri toplamayı görev edinmiş;
                    bu amaçla daha önce entegre edilmiş üyelik sistemini dahi
                    kaldırarak daha özgür bir platform haline getirilmiştir.
                    Toplanan veriler yalnızca yaptığınız yorumlarda
                    belirttiğiniz isim ve e-posta adresinizin yanı sıra,
                    yorumunuzda belirttiğiniz (varsa) diğer harici bilgilerdir.
                    Veriler hiçbir şekilde işlenmeden, referans amacıyla
                    veritabanında saklanmaktadır. İsminiz ve e-posta adresiniz
                    hiçbir üçüncü partiyle paylaşılmamaktadır. Bilinmeyen
                    Harcama platformunu kullanarak bu verileri platformla
                    paylaşmayı ve verilerin saklanmasını kabul etmiş
                    sayılırsınız.
                </Balancer>
            </p>
        </div>
    );
}
