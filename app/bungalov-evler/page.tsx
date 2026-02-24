import Image from "next/image";
import type { Metadata } from "next";
import { ServiceLanding } from "@/components/ServiceLanding";
import { buildMetadata } from "@/lib/seo";

// Bu dizi, bungalov sayfasındaki slider görsellerini tutar.
// GORSEL DOSYA ADI PLANI (sonradan kendi gorsellerinle degistir):
// [Slider-01] /images/bungalov/bungalov-slider-01.webp
// ...
// [Slider-16] /images/bungalov/bungalov-slider-16.webp
// Nerede kullaniliyor: ServiceLanding icindeki ana "Proje Gorselleri" slideri.
const bungalowImages = [
  ...["1.png", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg"].map(
    (file, index) => ({
      src: `/assets/legacy/images/${file}`,
      alt: `Bungalov proje görseli ${index + 1}`,
    }),
  ),
];

// Bu dizi, bungalov model vitrini kartlarını yönetir.
// MODEL VITRIN GORSELLERI:
// /images/bungalov/model-01.webp ... /images/bungalov/model-04.webp
// Nerede kullaniliyor: "Model Ornekleri (Balikesir)" bolumu.
const bungalowModelExamples = [
  {
    title: "1+1 Tiny Bungalov Model",
    location: "Balıkesir / Edremit",
    image: "/assets/legacy/images/11.jpg",
    alt: "tiny bungalov model dış cephe örneği",
  },
  {
    title: "2+1 Aile Bungalovu",
    location: "Balıkesir / Burhaniye",
    image: "/assets/legacy/images/14.jpg",
    alt: "2+1 bungalov ev model örneği",
  },
  {
    title: "Turizm Konaklama Bungalovu",
    location: "Balıkesir / Ayvalık",
    image: "/assets/legacy/images/17.jpg",
    alt: "turizm amaçlı bungalov proje örneği",
  },
  {
    title: "Verandalı Modern Bungalov",
    location: "Balıkesir / Gömeç",
    image: "/assets/legacy/images/20.jpg",
    alt: "verandalı modern bungalov model örneği",
  },
];

// Bu dizi, bungalov şantiye/proje kartlarını yönetir.
// PROJE SURECI GORSELLERI:
// /images/bungalov/proje-01.webp ... /images/bungalov/proje-04.webp
// Nerede kullaniliyor: "Proje Ornekleri (Balikesir Santiyeleri)" bolumu.
const bungalowProjectExamples = [
  {
    title: "Zemin ve Taşıyıcı Kurulum",
    location: "Balıkesir / Burhaniye",
    image: "/assets/legacy/images/2.jpg",
    alt: "bungalov kurulumunda zemin ve taşıyıcı aşaması",
  },
  {
    title: "Dış Kaplama Uygulaması",
    location: "Balıkesir / Bandırma",
    image: "/assets/legacy/images/4.jpg",
    alt: "bungalov dış kaplama uygulama süreci",
  },
  {
    title: "İç Mekan Tamamlama",
    location: "Balıkesir / Karesi",
    image: "/assets/legacy/images/6.jpg",
    alt: "bungalov iç mekan tamamlama aşaması",
  },
  {
    title: "Teslim Öncesi Peyzaj",
    location: "Balıkesir / Ayvalık",
    image: "/assets/legacy/images/8.jpg",
    alt: "bungalov teslim öncesi çevre düzenleme görünümü",
  },
];

const bungalovSections = [
  {
    heading: "Modern Bungalov Projelerinde Dayanıklılık ve Estetik",
    paragraphs: [
      "Bungalov ev projeleri doğa ile uyumlu yaşam isteyen kullanıcılar için hem estetik hem fonksiyonel bir seçenek sunar. Çelik bungalov sistemleri sayesinde hızlı montaj ve uzun ömürlü performans bir arada elde edilir.",
      "MTK House, modern bungalov projelerinde arazi yapısına uygun planlama, yalıtım odaklı katman çözümleri ve premium mimari detaylarla fark yaratır.",
    ],
  },
  {
    heading: "Yatırım ve Konaklama Projeleri İçin Uygun Yapı",
    paragraphs: [
      "Bungalov yapı modeli sadece bireysel yaşam değil, turizm ve kiralama yatırımları için de avantajlıdır. Hızlı devreye alma, düşük bakım ihtiyacı ve modern görünüm bu modeli cazip hale getirir.",
      "Doğru teknik altyapı ve proje yönetimi ile bungalov yapılar yıl boyu konfor sunan güvenli bir yaşam alanı haline gelir.",
    ],
  },
];

export const metadata: Metadata = buildMetadata({
  title: "Bungalov Evler | Çelik Bungalov ve Modern Projeler",
  description:
    "Bungalov ev, çelik bungalov ve modern bungalov projeleri için deprem güvenliği ve premium tasarım odaklı MTK House çözümleri.",
  path: "/bungalov-evler",
  keywords: ["bungalov ev", "celik bungalov", "modern bungalov projeleri"],
});

export default function BungalowHomesPage() {
  return (
    <ServiceLanding
      title="Bungalov Evler"
      subtitle="Doğal yaşamla uyumlu, modern mimariye sahip, uzun ömürlü ve depreme dayanıklı çelik bungalov çözümleri."
      points={[
        "Doğa ile uyumlu modern mimari",
        "Çelik bungalov ile güvenli taşıyıcı sistem",
        "Turizm yatırımları için hızlı teslim modeli",
        "Konforlu iç mekanlar için yalıtım odaklı çözüm",
      ]}
      content={bungalovSections}
      schemaDescription="Modern çelik bungalov tasarım ve anahtar teslim uygulama hizmeti."
      galleryImages={bungalowImages}
      extraContent={
        <div className="space-y-6">
          <div className="glass-card p-6 md:p-8">
            <h2 className="font-mono text-2xl font-bold text-white">Model Örnekleri (Balıkesir)</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {bungalowModelExamples.map((item) => (
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
              {bungalowProjectExamples.map((item) => (
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
