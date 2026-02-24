"use client";

import Link from "next/link";
import { PHONE_RAW, WHATSAPP_URL } from "@/lib/site";

export function MobileStickyBar() {
  return (
    <div className="fixed right-0 bottom-0 left-0 z-50 border-t border-slate-700 bg-slate-950/95 p-2 backdrop-blur md:hidden">
      <div className="grid grid-cols-3 gap-2">
        <a
          href={`tel:+${PHONE_RAW}`}
          className="inline-flex min-h-11 items-center justify-center rounded-lg bg-orange-500 px-3 text-sm font-semibold text-white"
        >
          Ara
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 items-center justify-center rounded-lg border border-emerald-400 bg-emerald-600/20 px-3 text-sm font-semibold text-emerald-300"
        >
          WhatsApp
        </a>
        <Link
          href="#teklif-formu"
          className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-500 bg-slate-900 px-3 text-sm font-semibold text-slate-100"
        >
          Teklif Al
        </Link>
      </div>
    </div>
  );
}
