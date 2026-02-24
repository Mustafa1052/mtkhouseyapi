"use client";

import { useState } from "react";
import type { ProjectSubmission } from "@/lib/storage";

export function AdminPanel() {
  const [key, setKey] = useState("");
  const [items, setItems] = useState<ProjectSubmission[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);
  const [uploadLoading, setUploadLoading] = useState(false);
  const [uploadMessage, setUploadMessage] = useState("");
  const [deleteLoadingId, setDeleteLoadingId] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<"all" | "pending" | "approved">("all");
  const [search, setSearch] = useState("");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [uploadTitle, setUploadTitle] = useState("");
  const [uploadCategory, setUploadCategory] = useState<"celik" | "prefabrik" | "bungalov" | "pimapen">("celik");
  const [uploadAlt, setUploadAlt] = useState("");
  const [uploadDesc, setUploadDesc] = useState("");
  const [uploadFile, setUploadFile] = useState<File | null>(null);

  async function loadSubmissions() {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(`/api/admin/projects?key=${encodeURIComponent(key)}`);
      if (!response.ok) throw new Error("yetkisiz");
      const data = (await response.json()) as ProjectSubmission[];
      setItems(data);
      setSelectedIds([]);
    } catch {
      setError("Yönetici anahtarı hatalı veya sunucu hatası oluştu.");
    } finally {
      setLoading(false);
    }
  }

  async function approve(id: string) {
    try {
      const response = await fetch("/api/admin/projects", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key, id }),
      });
      if (!response.ok) throw new Error("onay hatasi");
      await loadSubmissions();
    } catch {
      setError("Onaylama işlemi tamamlanamadı.");
    }
  }

  async function approveMany(ids: string[]) {
    if (!ids.length) return;
    setActionLoading(true);
    setError("");
    try {
      const response = await fetch("/api/admin/projects", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key, ids }),
      });
      if (!response.ok) throw new Error("onay hatasi");
      await loadSubmissions();
    } catch {
      setError("Toplu onay işlemi tamamlanamadı.");
    } finally {
      setActionLoading(false);
    }
  }

  async function removeSubmission(id: string) {
    setDeleteLoadingId(id);
    setUploadMessage("");
    setError("");
    try {
      const response = await fetch("/api/admin/projects", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key, id }),
      });
      if (!response.ok) throw new Error("silme hatasi");
      await loadSubmissions();
      setUploadMessage("Kayıt silindi.");
    } catch {
      setError("Silme işlemi tamamlanamadı.");
    } finally {
      setDeleteLoadingId(null);
    }
  }

  async function uploadApproved() {
    setUploadLoading(true);
    setUploadMessage("");
    setError("");
    try {
      if (!uploadFile) {
        setError("Lütfen bir görsel seçin.");
        return;
      }
      if (!uploadTitle.trim() || !uploadDesc.trim()) {
        setError("Lütfen başlık ve açıklama girin.");
        return;
      }

      const formData = new FormData();
      formData.set("key", key);
      formData.set("title", uploadTitle.trim());
      formData.set("category", uploadCategory);
      formData.set("alt", uploadAlt.trim());
      formData.set("message", uploadDesc.trim());
      formData.set("image", uploadFile);

      const response = await fetch("/api/admin/projects", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) throw new Error("yukleme hatasi");

      setUploadMessage("Görsel yüklendi ve galeriye eklendi (onaylı).");
      setUploadTitle("");
      setUploadAlt("");
      setUploadDesc("");
      setUploadFile(null);
      await loadSubmissions();
    } catch {
      setError("Görsel yükleme işlemi tamamlanamadı.");
    } finally {
      setUploadLoading(false);
    }
  }

  const pending = items.filter((item) => item.status === "pending");
  const approved = items.filter((item) => item.status === "approved");
  const searchKey = search.trim().toLocaleLowerCase("tr");

  function matchesSearch(item: ProjectSubmission) {
    if (!searchKey) return true;
    return `${item.name} ${item.phone} ${item.service} ${item.message}`.toLocaleLowerCase("tr").includes(searchKey);
  }

  const filteredPending = pending.filter(matchesSearch);
  const filteredApproved = approved.filter(matchesSearch);
  const allFilteredPendingSelected =
    filteredPending.length > 0 && filteredPending.every((item) => selectedIds.includes(item.id));

  function formatDate(value: string) {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return value;
    return new Intl.DateTimeFormat("tr-TR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  }

  return (
    <section className="space-y-6">
      <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5 md:p-6">
        <h1 className="text-3xl font-bold text-white">Admin Paneli</h1>
        <p className="mt-2 text-base leading-relaxed text-slate-300">
          Proje görsellerini yönetin, onaylayın ve galeriye ekleyin.
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-[1fr_auto]">
          <input
            value={key}
            onChange={(event) => setKey(event.target.value)}
            type="password"
            placeholder="Yönetici anahtarı"
            className="min-h-11 w-full rounded-lg border border-slate-600 bg-slate-950 px-4 py-3 text-base text-white outline-none ring-orange-500 focus:ring-2"
          />
          <button
            onClick={loadSubmissions}
            className="min-h-11 rounded-lg bg-orange-500 px-5 py-3 text-base font-semibold text-white transition hover:bg-orange-400"
          >
            {loading ? "Yükleniyor..." : "Verileri Getir"}
          </button>
        </div>
        {error ? <p className="mt-3 text-sm text-red-400">{error}</p> : null}
        {uploadMessage ? <p className="mt-3 text-sm text-emerald-400">{uploadMessage}</p> : null}
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-full border border-amber-500/50 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-300">
            Onay bekleyen: {pending.length}
          </span>
          <span className="rounded-full border border-emerald-500/50 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
            Onaylı: {approved.length}
          </span>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-[1fr_auto_auto]">
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="İsim, telefon veya hizmette ara"
            className="min-h-11 w-full rounded-lg border border-slate-600 bg-slate-950 px-4 py-3 text-base text-white outline-none ring-orange-500 focus:ring-2"
          />
          <select
            value={statusFilter}
            onChange={(event) => setStatusFilter(event.target.value as "all" | "pending" | "approved")}
            className="min-h-11 rounded-lg border border-slate-600 bg-slate-950 px-4 py-3 text-base text-white outline-none ring-orange-500 focus:ring-2"
          >
            <option value="all">Tümü</option>
            <option value="pending">Onay Bekleyen</option>
            <option value="approved">Onaylı</option>
          </select>
          <button
            onClick={() => approveMany(selectedIds)}
            disabled={!selectedIds.length || actionLoading}
            className="min-h-11 rounded-lg bg-emerald-600 px-4 py-3 text-base font-semibold text-white hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {actionLoading ? "Onaylanıyor..." : `Seçilileri Onayla (${selectedIds.length})`}
          </button>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5 md:p-6">
        <h2 className="text-xl font-semibold text-white">Galeriye Görsel Ekle (Admin)</h2>
        <p className="mt-2 text-sm text-slate-300">
          Bu bölüm sadece site sahibi içindir. Yüklenen görseller <strong className="text-white">doğrudan onaylı</strong>{" "}
          olarak kaydedilir.
        </p>
        <p className="mt-2 text-xs text-slate-400">Maksimum dosya boyutu: 8MB. Yükleme sonrası otomatik WebP’ye çevrilir.</p>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <label className="flex flex-col gap-1 text-sm text-slate-200">
            Başlık
            <input
              value={uploadTitle}
              onChange={(e) => setUploadTitle(e.target.value)}
              className="min-h-11 rounded-lg border border-slate-600 bg-slate-950 px-4 py-3 text-base text-white outline-none ring-orange-500 focus:ring-2"
              placeholder="Örn: Edremit Çelik Villa Projesi"
            />
          </label>
          <label className="flex flex-col gap-1 text-sm text-slate-200">
            Kategori
            <select
              value={uploadCategory}
              onChange={(e) =>
                setUploadCategory(e.target.value as "celik" | "prefabrik" | "bungalov" | "pimapen")
              }
              className="min-h-11 rounded-lg border border-slate-600 bg-slate-950 px-4 py-3 text-base text-white outline-none ring-orange-500 focus:ring-2"
            >
              <option value="celik">Çelik</option>
              <option value="prefabrik">Prefabrik</option>
              <option value="bungalov">Bungalov</option>
              <option value="pimapen">Pimapen</option>
            </select>
          </label>
          <label className="flex flex-col gap-1 text-sm text-slate-200 md:col-span-2">
            Alt metin (SEO) (opsiyonel)
            <input
              value={uploadAlt}
              onChange={(e) => setUploadAlt(e.target.value)}
              className="min-h-11 rounded-lg border border-slate-600 bg-slate-950 px-4 py-3 text-base text-white outline-none ring-orange-500 focus:ring-2"
              placeholder="Örn: Balıkesir'de deprem dayanımlı çelik villa dış cephe"
            />
          </label>
          <label className="flex flex-col gap-1 text-sm text-slate-200 md:col-span-2">
            Açıklama
            <textarea
              value={uploadDesc}
              onChange={(e) => setUploadDesc(e.target.value)}
              rows={3}
              className="rounded-lg border border-slate-600 bg-slate-950 px-4 py-3 text-base text-white outline-none ring-orange-500 focus:ring-2"
              placeholder="Kısa açıklama (galeride görünecek)."
            />
          </label>
          <label className="flex flex-col gap-1 text-sm text-slate-200 md:col-span-2">
            Görsel
            <input
              type="file"
              accept="image/webp,image/jpeg,image/png"
              onChange={(e) => setUploadFile(e.target.files?.[0] ?? null)}
              className="min-h-11 rounded-lg border border-slate-600 bg-slate-950 px-4 py-3 text-base text-slate-200"
            />
          </label>
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          <button
            onClick={uploadApproved}
            disabled={uploadLoading}
            className="min-h-11 rounded-lg bg-orange-500 px-5 py-3 text-base font-semibold text-white transition hover:bg-orange-400 disabled:opacity-60"
          >
            {uploadLoading ? "Yükleniyor..." : "Görseli Yükle"}
          </button>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        {(statusFilter === "all" || statusFilter === "pending") && (
          <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5 md:p-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-xl font-semibold text-white">Onay Bekleyen ({filteredPending.length})</h2>
              {filteredPending.length ? (
                <button
                  onClick={() =>
                    setSelectedIds((prev) =>
                      allFilteredPendingSelected
                        ? prev.filter((id) => !filteredPending.some((item) => item.id === id))
                        : [...new Set([...prev, ...filteredPending.map((item) => item.id)])],
                    )
                  }
                  className="rounded-lg border border-slate-600 px-3 py-2 text-xs font-semibold text-slate-200 hover:border-orange-400"
                >
                  {allFilteredPendingSelected ? "Seçimi Kaldır" : "Tümünü Seç"}
                </button>
              ) : null}
            </div>
          <div className="mt-4 space-y-3">
            {filteredPending.map((item) => (
              <article key={item.id} className="rounded-xl border border-slate-700 bg-slate-950 p-4">
                <label className="mb-3 flex items-center gap-2 text-sm text-slate-300">
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(item.id)}
                    onChange={(event) =>
                      setSelectedIds((prev) =>
                        event.target.checked ? [...prev, item.id] : prev.filter((id) => id !== item.id),
                      )
                    }
                  />
                  Toplu onay için seç
                </label>
                <div className="overflow-hidden rounded-lg border border-slate-700 bg-slate-900">
                  <img
                    src={item.imageUrl}
                    alt={`${item.name} yükleme görseli`}
                    className="h-44 w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="mt-3 text-sm text-slate-300">
                  <strong className="text-white">{item.name}</strong> - {item.service}
                </p>
                <p className="mt-1 text-sm text-slate-400">{item.message}</p>
                <p className="mt-1 text-xs text-slate-500">
                  Telefon: {item.phone} | Tarih: {formatDate(item.createdAt)}
                </p>
                <a
                  href={item.imageUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex min-h-11 items-center rounded-lg border border-slate-600 px-4 text-sm font-semibold text-orange-300 hover:border-orange-400 hover:text-orange-200"
                >
                  Görseli Aç
                </a>
                <div className="mt-3">
                  <button
                    onClick={() => approve(item.id)}
                    className="min-h-11 w-full rounded-lg bg-emerald-600 px-4 py-3 text-base font-semibold text-white hover:bg-emerald-500"
                  >
                    Onayla
                  </button>
                </div>
                <div className="mt-2">
                  <button
                    onClick={() => removeSubmission(item.id)}
                    disabled={deleteLoadingId === item.id}
                    className="min-h-11 w-full rounded-lg border border-red-500/50 bg-red-500/10 px-4 py-3 text-base font-semibold text-red-200 hover:bg-red-500/20 disabled:opacity-60"
                  >
                    {deleteLoadingId === item.id ? "Siliniyor..." : "Sil"}
                  </button>
                </div>
              </article>
            ))}
            {!filteredPending.length ? <p className="text-sm text-slate-400">Bekleyen kayıt yok.</p> : null}
          </div>
          </div>
        )}

        {(statusFilter === "all" || statusFilter === "approved") && (
          <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5 md:p-6">
            <h2 className="text-xl font-semibold text-white">Onaylı ({filteredApproved.length})</h2>
          <div className="mt-4 space-y-3">
            {filteredApproved.map((item) => (
              <article key={item.id} className="rounded-xl border border-slate-700 bg-slate-950 p-4">
                <div className="overflow-hidden rounded-lg border border-slate-700 bg-slate-900">
                  <img
                    src={item.imageUrl}
                    alt={`${item.name} onaylı görseli`}
                    className="h-44 w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="text-sm text-slate-300">
                  <strong className="text-white">{item.name}</strong> - {item.service}
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Telefon: {item.phone} | Tarih: {formatDate(item.createdAt)}
                </p>
                <a
                  href={item.imageUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex min-h-11 items-center rounded-lg border border-slate-600 px-4 text-sm font-semibold text-orange-300 hover:border-orange-400 hover:text-orange-200"
                >
                  Görseli Aç
                </a>
                <div className="mt-3">
                  <button
                    onClick={() => removeSubmission(item.id)}
                    disabled={deleteLoadingId === item.id}
                    className="min-h-11 w-full rounded-lg border border-red-500/50 bg-red-500/10 px-4 py-3 text-base font-semibold text-red-200 hover:bg-red-500/20 disabled:opacity-60"
                  >
                    {deleteLoadingId === item.id ? "Siliniyor..." : "Sil"}
                  </button>
                </div>
              </article>
            ))}
            {!filteredApproved.length ? <p className="text-sm text-slate-400">Henüz onaylı kayıt yok.</p> : null}
          </div>
          </div>
        )}
      </div>
    </section>
  );
}
