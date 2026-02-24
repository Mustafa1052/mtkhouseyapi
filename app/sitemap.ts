import type { MetadataRoute } from "next";
import { allBlogPosts } from "@/lib/blog-data";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/celik-konstruksiyon-evler",
    "/prefabrik-evler",
    "/bungalov-evler",
    "/pimapen-pvc-dograma",
    "/balikesir",
    "/balikesir-celik-konstruksiyon-ev",
    "/balikesir-prefabrik-ev",
    "/balikesir-bungalov-ev",
    "/balikesir-pimapen-pvc-dograma",
    "/edremit-celik-ev",
    "/bandirma-prefabrik-ev",
    "/ayvalik-bungalov-ev",
    "/burhaniye-celik-konstruksiyon",
    "/gonen-prefabrik-ev",
    "/projeler",
    "/blog",
    "/admin",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const blogPages = allBlogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}
