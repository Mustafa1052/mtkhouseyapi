import Image from "next/image";
import type { Metadata } from "next";
import { ServiceLanding } from "@/components/ServiceLanding";
import { buildMetadata } from "@/lib/seo";
import { steelSeoSections } from "@/lib/site";

// Bu dizi, sayfadaki ana slider'da gösterilecek çelik ev görsellerini tutar.
// GORSEL DOSYA ADI PLANI (sonradan kendi gorsellerinle degistir):
// [Slider-01] /images/celik/celik-slider-01.webp
// [Slider-02] /images/celik/celik-slider-02.webp
// ...
// [Slider-16] /images/celik/celik-slider-16.webp
// Nerede kullaniliyor: Bu dizi ServiceLanding icindeki "Proje Gorselleri" sliderinda kullanilir.
const steelImages = [
  ...["1.png", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg", "celik-ev.png", "hafif-celik-villa.png"].map(
    (file, index) => ({
      src: `/assets/legacy/images/${file}`,
      alt: `Çelik konstrüksiyon proje görseli ${index + 1}`,
    }),
  ),
];

// Bu dizi, "Model Örnekleri" kartlarının içeriğini belirler.
// MODEL VITRIN GORSELLERI:
// /images/celik/model-01.webp ... /images/celik/model-04.webp
// Nerede kullaniliyor: Sayfa icindeki "Model Ornekleri (Balikesir)" kart gridi.
const steelModelExamples = [
  {
    title: "92 m² Tek Katlı Model",
    location: "Balıkesir / Karesi",
    image: "/assets/legacy/images/celik-ev.png",
    alt: "tek katlı çelik ev model örneği",
  },
  {
    title: "120 m² 3+1 Model",
    location: "Balıkesir / Altıeylül",
    image: "/assets/legacy/images/hafif-celik-villa.png",
    alt: "120 metrekare çelik ev dış cephe görünümü",
  },
  {
    title: "143 m² Çift Katlı Model",
    location: "Balıkesir / Edremit",
    image: "/assets/legacy/images/14.jpg",
    alt: "çift katlı çelik ev model uygulaması",
  },
  {
    title: "169 m² Özel Proje Model",
    location: "Balıkesir / Bandırma",
    image: "/assets/legacy/images/17.jpg",
    alt: "özel tasarım çelik ev model projesi",
  },
];

// Bu dizi, gerçek uygulama süreci (şantiye) kartlarını yönetir.
// SANTIYE / PROJE SURECI GORSELLERI:
// /images/celik/proje-01.webp ... /images/celik/proje-04.webp
// Nerede kullaniliyor: Sayfa icindeki "Proje Ornekleri (Balikesir Santiyeleri)" kart gridi.
const steelProjectExamples = [
  {
    title: "Karkas Montaj Başlangıcı",
    location: "Balıkesir / Bandırma",
    image: "/assets/legacy/images/2.jpg",
    alt: "çelik karkas montaj başlangıç aşaması",
  },
  {
    title: "Taşıyıcı Sistem Kurulumu",
    location: "Balıkesir / Gönen",
    image: "/assets/legacy/images/4.jpg",
    alt: "çelik taşıyıcı sistem kurulum süreci",
  },
  {
    title: "Dış Cephe Kapama Aşaması",
    location: "Balıkesir / Burhaniye",
    image: "/assets/legacy/images/6.jpg",
    alt: "çelik ev dış cephe kapama işlemi",
  },
  {
    title: "Teslim Öncesi Son Kontrol",
    location: "Balıkesir / Edremit",
    image: "/assets/legacy/images/8.jpg",
    alt: "çelik konut teslim öncesi son kontrol aşaması",
  },
];

export const metadata: Metadata = buildMetadata({
  title: "Çelik Konstrüksiyon Evler ve Deprem Dayanımı",
  description:
    "Çelik konstrüksiyon ev, depreme dayanıklı ev ve hafif çelik yapı sistemleri hakkında teknik avantajlar, fiyatlandırma ve anahtar teslim süreç.",
  path: "/celik-konstruksiyon-evler",
  keywords: [
    "celik konstruksiyon ev",
    "depreme dayanikli ev",
    "celik ev fiyatlari",
    "hafif celik yapi sistemleri",
  ],
});

export default function SteelHomesPage() {
  return (
    <ServiceLanding
      title="Çelik Konstrüksiyon Evler"
      subtitle="Deprem güvenliği, uzun ömürlü yapı performansı ve modern mimariyi birleştiren premium çelik ev çözümleri."
      points={[
        "Statik analiz destekli depreme dayanıklı tasarım",
        "Fabrika kontrollü üretim ile kalite standardı",
        "Hızlı montaj, planlı teslim ve anahtar teslim kapsam",
        "Enerji verimliliği odaklı yalıtım katmanları",
      ]}
      content={steelSeoSections}
      schemaDescription="Depreme dayanıklı çelik konstrüksiyon ev tasarım ve anahtar teslim uygulama hizmeti."
      galleryImages={steelImages}
      extraContent={
        <div className="space-y-6">
          <div className="glass-card p-6 md:p-8">
            <h2 className="font-mono text-2xl font-bold text-white">Model Örnekleri (Balıkesir)</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {steelModelExamples.map((item) => (
                <article key={item.title} className="overflow-hidden rounded-xl border border-slate-700 bg-slate-950">
                  <Image src={item.image} alt={item.alt} width={700} height={500} className="h-44 w-full object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-xs text-orange-300">{item.location}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="glass-card p-6 md:p-8">
            <h2 className="font-mono text-2xl font-bold text-white">Proje Örnekleri (Balıkesir Şantiyeleri)</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {steelProjectExamples.map((item) => (
                <article key={item.title} className="overflow-hidden rounded-xl border border-slate-700 bg-slate-950">
                  <Image src={item.image} alt={item.alt} width={700} height={500} className="h-44 w-full object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-xs text-orange-300">{item.location}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      }
    />
  );
}
