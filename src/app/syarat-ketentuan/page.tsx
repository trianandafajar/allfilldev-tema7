import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { LegalDocument } from "@/components/sections/legal-document";
import { sitePages } from "@/config/site";
import { termsOfService } from "@/data/legal";
import { pageMetadata } from "@/lib/seo";

const page = sitePages.find((p) => p.path === "/syarat-ketentuan")!;

export const metadata: Metadata = pageMetadata({
  path: "/syarat-ketentuan",
  title: page.title,
  description: page.description,
});

export default function TermsPage() {
  return (
    <>
      <PageHeader
        title={page.title}
        crumbs={[{ label: "Beranda", href: "/" }, { label: page.title }]}
      />
      <LegalDocument {...termsOfService} />
    </>
  );
}
