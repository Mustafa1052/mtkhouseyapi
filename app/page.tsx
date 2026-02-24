import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaPhone,
  FaSquareEnvelope,
  FaUserTie,
} from "react-icons/fa6";
import { ConversionButtons } from "@/components/ConversionButtons";
import { HorizontalCardCarousel } from "@/components/HorizontalCardCarousel";
import { LeadForm } from "@/components/LeadForm";
import { buildMetadata } from "@/lib/seo";
import {
  BRAND,
  CONTACT_EMAIL,
  INSTAGRAM_URL,
  MAP_EMBED_URL,
  PHONE_DISPLAY,
  PHONE_RAW,
  SECOND_PHONE_DISPLAY,
  SECOND_PHONE_RAW,
  WHATSAPP_URL,
  contacts,
  SITE_URL,
  faqItems,
  projects,
  serviceCards,
  testimonials,
  trustBadges,
} from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Depreme Dayanıklı Çelik ve Prefabrik Yapı Çözümleri",
  description:
    "MTK House ile çelik konstrüksiyon ev, prefabrik ev, bungalov ve pimapen çözümlerinde deprem güvenliği, premium tasarım ve hızlı teslim avantajını yakalayın.",
  path: "/",
  keywords: [
    "celik konstruksiyon ev",
    "depreme dayanikli ev",
    "prefabrik ev fiyatlari",
    "bungalov ev",
    "pimapen pencere",
  ],
});

export default function Home() {
  const showcaseImages = [
    {
      src: "/assets/legacy/images/2.jpg",
      alt: "Çelik karkas montaj süreci sahada uygulama aşaması",
      title: "Saha Montaj Aşaması",
      description: "Çelik taşıyıcı sistem uygulama sürecinden gerçek şantiye karesi.",
    },
    {
      src: "/assets/legacy/images/4.jpg",
      alt: "Prefabrik ev panel montajı ve saha kurulum detayı",
      title: "Panel Kurulum Detayı",
      description: "Prefabrik panel montajında hız ve işçilik kalitesini gösteren görüntü.",
    },
    {
      src: "/assets/legacy/images/6.jpg",
      alt: "Bungalov dış cephe uygulaması ve izolasyon çalışması",
      title: "Dış Cephe Uygulaması",
      description: "İzolasyon ve kaplama aşamalarında sahadan alınmış proje fotoğrafı.",
    },
    {
      src: "/assets/legacy/images/8.jpg",
      alt: "Pimapen pencere montajı enerji verimli doğrama uygulaması",
      title: "Doğrama ve Pencere Montajı",
      description: "Enerji verimliliği odaklı pimapen uygulama sürecinden örnek kare.",
    },
    {
      src: "/assets/legacy/images/11.jpg",
      alt: "MTK arşiv görseli 11",
      title: "Arşiv Projesi 11",
      description: "Önceki dönem tamamlanan uygulamalardan seçilmiş referans.",
    },
    {
      src: "/assets/legacy/images/14.jpg",
      alt: "MTK arşiv görseli 14",
      title: "Arşiv Projesi 14",
      description: "Teslim edilmiş projeden cephe ve çevre düzeni görünümü.",
    },
    {
      src: "/assets/legacy/images/17.jpg",
      alt: "MTK arşiv görseli 17",
      title: "Arşiv Projesi 17",
      description: "Saha koşullarında uygulanmış örnek proje vitrini.",
    },
    {
      src: "/assets/legacy/images/prefabrik-ev.png",
      alt: "MTK arşiv prefabrik ev görseli",
      title: "Prefabrik Örnek Proje",
      description: "Model ve uygulama referansını bir arada gösteren arşiv görseli.",
    },
  ];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BRAND,
    description:
      "Balıkesir ve çevresinde çelik konstrüksiyon evler, prefabrik evler, bungalov ve PVC doğrama çözümleri.",
    areaServed: "Balıkesir",
    telephone: `+${PHONE_RAW}`,
    url: SITE_URL,
    sameAs: [WHATSAPP_URL],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const showcaseCards = [
    ...projects.slice(0, 6).map((project) => ({
      src: project.image,
      alt: project.alt,
      title: project.title,
      description: project.description,
    })),
    ...showcaseImages,
  ];

  return (
    <div className="bg-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="section-wrap grid gap-6 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:py-24">
        <article className="space-y-6">
          <p className="text-sm font-semibold tracking-[0.22em] text-orange-300">PREMIUM YAPI MARKASI</p>
          <h1 className="max-w-4xl font-mono text-4xl font-bold leading-tight text-white md:text-6xl">
            Depreme Dayanıklı Çelik Yapılarla Geleceğe Güvenle
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-slate-200 md:text-lg">
            MTK House ile sağlam, estetik ve uzun ömürlü yaşam alanları inşa ediyoruz.
          </p>
          <ConversionButtons />
          <div className="flex flex-wrap gap-2">
            {trustBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-slate-600 px-3 py-1 text-xs text-slate-300"
              >
                {badge}
              </span>
            ))}
          </div>
        </article>
        <div className="glass-card overflow-hidden">
          {/* Ana sayfa Hero gorseli: /images/home/hero-main.webp */}
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80"
            alt="Depreme dayanıklı çelik konstrüksiyon modern villa dış cephe görünümü"
            width={1200}
            height={900}
            priority
            className="h-[52vh] max-h-[360px] w-full object-cover md:h-full md:max-h-none"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className="section-wrap pb-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {serviceCards.map((service) => (
            <article key={service.title} className="glass-card p-6">
              <h2 className="font-mono text-2xl font-bold text-white">{service.title}</h2>
              <p className="mt-2 text-base leading-relaxed text-slate-300">{service.description}</p>
              <p className="mt-3 text-xs text-slate-400">{service.keywords.join(" | ")}</p>
              <Link
                href={service.href}
                className="mt-4 inline-flex min-h-11 items-center rounded-lg border border-orange-400 px-4 text-base font-semibold text-orange-300 hover:bg-orange-500/20"
              >
                Detayları İncele
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap pb-8">
        <div className="glass-card p-6 md:p-8">
          <h2 className="font-mono text-3xl font-bold text-white">Referans Projeler ve Uygulama Vitrini</h2>
          <p className="mt-3 text-slate-300">
            Çalışmalarımızı detaylarıyla keşfetmek için görselleri kaydırın.
          </p>
          <div className="mt-5">
            <HorizontalCardCarousel items={showcaseCards} />
          </div>
        </div>
      </section>

      <section className="section-wrap pb-8">
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote key={item.name} className="glass-card p-6">
              <p className="text-slate-200">&quot;{item.text}&quot;</p>
              <footer className="mt-3 text-sm text-orange-300">{item.name}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="section-wrap pb-8">
        <div className="glass-card p-6 md:p-8">
          <h2 className="font-mono text-3xl font-bold text-white">Sıkça Sorulan Sorular</h2>
          <div className="mt-5 space-y-4">
            {faqItems.map((faq) => (
              <details key={faq.question} className="rounded-lg border border-slate-700 bg-slate-950 p-4">
                <summary className="cursor-pointer font-semibold text-white">{faq.question}</summary>
                <p className="mt-2 text-sm text-slate-300">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap pb-16">
        <LeadForm />
        <div className="mt-4 rounded-xl border border-slate-700 bg-slate-950 p-4 text-sm text-slate-300">
          <h3 className="font-semibold text-white">İletişim Bilgileri</h3>
          <div className="mt-2 space-y-2">
            {contacts.map((contact) => (
              <p key={contact.name} className="flex items-center gap-2">
                <FaUserTie className="text-orange-300" />
                <span>{contact.name}:</span>
                <a className="text-orange-300 hover:text-orange-200" href={`tel:+${contact.phoneRaw}`}>
                  {contact.phoneDisplay}
                </a>
              </p>
            ))}
            <p className="flex items-center gap-2">
              <FaSquareEnvelope className="text-orange-300" />
              <span>E-posta:</span>
              <a className="text-orange-300 hover:text-orange-200" href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <FaInstagram className="text-orange-300" />
              <span>Instagram:</span>
              <a className="text-orange-300 hover:text-orange-200" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                @mtk_celikyapi
              </a>
            </p>
            <p className="flex items-center gap-2">
              <FaPhone className="text-orange-300" />
              <span>Hızlı Arama:</span>
              <a className="text-orange-300 hover:text-orange-200" href={`tel:+${PHONE_RAW}`}>
                {PHONE_DISPLAY}
              </a>{" "}
              /{" "}
              <a className="text-orange-300 hover:text-orange-200" href={`tel:+${SECOND_PHONE_RAW}`}>
                {SECOND_PHONE_DISPLAY}
              </a>
            </p>
          </div>
        </div>
        <div className="mt-4 overflow-hidden rounded-xl border border-slate-700">
          <iframe
            src={MAP_EMBED_URL}
            width="100%"
            height="420"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="MTK House Konum"
          />
        </div>
      </section>
    </div>
  );
}
