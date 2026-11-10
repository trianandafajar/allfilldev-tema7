import type { Metadata } from "next";
import { Suspense } from "react";
import { BlogContent } from "@/components/blog/blog-content";
import { PageHeader } from "@/components/layout/page-header";
import { sitePages } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

const page = sitePages.find((p) => p.path === "/blog")!;

export const metadata: Metadata = pageMetadata({
  path: "/blog",
  title: page.title,
  description: page.description,
});

export default function BlogPage(props: PageProps<"/blog">) {
  return (
    <>
      <PageHeader title={page.title} crumbs={[{ label: "Beranda", href: "/" }, { label: page.title }]} />
      <Suspense fallback={null}>
        <BlogContent searchParams={props.searchParams} />
      </Suspense>
    </>
  );
}
