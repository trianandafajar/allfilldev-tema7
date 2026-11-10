import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { BlogSidebar } from "@/components/blog/blog-sidebar";
import { PostArticle } from "@/components/blog/post-article";
import { PostNav } from "@/components/blog/post-nav";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";
import { sitePages } from "@/config/site";
import {
  allTags,
  blogBanner,
  getAdjacentPosts,
  getPost,
  posts,
} from "@/data/blog";
import { JsonLd } from "@/components/seo/json-ld";
import { blogPostingJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";

const blog = sitePages.find((p) => p.path === "/blog")!;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(
  props: PageProps<"/blog/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMetadata({
    path: `/blog/${post.slug}`,
    title: post.title,
    description: post.excerpt,
    type: "article",
    publishedTime: post.isoDate,
  });
}

export default function PostPage(props: PageProps<"/blog/[slug]">) {
  // Membaca params harus di dalam Suspense agar App Shell rute ini tidak terikat satu URL.
  return (
    <Suspense fallback={null}>
      <PostContent params={props.params} />
    </Suspense>
  );
}

async function PostContent({ params }: { params: PageProps<"/blog/[slug]">["params"] }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const { previous, next } = getAdjacentPosts(slug);
  return (
    <>
      <JsonLd data={blogPostingJsonLd(post)} />
      <PageHeader
        title={blog.title}
        crumbs={[
          { label: "Beranda", href: "/" },
          { label: blog.title, href: "/blog" },
          { label: post.title },
        ]}
      />
      <Section>
        <Container className="flex flex-col gap-[60px] xl:flex-row xl:justify-between xl:gap-10">
          <div className="flex min-w-0 flex-col gap-[50px] xl:flex-1">
            <PostArticle post={post} />
            <PostNav previous={previous} next={next} />
          </div>
          <BlogSidebar
            recent={posts.filter((p) => p.slug !== slug).slice(0, 3)}
            tags={allTags}
            banner={blogBanner}
          />
        </Container>
      </Section>
    </>
  );
}
