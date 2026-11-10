import { notFound } from "next/navigation";
import { posts, getPost } from "@/data/blog";
import { renderOgImage } from "@/lib/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostOgImage(
  props: PageProps<"/blog/[slug]">,
) {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) notFound();
  return renderOgImage({ label: `Blog · ${post.tags[0]}`, title: post.title });
}
