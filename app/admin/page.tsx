import type { Metadata } from "next";
import { AdminPanel } from "@/components/AdminPanel";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Admin Paneli",
  description: "MTK House basit admin paneli: proje gorseli onaylama ve yayin yonetimi.",
  path: "/admin",
  keywords: ["admin panel", "proje gorsel onayi"],
});

export default function AdminPage() {
  return (
    <div className="bg-slate-900">
      <div className="section-wrap max-w-6xl py-10 md:py-14">
        <AdminPanel />
      </div>
    </div>
  );
}
