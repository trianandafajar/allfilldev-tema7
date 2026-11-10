import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";
import { Banners } from "@/components/sections/banners";
import { CtaBanner } from "@/components/sections/cta-banner";
import { MenuList } from "@/components/sections/menu-list";
import { SectionHeading } from "@/components/sections/section-heading";
import { sitePages } from "@/config/site";
import {
  menuBanners,
  menuListCategories,
  menuPageContent,
} from "@/data/menu-page";
import { pageMetadata } from "@/lib/seo";

const page = sitePages.find((p) => p.path === "/menu")!;

export const metadata: Metadata = pageMetadata({
  path: "/menu",
  title: page.title,
  description: page.description,
});

export default function MenuPage() {
  const { heading, defaultCategory, booking } = menuPageContent;

  return (
    <>
      <PageHeader
        title="Menu"
        crumbs={[{ label: "Beranda", href: "/" }, { label: "Menu" }]}
      />
      <Section>
        <Container>
          <SectionHeading centered {...heading} />
          <MenuList
            categories={menuListCategories}
            defaultCategory={defaultCategory}
          />
        </Container>
      </Section>
      <Banners items={menuBanners} />
      <CtaBanner {...booking} />
    </>
  );
}
