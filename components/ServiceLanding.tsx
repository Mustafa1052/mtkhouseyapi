import { ConversionButtons } from "@/components/ConversionButtons";
import { LeadForm } from "@/components/LeadForm";
import { ServiceImageSlider } from "@/components/ServiceImageSlider";
import { serviceProductSchema } from "@/lib/seo";
import { faqItems, trustBadges } from "@/lib/site";

type ServiceLandingProps = {
  title: string;
  subtitle: string;
  points: string[];
  content: { heading: string; paragraphs: string[] }[];
  schemaDescription: string;
  galleryImages?: { src: string; alt: string }[];
  extraContent?: React.ReactNode;
};

export function ServiceLanding({
  title,
  subtitle,
  points,
  content,
  schemaDescription,
  galleryImages = [],
  extraContent,
}: ServiceLandingProps) {
  const schema = serviceProductSchema(title, schemaDescription);

  return (
    <div className="bg-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className="section-wrap py-14 md:py-20">
        <p className="text-sm font-semibold tracking-wider text-orange-300">Hizmet Sayfası</p>
        <h1 className="mt-3 max-w-4xl font-mono text-4xl font-bold leading-tight text-white md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-200 md:text-lg">{subtitle}</p>
        <div className="mt-7">
          <ConversionButtons />
        </div>
      </section>

      <section className="section-wrap pb-8">
        <div className="glass-card p-6 md:p-8">
          <h2 className="font-mono text-2xl font-bold text-white">Neden MTK House?</h2>
          <ul className="mt-4 grid gap-4 md:grid-cols-2">
            {points.map((item) => (
              <li key={item} className="rounded-lg border border-slate-700 bg-slate-950 p-5 text-base text-slate-200">
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            {trustBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-slate-600 px-3 py-1 text-xs text-slate-300"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {extraContent ? <section className="section-wrap pb-8">{extraContent}</section> : null}

      {galleryImages.length ? (
        <section className="section-wrap pb-8">
          <div className="glass-card p-6 md:p-8">
            <h2 className="font-mono text-2xl font-bold text-white">Proje Görselleri</h2>
            <p className="mt-2 text-sm text-slate-300">
              Bu hizmete ait örnek uygulamalar ve yapım esnası sahne görselleri.
            </p>
            <div className="mt-5">
              <ServiceImageSlider images={galleryImages} />
            </div>
          </div>
        </section>
      ) : null}

      <section className="section-wrap grid gap-6 pb-16 lg:grid-cols-[1.3fr_0.7fr]">
        <article className="space-y-7 rounded-2xl border border-slate-700 bg-slate-950 p-6 md:p-8">
          {content.map((section, index) => (
            <section key={section.heading}>
              <h2 className="font-mono text-2xl font-bold text-white">{section.heading}</h2>
              <div className="mt-3 space-y-4 text-base leading-relaxed text-slate-200">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {(index + 1) % 2 === 0 && index < content.length - 1 ? (
                <div className="mt-5 rounded-xl border border-orange-400/40 bg-slate-900 p-4">
                  <p className="text-sm font-semibold text-orange-300">Bu aşamada hızlı teklif alabilirsiniz.</p>
                  <div className="mt-3">
                    <ConversionButtons compact />
                  </div>
                </div>
              ) : null}
            </section>
          ))}
        </article>
        <div className="space-y-6">
          <LeadForm compact heading="Bu Hizmet İçin Teklif Al" />
        </div>
      </section>

      <section className="section-wrap pb-16">
        <div className="glass-card p-6 md:p-8">
          <h2 className="font-mono text-2xl font-bold text-white">Sıkça Sorulan Sorular</h2>
          <div className="mt-4 space-y-3">
            {faqItems.slice(0, 4).map((faq) => (
              <details key={faq.question} className="rounded-lg border border-slate-700 bg-slate-950 p-4">
                <summary className="cursor-pointer text-base font-semibold text-white">{faq.question}</summary>
                <p className="mt-2 text-base leading-relaxed text-slate-300">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
