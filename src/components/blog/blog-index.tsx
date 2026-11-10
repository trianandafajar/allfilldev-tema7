import { BlogPagination } from "@/components/blog/blog-pagination";
import { BlogPostCard } from "@/components/blog/blog-post-card";
import { BlogQuote } from "@/components/blog/blog-quote";
import { BlogSidebar } from "@/components/blog/blog-sidebar";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import type { Post } from "@/data/blog";

type SidebarProps = React.ComponentProps<typeof BlogSidebar>;

export function pageHref(page: number) {
  return page === 1 ? "/blog" : `/blog?page=${page}`;
}

export function BlogIndex({
  posts,
  current,
  total,
  quote,
  sidebar,
}: {
  posts: readonly Post[];
  current: number;
  total: number;
  quote: { text: string; author: string };
  sidebar: SidebarProps;
}) {
  return (
    <Section>
      <Container className="flex flex-col gap-[60px] xl:flex-row xl:justify-between xl:gap-10">
        <div className="grid min-w-0 gap-x-[30px] gap-y-[50px] md:grid-cols-2 xl:flex-1 xl:content-start">
          {posts.map((post, i) => (
            <div key={post.slug} className="contents">
              <BlogPostCard post={post} />
              {i === 1 ? (
                <div className="md:col-span-2">
                  <BlogQuote {...quote} />
                </div>
              ) : null}
            </div>
          ))}
          <div className="md:col-span-2">
            <BlogPagination current={current} total={total} hrefFor={pageHref} />
          </div>
        </div>
        <BlogSidebar {...sidebar} />
      </Container>
    </Section>
  );
}
