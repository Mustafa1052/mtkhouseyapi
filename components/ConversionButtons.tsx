"use client";

import Link from "next/link";
import { PHONE_RAW, WHATSAPP_RAW } from "@/lib/site";

function track(eventName: string, data: Record<string, string>) {
  if (typeof window === "undefined") return;
  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
  gtag?.("event", eventName, data);
}

type ConversionButtonsProps = {
  compact?: boolean;
};

export function ConversionButtons({ compact = false }: ConversionButtonsProps) {
  const buttonClass = compact
    ? "inline-flex min-h-11 items-center justify-center rounded-lg px-4 text-sm font-semibold"
    : "inline-flex min-h-11 items-center justify-center rounded-xl px-5 text-base font-semibold";

  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={`tel:+${PHONE_RAW}`}
        onClick={() => track("generate_lead", { method: "phone" })}
        className={`${buttonClass} bg-orange-500 text-white transition hover:bg-orange-400`}
      >
        Hemen Ara
      </a>
      <a
        href={`https://wa.me/${WHATSAPP_RAW}?text=Merhaba%20MTK%20House,%20teklif%20almak%20istiyorum.`}
        target="_blank"
        rel="noreferrer"
        onClick={() => track("generate_lead", { method: "whatsapp" })}
        className={`${buttonClass} border border-slate-500 bg-slate-900 text-white transition hover:border-orange-400`}
      >
        WhatsApp Teklif Al
      </a>
      <Link
        href="/projeler"
        onClick={() => track("view_item_list", { item_list_name: "projeler" })}
        className={`${buttonClass} hidden border border-slate-600 text-slate-100 transition hover:border-orange-400 sm:inline-flex`}
      >
        Projeleri İncele
      </Link>
    </div>
  );
}
