import { WHATSAPP_URL } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp ile iletişime geç"
      className="fixed right-5 bottom-5 z-50 hidden items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 font-semibold text-white shadow-lg shadow-emerald-900/30 transition hover:bg-emerald-400 md:inline-flex"
    >
      <span>WhatsApp</span>
    </a>
  );
}
