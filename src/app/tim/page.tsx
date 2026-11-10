import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { CtaBanner } from "@/components/sections/cta-banner";
import { TeamList } from "@/components/sections/team-list";
import { sitePages } from "@/config/site";
import { teamHeading, teamMembers } from "@/data/team";
import { pageMetadata } from "@/lib/seo";

const page = sitePages.find((p) => p.path === "/tim")!;

export const metadata: Metadata = pageMetadata({
  path: "/tim",
  title: page.title,
  description: page.description,
});

export default function TeamPage() {
  return (
    <>
      <PageHeader
        title="Tim Kami"
        crumbs={[{ label: "Beranda", href: "/" }, { label: "Tim" }]}
      />
      <TeamList
        {...teamHeading}
        members={teamMembers}
        variant="rows"
        flushBottom={false}
      />
      <CtaBanner
        subtitle="bergabung bersama kami"
        title="Kami Mencari Talenta Baru"
        text="Suka kopi, masakan, atau melayani tamu? Kirim pesan dan ceritakan tentang diri Anda."
        action={{ href: "/kontak", label: "Hubungi kami" }}
      />
    </>
  );
}
