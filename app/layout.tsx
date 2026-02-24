import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Inter, Montserrat } from "next/font/google";
import { FaInstagram, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import "./globals.css";
import { ConversionButtons } from "@/components/ConversionButtons";
import { MobileNav } from "@/components/MobileNav";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import {
  BRAND,
  CONTACT_EMAIL,
  ADDRESS_TEXT,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  PHONE_RAW,
  WHATSAPP_URL,
  SERVICE_DISTRICTS,
  SECOND_PHONE_DISPLAY,
  SECOND_PHONE_RAW,
  SERVICE_AREA,
  SITE_URL,
  navItems,
} from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BRAND} | Depreme Dayanıklı Çelik ve Prefabrik Yapılar`,
    template: `%s | ${BRAND}`,
  },
  description:
    "MTK House, Balıkesir ve çevresinde çelik konstrüksiyon ev, prefabrik ev, bungalov, pimapen, PVC doğrama ve cam balkon çözümleri sunar. Hemen ara, WhatsApp'tan teklif al.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="tr">
      <body className={`${inter.variable} ${montserrat.variable} antialiased`}>
        {gaId ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}');
`}
            </Script>
          </>
        ) : null}
        <header className="sticky top-0 z-40 border-b border-slate-700 bg-slate-950/95 backdrop-blur">
          <div className="section-wrap">
            <div className="py-3">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <Link href="/" className="font-mono text-2xl font-bold tracking-tight text-white">
                    {BRAND}
                  </Link>
                  <p className="text-sm text-slate-300">{SERVICE_AREA}</p>
                </div>
                <div className="flex flex-wrap items-center justify-end gap-2">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="inline-flex min-h-11 items-center gap-0 rounded-full border border-fuchsia-400 px-3 text-sm font-semibold text-fuchsia-300 transition hover:bg-fuchsia-500/20 sm:gap-2 sm:px-4"
                  >
                    <FaInstagram aria-hidden className="h-4 w-4 shrink-0" />
                    <span className="hidden sm:inline">Instagram</span>
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="WhatsApp"
                    className="inline-flex min-h-11 items-center gap-0 rounded-full border border-emerald-400 px-3 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-500/20 sm:gap-2 sm:px-4"
                  >
                    <FaWhatsapp aria-hidden className="h-4 w-4 shrink-0" />
                    <span className="hidden sm:inline">WhatsApp</span>
                  </a>
                  <a
                    href={`tel:+${PHONE_RAW}`}
                    aria-label={PHONE_DISPLAY}
                    className="inline-flex min-h-11 items-center gap-0 rounded-full border border-orange-400 px-3 text-sm font-semibold text-orange-300 transition hover:bg-orange-500/20 sm:gap-2 sm:px-4"
                  >
                    <FaPhoneAlt aria-hidden className="h-4 w-4 shrink-0" />
                    <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
                  </a>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between gap-3">
                <ThemeToggle />
                <MobileNav items={navItems} />
              </div>
            </div>
            <nav className="mb-3 hidden flex-wrap items-center gap-2 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm text-slate-200 transition hover:bg-slate-800 hover:text-orange-300"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t border-slate-700 bg-slate-950 py-10">
          <div className="section-wrap space-y-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <Link href="/" className="inline-flex items-center rounded-lg border border-slate-700 bg-slate-900 px-2 py-1">
                  <Image
                    src="/assets/legacy/logos/logo.svg"
                    alt={`${BRAND} logo`}
                    width={140}
                    height={42}
                    className="h-9 w-auto object-contain"
                  />
                </Link>
                <Link href="/" className="font-mono text-xl font-bold text-white hover:text-orange-300">
                  {BRAND}
                </Link>
                <p className="text-sm text-slate-300">
                  Depreme dayanıklı çelik yapılar ve enerji verimli yaşam alanları.
                </p>
                <div className="mt-3 space-y-1 text-sm text-slate-300">
                  <p>
                    <a href={`tel:+${PHONE_RAW}`} className="hover:text-orange-300">
                      {PHONE_DISPLAY}
                    </a>{" "}
                    |{" "}
                    <a href={`tel:+${SECOND_PHONE_RAW}`} className="hover:text-orange-300">
                      {SECOND_PHONE_DISPLAY}
                    </a>
                  </p>
                  <p>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-orange-300">
                      {CONTACT_EMAIL}
                    </a>
                  </p>
                  <p>
                    <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="hover:text-orange-300">
                      Instagram
                    </a>
                  </p>
                  <p>{ADDRESS_TEXT}</p>
                  <p>Hizmet İlçeleri: {SERVICE_DISTRICTS.join(", ")}</p>
                </div>
              </div>
              <ConversionButtons compact />
            </div>
            <p className="text-xs text-slate-400">
              (c) {new Date().getFullYear()} {BRAND}. Tüm hakları saklıdır.
            </p>
          </div>
        </footer>
        <MobileStickyBar />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
