import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { allBlogPosts } from "@/lib/blog-data";

export const metadata: Metadata = buildMetadata({
  title: "Blog | Çelik, Prefabrik ve Yerel Yapı Rehberleri",
  description:
    "Balıkesir odaklı SEO blog içerikleri: çelik ev, prefabrik fiyatları, bungalov yapımı ve pimapen seçim rehberleri.",
  path: "/blog",
  keywords: ["celik ev blog", "prefabrik ev blog", "pimapen isi yalitimi", "2026 prefabrik ev fiyatlari"],
});

export default function BlogIndexPage() {
  return (
    <div className="bg-slate-900">
      <section className="section-wrap py-14 md:py-20">
        <h1 className="font-mono text-4xl font-bold text-white md:text-5xl">Blog</h1>
        <p className="mt-3 max-w-3xl text-slate-200">
          Google aramalarında görünürlüğü artıran, karar sürecini kolaylaştıran kapsamlı yerel yapı rehberleri.
        </p>
      </section>
      <section className="section-wrap pb-16">
        <div className="grid gap-6 md:grid-cols-2">
          {allBlogPosts.map((post) => (
            <article key={post.slug} className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-900">
              <Image
                src={post.coverImage}
                alt={post.coverAlt}
                width={1200}
                height={700}
                loading="lazy"
                className="h-56 w-full object-cover"
              />
              <div className="p-5">
                <h2 className="font-mono text-2xl font-bold text-white">{post.title}</h2>
                <p className="mt-3 text-slate-300">{post.excerpt}</p>
                <p className="mt-2 text-xs text-slate-400">{post.keywords.join(" | ")}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-flex rounded-lg border border-orange-400 px-4 py-2 text-sm font-semibold text-orange-300 hover:bg-orange-500/20"
                >
                  Yazıyı Oku
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
