import type { Metadata } from "next";
import { ProjectGallery } from "@/components/ProjectGallery";
import { buildMetadata } from "@/lib/seo";
import { projects, type ProjectItem } from "@/lib/site";
import { listSubmissions } from "@/lib/storage";

export const metadata: Metadata = buildMetadata({
  title: "Projeler ve Galeri",
  description:
    "Çelik, prefabrik, bungalov ve pimapen projelerimizi kategori filtreleriyle inceleyin. SEO uyumlu alt metin ve açıklamalarla zengin galeri.",
  path: "/projeler",
  keywords: ["celik proje galerisi", "prefabrik ev projeleri", "bungalov projeleri", "pimapen uygulama"],
});

function inferCategory(value: string): ProjectItem["category"] | null {
  const normalized = value.trim().toLocaleLowerCase("tr");
  if (normalized === "celik" || normalized === "çelik") return "celik";
  if (normalized === "prefabrik") return "prefabrik";
  if (normalized === "bungalov") return "bungalov";
  if (normalized === "pimapen") return "pimapen";
  return null;
}

export default async function ProjectsPage() {
  const submissions = await listSubmissions();
  const approved = submissions
    .filter((item) => item.status === "approved")
    .map<ProjectItem | null>((item) => {
      const category = item.category ?? inferCategory(item.service);
      if (!category) return null;

      const title = (item.title ?? item.service ?? "").trim() || "Proje Görseli";
      const alt = (item.alt ?? "").trim() || `${title} proje görseli`;

      return {
        id: `sub-${item.id}`,
        title,
        category,
        image: item.imageUrl,
        alt,
        description: item.message,
      };
    })
    .filter(Boolean) as ProjectItem[];

  const allItems = [...approved, ...projects];

  return (
    <div className="bg-slate-900">
      <section className="section-wrap py-14 md:py-20">
        <h1 className="font-mono text-4xl font-bold text-white md:text-5xl">Projeler / Galeri</h1>
        <p className="mt-3 max-w-3xl text-slate-200">
          Gerçek uygulamalarımızı kategori bazlı inceleyin. Her görsel SEO uyumlu alt metin ve açıklamayla
          desteklenmiştir.
        </p>
      </section>

      <section className="section-wrap pb-10">
        <ProjectGallery items={allItems} />
      </section>
    </div>
  );
}
