import type { Metadata } from "next";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Hero } from "@/components/sections/hero";
import { MapEmbed } from "@/components/sections/map-embed";
import { MenuSection } from "@/components/sections/menu-section";
import { OfferBanner } from "@/components/sections/offer-banner";
import { Presentation } from "@/components/sections/presentation";
import { RecentPosts } from "@/components/sections/recent-posts";
import { JsonLd } from "@/components/seo/json-ld";
import { Testimonials } from "@/components/sections/testimonials";
import { siteConfig, siteContact } from "@/config/site";
import { posts } from "@/data/blog";
import { homeContent } from "@/data/home";
import { menuCategories, newItems } from "@/data/menu";
import { cafeJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/",
  description: siteConfig.description,
});

export default function Home() {
  const c = homeContent;

  return (
    <>
      <JsonLd data={cafeJsonLd()} />
      <Hero {...c.hero} />
      <OfferBanner {...c.offer} />
      <MenuSection
        {...c.menu}
        categories={menuCategories}
        flushBottom
      />
      <CtaBanner {...c.privateDining} />
      <Presentation {...c.presentation} items={newItems} />
      <Testimonials {...c.testimonials} />
      <RecentPosts {...c.recent} posts={posts.slice(0, 2)} />
      <CtaBanner {...c.reservation} />
      <MapEmbed query={siteContact.address} title="Lokasi CafeId" />
    </>
  );
}
