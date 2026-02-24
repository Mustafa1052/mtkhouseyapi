import type { Metadata } from "next";
import { BRAND, SITE_URL } from "@/lib/site";

type BuildMetaInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
}: BuildMetaInput): Metadata {
  const canonical = `${SITE_URL}${path}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: BRAND,
      locale: "tr_TR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function serviceProductSchema(serviceName: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${BRAND} ${serviceName}`,
    description,
    brand: BRAND,
    areaServed: "Balikesir",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "TRY",
      url: SITE_URL,
    },
  };
}
