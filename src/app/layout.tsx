import type { Metadata, Viewport } from "next";
import { Montserrat, Raleway } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SkipLink } from "@/components/layout/skip-link";
import { SiteHeader } from "@/components/layout/site-header";
import { RevealObserver } from "@/components/motion/reveal-observer";
import { JsonLd } from "@/components/seo/json-ld";
import { siteBusiness, siteConfig, siteContact, sitePages } from "@/config/site";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  // Padanan token primary di globals.css (viewport tidak bisa membaca CSS variable).
  themeColor: "#b38e6a",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [...siteBusiness.keywords],
  authors: [{ name: siteConfig.name }],
  formatDetection: { telephone: true, address: true, email: true },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
  },
  twitter: { card: "summary_large_image" },
  other: {
    "geo.region": siteContact.regionCode,
    "geo.placename": siteContact.addressParts.locality,
    "geo.position": `${siteContact.geo.lat};${siteContact.geo.lng}`,
    ICBM: `${siteContact.geo.lat}, ${siteContact.geo.lng}`,
  },
};

const footerPaths = ["/faq", "/privasi", "/syarat-ketentuan"] as const;

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}/icon.svg`,
      sameAs: siteContact.socials.map((social) => social.href),
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      name: siteConfig.name,
      url: siteConfig.url,
      inLanguage: siteConfig.language,
      publisher: { "@id": `${siteConfig.url}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={siteConfig.language}
      className={`${montserrat.variable} ${raleway.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SkipLink targetId="konten" label="Lewati ke konten" />
        <JsonLd data={organizationJsonLd} />
        <RevealObserver />
        <SiteHeader
          name={siteConfig.name}
          nav={sitePages
            .filter((page) => page.inNav)
            .map((page) => ({ href: page.path, label: page.title }))}
          socials={siteContact.socials}
          cta={{ href: "/reservasi", label: "Reservasi" }}
        />
        <main id="konten" tabIndex={-1} className="flex-1 outline-none">{children}</main>
        <SiteFooter
          name={siteConfig.name}
          contact={siteContact}
          links={footerPaths.map((path) => {
            const page = sitePages.find((p) => p.path === path)!;
            return { href: page.path, label: page.title };
          })}
        />
      </body>
    </html>
  );
}
