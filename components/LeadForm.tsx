"use client";

import { FormEvent, useState } from "react";

type LeadFormProps = {
  heading?: string;
  compact?: boolean;
};

const services = [
  "Çelik Konstrüksiyon Ev",
  "Prefabrik Ev",
  "Bungalov Ev",
  "Pimapen ve PVC Doğrama",
  "Anahtar Teslim İnşaat",
];

export function LeadForm({ heading = "Hızlı Teklif Formu", compact = false }: LeadFormProps) {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<string>("");
  const [error, setError] = useState<string>("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setOk("");
    setError("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      district: String(formData.get("district") ?? ""),
      service: String(formData.get("service") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("Form gönderilemedi.");

      const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
      gtag?.("event", "generate_lead", {
        method: "form_submit",
        service: payload.service,
      });

      event.currentTarget.reset();
      setOk("Talebiniz alındı. En kısa sürede sizi arayacağız.");
    } catch {
      setError("Bir hata oluştu. Lütfen telefon veya WhatsApp ile bize ulaşın.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="teklif-formu"
      className="rounded-2xl border border-slate-700 bg-slate-900/80 p-6 shadow-xl shadow-black/20 md:p-8"
    >
      <h2 className={`${compact ? "text-2xl" : "text-3xl"} font-bold text-white`}>{heading}</h2>
      <p className="mt-2 text-base leading-relaxed text-slate-300">
        İsim, telefon ve hizmet türünü girin. Uzman ekibimiz sizinle hızla iletişime geçsin.
      </p>
      <form onSubmit={handleSubmit} className="mt-6 grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-1 text-base text-slate-200">
          İsim
          <input
            name="name"
            required
            className="rounded-lg border border-slate-600 bg-slate-950 px-4 py-3 text-base outline-none ring-orange-500 focus:ring-2"
            placeholder="Ad Soyad"
          />
        </label>
        <label className="flex flex-col gap-1 text-base text-slate-200">
          Telefon
          <input
            name="phone"
            type="tel"
            inputMode="numeric"
            pattern="[0-9\\s()+-]{10,}"
            required
            className="rounded-lg border border-slate-600 bg-slate-950 px-4 py-3 text-base outline-none ring-orange-500 focus:ring-2"
            placeholder="05xx xxx xx xx"
          />
        </label>
        <label className="flex flex-col gap-1 text-base text-slate-200">
          İl / İlçe
          <input
            name="district"
            required
            className="rounded-lg border border-slate-600 bg-slate-950 px-4 py-3 text-base outline-none ring-orange-500 focus:ring-2"
            placeholder="Balıkesir / Edremit"
          />
        </label>
        <label className="flex flex-col gap-1 text-base text-slate-200">
          Hizmet Türü
          <select
            name="service"
            required
            className="rounded-lg border border-slate-600 bg-slate-950 px-4 py-3 text-base outline-none ring-orange-500 focus:ring-2"
          >
            <option value="">Seçiniz</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1 text-base text-slate-200 md:col-span-2">
          Mesaj
          <textarea
            name="message"
            rows={4}
            className="rounded-lg border border-slate-600 bg-slate-950 px-4 py-3 text-base outline-none ring-orange-500 focus:ring-2"
            placeholder="Projeniz hakkında kısaca bilgi verin"
          />
        </label>
        <button
          type="submit"
          disabled={loading}
          className="min-h-11 rounded-xl bg-orange-500 px-5 py-3 text-base font-semibold text-white transition hover:bg-orange-400 disabled:cursor-not-allowed disabled:opacity-70 md:col-span-2"
        >
          {loading ? "Gönderiliyor..." : "Teklif Talebi Gönder"}
        </button>
      </form>
      {ok ? <p className="mt-3 text-sm text-emerald-400">{ok}</p> : null}
      {error ? <p className="mt-3 text-sm text-red-400">{error}</p> : null}
    </section>
  );
}
