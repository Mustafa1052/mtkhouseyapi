import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { ServiceLanding } from "@/components/ServiceLanding";
import { buildMetadata } from "@/lib/seo";

// Bu dizi, pimapen/pvc/cam balkon sayfasındaki slider görsellerini tutar.
// GORSEL DOSYA ADI PLANI (sonradan kendi gorsellerinle degistir):
// [Slider-01] /images/pimapen/pimapen-slider-01.webp
// ...
// [Slider-16] /images/pimapen/pimapen-slider-16.webp
// Nerede kullaniliyor: ServiceLanding icindeki ana "Proje Gorselleri" slideri.
const pvcImages = [
  ...["1.png", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg", "ofisler2.png", "ana-neden-mtkprefabrik.jpg"].map(
    (file, index) => ({
      src: `/assets/legacy/images/${file}`,
      alt: `PVC ve doğrama proje görseli ${index + 1}`,
    }),
  ),
];

// Bu dizi, ürün/model vitrini kartlarını yönetir.
// MODEL VITRIN GORSELLERI:
// /images/pimapen/model-01.webp ... /images/pimapen/model-04.webp
// Nerede kullaniliyor: "Model Ornekleri (Balikesir)" bolumu.
const pvcModelExamples = [
  {
    title: "PVC Pencere Modeli",
    location: "Balıkesir / Altıeylül",
    image: "/assets/legacy/images/11.jpg",
    alt: "PVC pencere model örneği",
  },
  {
    title: "Sürme Sistem Cam Balkon",
    location: "Balıkesir / Bandırma",
    image: "/assets/legacy/images/14.jpg",
    alt: "sürme sistem cam balkon model görünümü",
  },
  {
    title: "Isı Yalıtımlı Doğrama Seti",
    location: "Balıkesir / Edremit",
    image: "/assets/legacy/images/17.jpg",
    alt: "ısı yalıtımlı doğrama model örneği",
  },
  {
    title: "Panjur ve Kepenk Uyumlu Model",
    location: "Balıkesir / Burhaniye",
    image: "/assets/legacy/images/ofisler2.png",
    alt: "panjur uyumlu pencere sistemi modeli",
  },
];

// Bu dizi, saha uygulama/proje örneği kartlarını yönetir.
// PROJE SURECI GORSELLERI:
// /images/pimapen/proje-01.webp ... /images/pimapen/proje-04.webp
// Nerede kullaniliyor: "Proje Ornekleri (Balikesir Uygulamalari)" bolumu.
const pvcProjectExamples = [
  {
    title: "Eski Doğrama Sökümü",
    location: "Balıkesir / Edremit",
    image: "/assets/legacy/images/2.jpg",
    alt: "doğrama yenileme süreci saha fotoğrafı",
  },
  {
    title: "Yeni Çerçeve Montajı",
    location: "Balıkesir / Karesi",
    image: "/assets/legacy/images/4.jpg",
    alt: "pvc pencere çerçeve montajı uygulaması",
  },
  {
    title: "Cam Balkon Kurulum Aşaması",
    location: "Balıkesir / Altıeylül",
    image: "/assets/legacy/images/6.jpg",
    alt: "cam balkon kurulumunda profil ve cam birleşim detayı",
  },
  {
    title: "Teslim Sonrası Görünüm",
    location: "Balıkesir / Ayvalık",
    image: "/assets/legacy/images/8.jpg",
    alt: "teslim edilmiş cam balkon ve pencere sistemleri proje görünümü",
  },
];

const pvcSections = [
  {
    heading: "Pimapen Pencere, PVC Doğrama ve Cam Balkon Neden Önemli?",
    paragraphs: [
      "Pimapen pencere sistemleri, ısı kaybını azaltan ve enerji tüketimini düşüren yapısıyla konut konforunun temel parçalarından biridir. Doğru PVC doğrama seçimi, yazın serinlik kışın sıcaklık dengesini koruyarak yaşam kalitesini artırır.",
      "MTK House uygulamalarında profil kalitesi, cam seçimi ve montaj disiplini birlikte ele alınır. Cam balkon çözümleriyle dört mevsim kullanım konforu da güçlendirilir.",
    ],
  },
  {
    heading: "Enerji Verimliliği ve Uzun Vadeli Tasarruf",
    paragraphs: [
      "Enerji tasarruflu pencere sistemleri, sadece faturayı azaltmakla kalmaz; aynı zamanda ses yalıtımına da katkıda bulunur. Özellikle şehir merkezinde konfor beklentisi yüksek projelerde bu etki daha belirgindir.",
      "Isı yalıtımlı pencere yatırımı, yapının değerini artıran ve geri dönüşü hızlı olan bir iyileştirmedir. Doğru detaylarla uygulandığında bakım ihtiyacı da daha düşük olur.",
    ],
  },
  {
    heading: "Dönüşüm Odaklı Landing Page Altyapısı",
    paragraphs: [
      "Bu sayfa, Google Ads kampanyaları için güçlü bir dönüşüm yapısı sunar: net fayda metni, telefon ve WhatsApp çağrıları, hızlı teklif formu ve güven unsurları.",
      "Bu yapı sayesinde reklamlardan gelen trafiğin daha yüksek oranda teklife ve telefon aramasına dönüşmesi hedeflenir.",
    ],
  },
];

export const metadata: Metadata = buildMetadata({
  title: "Pimapen, PVC Doğrama ve Cam Balkon Sistemleri",
  description:
    "Pimapen pencere, PVC doğrama, cam balkon, ısı yalıtımlı pencere ve enerji tasarruflu sistemlerde MTK House çözümleri.",
  path: "/pimapen-pvc-dograma",
  keywords: [
    "pimapen pencere",
    "PVC dograma",
    "isi yalitimli pencere",
    "enerji tasarruflu pencere sistemleri",
    "cam balkon sistemleri",
  ],
});

export default function PvcPage() {
  return (
    <ServiceLanding
      title="Pimapen, PVC Doğrama ve Cam Balkon Çözümleri"
      subtitle="Isı yalıtımı, enerji verimliliği ve konfor odaklı premium pencere ve cam balkon sistemleri."
      points={[
        "Isı yalıtımlı pencere ile düşük enerji tüketimi",
        "Yüksek performanslı PVC profil ve cam seçimi",
        "Cam balkon ile dört mevsim kullanışlı yaşam alanı",
        "Balıkesir ve çevresinde yerel uygulama desteği",
      ]}
      content={pvcSections}
      schemaDescription="Pimapen pencere, PVC doğrama ve cam balkon enerji verimliliği odaklı uygulama hizmeti."
      galleryImages={pvcImages}
      extraContent={
        <div className="space-y-6">
          <div className="glass-card p-6 md:p-8">
            <h2 className="font-mono text-2xl font-bold text-white">Model Örnekleri (Balıkesir)</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {pvcModelExamples.map((item) => (
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
            <h2 className="font-mono text-2xl font-bold text-white">Proje Örnekleri (Balıkesir Uygulamaları)</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {pvcProjectExamples.map((item) => (
                <article key={item.title} className="overflow-hidden rounded-xl border border-slate-700 bg-slate-950">
                  <Image src={item.image} alt={item.alt} width={700} height={500} className="h-44 w-full object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-xs text-orange-300">{item.location}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-5">
              <Link
                href="/balikesir-celik-konstruksiyon-ev"
                className="inline-flex rounded-lg border border-orange-400 px-4 py-2 text-sm font-semibold text-orange-300 hover:bg-orange-500/20"
              >
                Balıkesir Çelik Konstrüksiyon Ev Sayfasına Geç
              </Link>
            </div>
          </div>
        </div>
      }
    />
  );
}
