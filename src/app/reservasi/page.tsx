import type { Metadata } from "next";
import { ReservationForm } from "@/components/forms/reservation-form";
import { PageHeader } from "@/components/layout/page-header";
import { FaqSection } from "@/components/sections/faq-section";
import { FormSection } from "@/components/sections/form-section";
import { MapEmbed } from "@/components/sections/map-embed";
import { ReservationAside } from "@/components/sections/reservation-aside";
import { Steps } from "@/components/sections/steps";
import { siteConfig, siteContact, sitePages } from "@/config/site";
import { faqGroups } from "@/data/faq";
import {
  reservationAside,
  reservationFaq,
  reservationIntro,
  reservationSteps,
} from "@/data/forms";
import { media } from "@/data/media";
import { pageMetadata } from "@/lib/seo";

const page = sitePages.find((p) => p.path === "/reservasi")!;

export const metadata: Metadata = pageMetadata({
  path: "/reservasi",
  title: page.title,
  description: page.description,
});

export default function ReservationsPage() {
  return (
    <>
      <PageHeader
        title={page.title}
        crumbs={[{ label: "Beranda", href: "/" }, { label: page.title }]}
      />
      <FormSection
        {...reservationIntro}
        aside={
          <ReservationAside
            image={media.ruangMakan}
            title={reservationAside.title}
            notes={reservationAside.notes}
            hours={siteContact.hours}
            phone={siteContact.phones[0]}
            address={siteContact.address}
          />
        }
      >
        <ReservationForm />
      </FormSection>
      <Steps {...reservationSteps} />
      <FaqSection
        {...reservationFaq}
        groups={faqGroups.filter((group) => group.id === "reservasi")}
      />
      <MapEmbed
        query={siteContact.address}
        title={`Lokasi ${siteConfig.name} di peta`}
      />
    </>
  );
}
