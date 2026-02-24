import Image from "next/image";
import type { Metadata } from "next";
import { ServiceLanding } from "@/components/ServiceLanding";
import { buildMetadata } from "@/lib/seo";

// Bu dizi, prefabrik sayfasındaki ana slider görsellerini içerir.
// GORSEL DOSYA ADI PLANI (sonradan kendi gorsellerinle degistir):
// [Slider-01] /images/prefabrik/prefabrik-slider-01.webp
// [Slider-02] /images/prefabrik/prefabrik-slider-02.webp
// ...
// [Slider-18] /images/prefabrik/prefabrik-slider-18.webp
// Nerede kullaniliyor: ServiceLanding icindeki "Proje Gorselleri" slideri.
const prefabricImages = [
  ...["1.png", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg", "prefabrik-ev.png", "konteyner-2.png"].map(
    (file, index) => ({
      src: `/assets/legacy/images/${file}`,
      alt: `Prefabrik proje görseli ${index + 1}`,
    }),
  ),
];

// Bu dizi, prefabrik model vitrini kartlarını yönetir.
// MODEL VITRIN GORSELLERI:
// /images/prefabrik/model-01.webp ... /images/prefabrik/model-04.webp
// Nerede kullaniliyor: "Model Ornekleri (Balikesir)" bolumu.
const prefabricModelExamples = [
  {
    title: "70 m² 2+1 Kampanya Modeli",
    location: "Balıkesir / Altıeylül",
    image: "/assets/legacy/images/prefabrik-ev.png",
    alt: "70 metrekare prefabrik model ev dış cephe görünümü",
  },
  {
    title: "85 m² 3+1 Model",
    location: "Balıkesir / Karesi",
    image: "/assets/legacy/images/11.jpg",
    alt: "85 metrekare prefabrik ev modeli bahçe cephesi",
  },
  {
    title: "113 m² 3+1 Model",
    location: "Balıkesir / Bandırma",
    image: "/assets/legacy/images/14.jpg",
    alt: "113 metrekare prefabrik model dış cephe ve çatı detayı",
  },
  {
    title: "123 m² Dubleks Model",
    location: "Balıkesir / Burhaniye",
    image: "/assets/legacy/images/17.jpg",
    alt: "dubleks prefabrik ev modeli anahtar teslim dış cephe",
  },
];

// Bu dizi, prefabrik şantiye/proje süreci kartlarını yönetir.
// PROJE SURECI GORSELLERI:
// /images/prefabrik/proje-01.webp ... /images/prefabrik/proje-04.webp
// Nerede kullaniliyor: "Proje Ornekleri (Balikesir Santiyeleri)" bolumu.
const prefabricProjectExamples = [
  {
    title: "Panel Montaj Şantiyesi",
    location: "Balıkesir / Karesi",
    image: "/assets/legacy/images/2.jpg",
    alt: "prefabrik panel montaj sürecinden saha fotoğrafı",
  },
  {
    title: "Taşıyıcı Birleşim Aşaması",
    location: "Balıkesir / Gönen",
    image: "/assets/legacy/images/4.jpg",
    alt: "şantiyede prefabrik taşıyıcı birleşim işlemi",
  },
  {
    title: "Kaba Montaj Sonrası Kontrol",
    location: "Balıkesir / Ayvalık",
    image: "/assets/legacy/images/6.jpg",
    alt: "prefabrik montaj sonrası sahada kontrol aşaması",
  },
  {
    title: "Teslim Öncesi Dış Cephe",
    location: "Balıkesir / Edremit",
    image: "/assets/legacy/images/8.jpg",
    alt: "teslim öncesi prefabrik dış cephe kontrol görüntüsü",
  },
];

const prefabricSections = [
  {
    heading: "Prefabrik Ev Çözümlerinde Hız ve Kalite",
    paragraphs: [
      "Prefabrik ev sistemleri, fabrika kontrollü üretim sayesinde kalite standardını korurken sahadaki montaj süresini kısaltır. Bu model, zamanın kritik olduğu projelerde ciddi avantaj sağlar.",
      "MTK House, prefabrik ev sürecinde tasarımdan uygulamaya tüm adımları tek merkezden yönetir. Böylece kalite sapması ve süre kaybı riskleri azalır.",
    ],
  },
  {
    heading: "Deprem Güvenliği ve Teknik Altyapı",
    paragraphs: [
      "Prefabrik bir yapının güvenli olması, statik proje çözümleri ve bağlantı detaylarının doğru kurgulanması ile doğrudan ilişkilidir. Kullandığımız sistemlerde deprem performansı odaklı mühendislik yaklaşımı uygulanır.",
      "Balıkesir prefabrik ev projelerinde zemin koşulları, iklim etkileri ve kullanım senaryosu birlikte değerlendirilir. Bu sayede uzun ömürlü ve konforlu yapılar ortaya çıkar.",
    ],
  },
];

export const metadata: Metadata = buildMetadata({
  title: "Prefabrik Evler | Anahtar Teslim ve Deprem Güvenliği",
  description:
    "Prefabrik ev, prefabrik ev fiyatları, anahtar teslim prefabrik ve Balıkesir prefabrik ev çözümleri için MTK House teknik rehberi.",
  path: "/prefabrik-evler",
  keywords: ["prefabrik ev", "prefabrik ev fiyatlari", "anahtar teslim prefabrik", "Balikesir prefabrik ev"],
});

export default function PrefabricatedHomesPage() {
  return (
    <ServiceLanding
      title="Prefabrik Evler"
      subtitle="Hızlı teslim, şeffaf maliyet ve deprem güvenliği odaklı anahtar teslim prefabrik ev projeleri."
      points={[
        "Anahtar teslim prefabrik uygulama modeli",
        "Bütçeyi koruyan şeffaf fiyatlandırma",
        "Deprem dayanımına odaklı statik çözümler",
        "Balıkesir ve çevresinde yerel saha tecrübesi",
      ]}
      content={prefabricSections}
      schemaDescription="Anahtar teslim prefabrik ev tasarım ve uygulama hizmeti."
      galleryImages={prefabricImages}
      extraContent={
        <div className="space-y-6">
          <div className="glass-card p-6 md:p-8">
            <h2 className="font-mono text-2xl font-bold text-white">Model Örnekleri (Balıkesir)</h2>
            <p className="mt-2 text-sm text-slate-300">
              Vitrin model mantığında metrekare odaklı prefabrik seçenekler.
            </p>
            <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {prefabricModelExamples.map((item) => (
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
            <p className="mt-2 text-sm text-slate-300">
              Montajdan teslime kadar gerçek uygulama akışını gösteren proje vitrini.
            </p>
            <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {prefabricProjectExamples.map((item) => (
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
