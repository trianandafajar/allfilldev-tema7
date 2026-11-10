import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { ContactBanner } from "@/components/sections/contact-banner";
import { GallerySlider } from "@/components/sections/gallery-slider";
import { InfoBlock } from "@/components/sections/info-block";
import { ServicesMain } from "@/components/sections/services-main";
import { TestimonialCards } from "@/components/sections/testimonial-cards";
import { sitePages } from "@/config/site";
import { servicesContent } from "@/data/services";
import { pageMetadata } from "@/lib/seo";

const page = sitePages.find((p) => p.path === "/layanan")!;

export const metadata: Metadata = pageMetadata({
  path: "/layanan",
  title: page.title,
  description: page.description,
});

export default function ServicesPage() {
  const { main, gallery, info, testimonials, contacts } = servicesContent;

  return (
    <>
      <PageHeader
        title="Layanan"
        crumbs={[{ label: "Beranda", href: "/" }, { label: "Layanan" }]}
      />
      <ServicesMain {...main}>
        <GallerySlider {...gallery} />
      </ServicesMain>
      <InfoBlock {...info} />
      <TestimonialCards {...testimonials} />
      <ContactBanner {...contacts} />
    </>
  );
}
