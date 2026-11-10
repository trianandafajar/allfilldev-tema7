import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { CtaBanner } from "@/components/sections/cta-banner";
import { FaqSection } from "@/components/sections/faq-section";
import { JsonLd } from "@/components/seo/json-ld";
import { sitePages } from "@/config/site";
import { faqCta, faqGroups, faqIntro } from "@/data/faq";
import { faqJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";

const page = sitePages.find((p) => p.path === "/faq")!;

export const metadata: Metadata = pageMetadata({
  path: "/faq",
  title: page.title,
  description: page.description,
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqGroups)} />
      <PageHeader
        title={page.title}
        crumbs={[{ label: "Beranda", href: "/" }, { label: page.title }]}
      />
      <FaqSection {...faqIntro} groups={faqGroups} />
      <CtaBanner {...faqCta} />
    </>
  );
}
