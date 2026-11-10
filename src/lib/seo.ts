import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function serializeJsonLd(data: Record<string, unknown>) {
  return JSON.stringify(data).replace(/</g, "\u003c");
}

type PageMeta = {
  path: string;
  title?: string;
  description: string;
  type?: "website" | "article";
  publishedTime?: string;
};

// Mengisi title, canonical, Open Graph, dan Twitter sekaligus. Open Graph di halaman
// menggantikan seluruh objek di layout, jadi siteName dan locale ditulis ulang di sini.
// Gambar share datang dari file opengraph-image terdekat (lihat src/app/opengraph-image.tsx).
export function pageMetadata({
  path,
  title,
  description,
  type = "website",
  publishedTime,
}: PageMeta): Metadata {
  const shownTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      url: path,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      title: shownTitle,
      description,
      ...(type === "article" && publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: shownTitle,
      description,
    },
  };
}
