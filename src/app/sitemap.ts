import type { MetadataRoute } from "next";
import { sitePages } from "@/config/site";
import { posts } from "@/data/blog";
import { absoluteUrl } from "@/lib/seo";

// Tanpa new Date(): lastModified datang dari data tetap (sitePages dan isoDate artikel).
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = sitePages.map((page) => ({
    url: absoluteUrl(page.path),
    lastModified: page.lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
    images: "image" in page ? [absoluteUrl(page.image.src)] : undefined,
    alternates: { languages: { id: absoluteUrl(page.path) } },
  }));

  const articles = posts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: post.isoDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
    images: [absoluteUrl(post.image.src)],
    alternates: { languages: { id: absoluteUrl(`/blog/${post.slug}`) } },
  }));

  return [...pages, ...articles];
}
