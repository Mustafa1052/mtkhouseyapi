import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ConversionButtons } from "@/components/ConversionButtons";
import { LeadForm } from "@/components/LeadForm";
import { ServiceImageSlider } from "@/components/ServiceImageSlider";
import { buildMetadata } from "@/lib/seo";
import { buildLocalFaq, getLocalLanding, getLocalSections, localSlugs, servedDistrictLabel } from "@/lib/local-seo";
import {
  ADDRESS_TEXT,
  BRAND,
  MAP_EMBED_URL,
  PHONE_DISPLAY,
  PHONE_RAW,
  SERVICE_DISTRICTS,
  WORKING_HOURS,
} from "@/lib/site";

export function generateStaticParams() {
  return localSlugs.map((localSlug) => ({ localSlug }));
}

export function generateMetadata({ params }: { params: { localSlug: string } }): Metadata {
  const data = getLocalLanding(params.localSlug);
  if (!data) return {};
  return buildMetadata({
    title: data.metaTitle,
    description: data.metaDescription,
    path: `/${data.slug}`,
    keywords: [data.primaryKeyword, ...data.secondaryKeywords, ...data.longTailKeywords],
  });
}

export default function LocalSeoLandingPage({ params }: { params: { localSlug: string } }) {
  const data = getLocalLanding(params.localSlug);
  if (!data) notFound();

  const sections = getLocalSections(data);
  const faq = buildLocalFaq(data);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BRAND,
    telephone: `+${PHONE_RAW}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS_TEXT,
      addressLocality: "Balıkesir",
      addressCountry: "TR",
    },
    openingHours: "Mo-Sa 08:30-19:00",
    areaServed: SERVICE_DISTRICTS,
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: data.serviceName,
    name: data.metaTitle,
    areaServed: SERVICE_DISTRICTS,
    provider: {
      "@type": "LocalBusiness",
      name: BRAND,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="bg-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="section-wrap py-14 md:py-20">
        <p className="text-sm font-semibold tracking-widest text-orange-300">BALIKESIR HIZMET SAYFASI</p>
        <h1 className="mt-3 max-w-5xl font-mono text-4xl font-bold text-white md:text-5xl">{data.h1}</h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-200">{data.metaDescription}</p>
        <div className="mt-6">
          <ConversionButtons />
        </div>
      </section>

      <section className="section-wrap pb-8">
        <div className="glass-card p-6 md:p-8">
          <h2 className="font-mono text-2xl font-bold text-white">Hizmet Verilen İlçeler</h2>
          <p className="mt-2 text-slate-300">{servedDistrictLabel}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {SERVICE_DISTRICTS.map((district) => (
              <span key={district} className="rounded-full border border-slate-600 px-3 py-1 text-xs text-slate-300">
                {district}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap pb-8">
        <div className="glass-card p-6 md:p-8">
          <h2 className="font-mono text-2xl font-bold text-white">Model ve Proje Görselleri</h2>
          <p className="mt-2 text-sm text-slate-300">
            Model karşılaştırması ve uygulama süreçlerini gösteren proje fotoğrafları.
          </p>
          <div className="mt-5">
            <ServiceImageSlider images={data.gallery} />
          </div>
        </div>
      </section>

      <section className="section-wrap grid gap-6 pb-8 lg:grid-cols-[1.3fr_0.7fr]">
        <article className="space-y-8 rounded-2xl border border-slate-700 bg-slate-950 p-6 md:p-8">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-mono text-2xl font-bold text-white">{section.heading}</h2>
              <div className="mt-3 space-y-4 text-slate-200">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </article>
        <div className="space-y-6">
          <LeadForm compact heading="Balıkesir İçin Hızlı Teklif Al" />
          <aside className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
            <h3 className="font-mono text-xl font-bold text-white">NAP ve Yerel Bilgiler</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-200">
              <li>
                Firma: <strong>{BRAND}</strong>
              </li>
              <li>
                Adres: <strong>{ADDRESS_TEXT}</strong>
              </li>
              <li>
                Telefon:{" "}
                <a className="text-orange-300 hover:text-orange-200" href={`tel:+${PHONE_RAW}`}>
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                Çalışma Saatleri: <strong>{WORKING_HOURS}</strong>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section-wrap pb-8">
        <div className="glass-card p-6 md:p-8">
          <h2 className="font-mono text-2xl font-bold text-white">Sıkça Sorulan Sorular</h2>
          <div className="mt-4 space-y-3">
            {faq.map((item) => (
              <details key={item.question} className="rounded-lg border border-slate-700 bg-slate-950 p-4">
                <summary className="cursor-pointer font-semibold text-white">{item.question}</summary>
                <p className="mt-2 text-sm text-slate-300">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap pb-8">
        <div className="glass-card p-6 md:p-8">
          <h2 className="font-mono text-2xl font-bold text-white">Google Maps ve Yerel Hizmet Noktası</h2>
          <div className="mt-4 overflow-hidden rounded-xl border border-slate-700">
            <iframe
              src={MAP_EMBED_URL}
              width="100%"
              height="360"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MTK House Balıkesir Konum"
            />
          </div>
        </div>
      </section>

      <section className="section-wrap pb-16">
        <div className="glass-card p-6 md:p-8">
          <h2 className="font-mono text-2xl font-bold text-white">İlgili İlçe Sayfaları</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {localSlugs
              .filter((slug) => !slug.startsWith("balikesir-"))
              .map((slug) => (
                <Link
                  key={slug}
                  href={`/${slug}`}
                  className="rounded-xl border border-slate-700 bg-slate-950 p-4 text-sm text-slate-200 hover:border-orange-400 hover:text-orange-300"
                >
                  {slug.replaceAll("-", " ")}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
