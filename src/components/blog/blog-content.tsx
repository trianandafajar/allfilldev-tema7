import { redirect } from "next/navigation";
import { BlogIndex } from "@/components/blog/blog-index";
import {
  allTags,
  blogBanner,
  blogQuote,
  getPostsPage,
  pageCount,
  posts,
} from "@/data/blog";

// Membaca ?page= (data permintaan), jadi harus dirender di dalam <Suspense>.
// Nilai tidak valid, di luar rentang, atau 1 dialihkan ke /blog agar tidak ada URL ganda.
export async function BlogContent({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const raw = (await searchParams).page;
  if (raw === undefined) return renderPage(1);

  const value = Array.isArray(raw) ? raw[0] : raw;
  const page = Number(value);
  if (!Number.isInteger(page) || page < 2 || page > pageCount) redirect("/blog");
  return renderPage(page);
}

function renderPage(page: number) {
  return (
    <BlogIndex
      posts={getPostsPage(page)}
      current={page}
      total={pageCount}
      quote={blogQuote}
      sidebar={{ recent: posts.slice(0, 3), tags: allTags, banner: blogBanner }}
    />
  );
}
