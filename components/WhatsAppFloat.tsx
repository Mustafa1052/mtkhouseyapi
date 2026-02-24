import { WHATSAPP_RAW } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_RAW}?text=Merhaba%20MTK%20House,%20hizmetleriniz%20hakkinda%20bilgi%20almak%20istiyorum.`}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp ile iletişime geç"
      className="fixed right-5 bottom-5 z-50 hidden items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 font-semibold text-white shadow-lg shadow-emerald-900/30 transition hover:bg-emerald-400 md:inline-flex"
    >
      <span>WhatsApp</span>
    </a>
  );
}
