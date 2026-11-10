import { siteBusiness, siteConfig, siteContact, sitePages } from "@/config/site";
import { posts } from "@/data/blog";
import { absoluteUrl } from "@/lib/seo";

export function GET() {
  const pages = sitePages
    .map((page) => `- [${page.title}](${absoluteUrl(page.path)}): ${page.description}`)
    .join("\n");
  const articles = posts
    .map((post) => `- [${post.title}](${absoluteUrl(`/blog/${post.slug}`)}): ${post.excerpt}`)
    .join("\n");
  const hours = siteContact.hours.map((row) => `- ${row.days}: ${row.time}`).join("\n");

  const body = `# ${siteConfig.name}

> ${siteConfig.description}

## Info

- Alamat: ${siteContact.address}
- Telepon: ${siteContact.phones.join(", ")}
- Email: ${siteContact.email}
- Kisaran harga: ${siteBusiness.priceRange}
- Sajian: ${siteBusiness.servesCuisine.join(", ")}

## Jam buka

${hours}

## Halaman

${pages}

## Artikel

${articles}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
