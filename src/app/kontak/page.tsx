import { ClockIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/contact-form";
import { PageHeader } from "@/components/layout/page-header";
import { ContactCards } from "@/components/sections/contact-cards";
import { FormSection } from "@/components/sections/form-section";
import { MapEmbed } from "@/components/sections/map-embed";
import { siteConfig, sitePages, siteContact } from "@/config/site";
import { contactIntro } from "@/data/forms";
import { JsonLd } from "@/components/seo/json-ld";
import { cafeJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";

const page = sitePages.find((p) => p.path === "/kontak")!;

export const metadata: Metadata = pageMetadata({
  path: "/kontak",
  title: page.title,
  description: page.description,
});

const cards = [
  {
    icon: MapPinIcon,
    title: "Alamat",
    lines: [siteContact.address],
  },
  {
    icon: PhoneIcon,
    title: "Telepon",
    lines: siteContact.phones,
    href: `tel:${siteContact.phones[0].replace(/[\s-]/g, "")}`,
  },
  {
    icon: ClockIcon,
    title: "Jam Buka",
    lines: siteContact.hours.map((h) => `${h.days}: ${h.time}`),
  },
];

export default function ContactsPage() {
  return (
    <>
      <JsonLd data={cafeJsonLd()} />
      <PageHeader
        title={page.title}
        crumbs={[{ label: "Beranda", href: "/" }, { label: page.title }]}
      />
      <FormSection {...contactIntro} wide>
        <ContactForm />
      </FormSection>
      <ContactCards cards={cards} />
      <MapEmbed
        query={siteContact.address}
        title={`Lokasi ${siteConfig.name} di peta`}
      />
    </>
  );
}
