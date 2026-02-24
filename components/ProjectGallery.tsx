"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { FaBuilding, FaHouse, FaHouseChimney, FaToolbox } from "react-icons/fa6";
import type { ProjectItem } from "@/lib/site";

type Category = "all" | "celik" | "prefabrik" | "bungalov" | "pimapen";

const labels: Record<Category, string> = {
  all: "Tüm Projeler",
  celik: "Çelik",
  prefabrik: "Prefabrik",
  bungalov: "Bungalov",
  pimapen: "Pimapen",
};

const categoryIcons = {
  celik: <FaBuilding className="text-orange-300" />,
  prefabrik: <FaHouseChimney className="text-orange-300" />,
  bungalov: <FaHouse className="text-orange-300" />,
  pimapen: <FaToolbox className="text-orange-300" />,
};

export function ProjectGallery({ items }: { items: ProjectItem[] }) {
  const [category, setCategory] = useState<Category>("all");

  const filtered = useMemo(() => {
    if (category === "all") return items;
    return items.filter((item) => item.category === category);
  }, [category, items]);

  return (
    <section className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {Object.entries(labels).map(([value, label]) => (
          <button
            key={value}
            onClick={() => setCategory(value as Category)}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              category === value
                ? "border-orange-400 bg-orange-500/20 text-orange-200"
                : "border-slate-600 text-slate-300 hover:border-orange-400"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((project) => (
          <article
            key={project.id}
            className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-900"
          >
            {/* Gorsel kaynagi: lib/site.ts -> projects[].
               Dosya adi plani: /images/projeler/{project.id}.webp (or: prj-1.webp vb.) */}
            <Image
              src={project.image}
              alt={project.alt}
              width={900}
              height={640}
              className="h-56 w-full bg-slate-950 object-contain"
              loading="lazy"
            />
            <div className="p-4">
              <div className="flex items-center gap-2">
                {categoryIcons[project.category]}
                <h3 className="break-words text-lg font-bold text-white">{project.title}</h3>
              </div>
              <p className="mt-2 text-sm text-slate-300">{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
