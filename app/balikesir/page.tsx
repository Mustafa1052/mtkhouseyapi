import type { Metadata } from "next";
import Link from "next/link";
import { ConversionButtons } from "@/components/ConversionButtons";
import { buildMetadata } from "@/lib/seo";
import { localDistrictLinks, localSlugs } from "@/lib/local-seo";

export const metadata: Metadata = buildMetadata({
  title: "Balıkesir Hizmet Bölgeleri | MTK House",
  description:
    "Balıkesir merkez ve ilçelerinde çelik ev, prefabrik ev, bungalov, pimapen ve cam balkon hizmet bölgeleri.",
  path: "/balikesir",
  keywords: ["balıkesir çelik ev", "balıkesir prefabrik ev", "balıkesir bungalov", "balıkesir pimapen"],
});

const districtLabelMap: Record<string, string> = {
  "/edremit-celik-ev": "Edremit Çelik Ev",
  "/bandirma-prefabrik-ev": "Bandırma Prefabrik Ev",
  "/ayvalik-bungalov-ev": "Ayvalık Bungalov Ev",
  "/burhaniye-celik-konstruksiyon": "Burhaniye Çelik Konstrüksiyon",
  "/gonen-prefabrik-ev": "Gönen Prefabrik Ev",
};

export default function BalikesirHubPage() {
  return (
    <div className="bg-slate-900">
      <section className="section-wrap py-14 md:py-20">
        <h1 className="font-mono text-4xl font-bold text-white md:text-5xl">Balıkesir ve İlçe Hizmet Ağı</h1>
        <p className="mt-4 max-w-3xl text-slate-200">
          Balıkesir merkez ve çevre ilçelerde sunduğumuz çelik, prefabrik, bungalov, pimapen ve cam balkon
          hizmet sayfalarına buradan ulaşabilirsiniz.
        </p>
        <div className="mt-6">
          <ConversionButtons />
        </div>
      </section>

      <section className="section-wrap pb-8">
        <div className="glass-card p-6 md:p-8">
          <h2 className="font-mono text-2xl font-bold text-white">Balıkesir Ana Hizmet Sayfaları</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {localSlugs
              .filter((slug) => slug.startsWith("balikesir-"))
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

      <section className="section-wrap pb-16">
        <div className="glass-card p-6 md:p-8">
          <h2 className="font-mono text-2xl font-bold text-white">İlçe Hizmet Sayfaları</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {localDistrictLinks.map((href) => (
              <Link
                key={href}
                href={href}
                className="rounded-xl border border-slate-700 bg-slate-950 p-4 text-sm text-slate-200 hover:border-orange-400 hover:text-orange-300"
              >
                {districtLabelMap[href]}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
