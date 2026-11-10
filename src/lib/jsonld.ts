import { siteBusiness, siteConfig, siteContact } from "@/config/site";
import type { Post } from "@/data/blog";
import { media } from "@/data/media";
import { absoluteUrl } from "@/lib/seo";

const organizationId = `${siteConfig.url}/#organization`;
const cafeId = `${siteConfig.url}/#cafe`;

export function cafeJsonLd() {
  const { addressParts, geo, hours } = siteContact;
  return {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    "@id": cafeId,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    image: [media.heroRuang, media.heroBarista, media.heroSarapan].map((photo) =>
      absoluteUrl(photo.src),
    ),
    telephone: siteContact.phones[0],
    email: siteContact.email,
    priceRange: siteBusiness.priceRange,
    servesCuisine: siteBusiness.servesCuisine,
    address: {
      "@type": "PostalAddress",
      streetAddress: addressParts.street,
      addressLocality: addressParts.locality,
      addressRegion: addressParts.region,
      postalCode: addressParts.postalCode,
      addressCountry: addressParts.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.lat,
      longitude: geo.lng,
    },
    openingHoursSpecification: hours.map((row) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: row.dayOfWeek,
      opens: row.opens,
      closes: row.closes,
    })),
    hasMenu: absoluteUrl("/menu"),
    acceptsReservations: absoluteUrl("/reservasi"),
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: absoluteUrl("/reservasi"),
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
      result: { "@type": "Reservation", name: "Reservasi meja" },
    },
    sameAs: siteContact.socials.map((social) => social.href),
    parentOrganization: { "@id": organizationId },
  };
}

export function breadcrumbJsonLd(
  crumbs: readonly { label: string; href?: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    // Butir terakhir (halaman saat ini) boleh tanpa `item`.
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.label,
      ...(crumb.href ? { item: absoluteUrl(crumb.href) } : {}),
    })),
  };
}

export function blogPostingJsonLd(post: Post) {
  const url = absoluteUrl(`/blog/${post.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#post`,
    mainEntityOfPage: url,
    headline: post.title,
    description: post.excerpt,
    image: absoluteUrl(post.image.src),
    datePublished: post.isoDate,
    dateModified: post.isoDate,
    inLanguage: siteConfig.language,
    keywords: post.tags.join(", "),
    author: { "@id": organizationId },
    publisher: { "@id": organizationId },
  };
}

export function faqJsonLd(
  groups: readonly {
    items: readonly { question: string; answer: string }[];
  }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: groups.flatMap((group) =>
      group.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    ),
  };
}
