import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { Benefits } from "@/components/sections/benefits";
import { Counter } from "@/components/sections/counter";
import { Invitation } from "@/components/sections/invitation";
import { PromoVideo } from "@/components/sections/promo-video";
import { TeamList } from "@/components/sections/team-list";
import { sitePages } from "@/config/site";
import { aboutContent } from "@/data/about";
import { teamHeading, teamMembers } from "@/data/team";
import { pageMetadata } from "@/lib/seo";

const page = sitePages.find((p) => p.path === "/tentang")!;

export const metadata: Metadata = pageMetadata({
  path: "/tentang",
  title: page.title,
  description: page.description,
});

export default function AboutPage() {
  const { benefits, promo, counter, invitation } = aboutContent;

  return (
    <>
      <PageHeader
        title="Tentang Kami"
        crumbs={[{ label: "Beranda", href: "/" }, { label: "Tentang" }]}
      />
      <Benefits items={benefits} />
      <PromoVideo {...promo} />
      <Counter {...counter} />
      <TeamList {...teamHeading} members={teamMembers.slice(0, 3)} />
      <Invitation {...invitation} />
    </>
  );
}
