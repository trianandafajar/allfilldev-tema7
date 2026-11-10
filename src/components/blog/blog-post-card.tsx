import Image from "next/image";
import Link from "next/link";
import { PostMeta } from "@/components/blog/post-meta";
import { PostTags } from "@/components/blog/post-tags";
import type { Post } from "@/data/blog";
import { reveal } from "@/lib/reveal";

export function BlogPostCard({ post }: { post: Post }) {
  const href = `/blog/${post.slug}`;
  return (
    <article {...reveal("up")}>
      <div className="relative mb-5 h-[220px] md:h-[260px]">
        <Image
          src={post.image.src}
          alt=""
          fill
          sizes="(min-width: 1280px) 480px, (min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
        <PostTags tags={post.tags} className="absolute bottom-0 left-0" />
      </div>
      <div>
        <h3 className="text-2xl">
          <Link
            href={href}
            className="block w-fit transition-colors hover:text-primary focus-visible:text-primary"
          >
            {post.title}
          </Link>
        </h3>
        <PostMeta
          date={post.date}
          isoDate={post.isoDate}
          featured={post.featured}
          className="my-2"
        />
        <p>{post.excerpt}</p>
      </div>
    </article>
  );
}
