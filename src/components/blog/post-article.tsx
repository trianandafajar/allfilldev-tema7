import Image from "next/image";
import { BlogQuote } from "@/components/blog/blog-quote";
import { ShareLinks } from "@/components/blog/share-links";
import { PostMeta } from "@/components/blog/post-meta";
import { PostTags } from "@/components/blog/post-tags";
import type { Photo } from "@/data/media";

export type PostBlock =
  | { type: "paragraph"; text: string }
  | { type: "quote"; text: string; author: string }
  | { type: "gallery"; images: readonly { src: string; alt: string }[] }
  | { type: "lists"; lists: readonly (readonly string[])[] };

type Article = {
  slug: string;
  title: string;
  date: string;
  isoDate: string;
  image: Photo;
  tags: readonly string[];
  featured?: boolean;
  blocks: readonly PostBlock[];
};

function Block({ block }: { block: PostBlock }) {
  switch (block.type) {
    case "paragraph":
      return <p>{block.text}</p>;
    case "quote":
      return <BlogQuote text={block.text} author={block.author} />;
    case "gallery":
      return (
        <div className="grid gap-5 sm:grid-cols-2">
          {block.images.map((img, i) => (
            <Image
              key={i}
              src={img.src}
              alt={img.alt}
              width={560}
              height={380}
              className="h-[220px] w-full object-cover md:h-[300px]"
            />
          ))}
        </div>
      );
    case "lists":
      return (
        <div className="grid gap-5 sm:grid-cols-2">
          {block.lists.map((items, i) => (
            <ul key={i} className="list-disc space-y-2 pl-5 marker:text-primary">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ))}
        </div>
      );
  }
}

export function PostArticle({ post }: { post: Article }) {
  return (
    <article>
      <div className="relative mb-5 h-[220px] md:h-[370px] lg:mb-10">
        <Image
          src={post.image.src}
          alt={post.image.alt}
          fill
          priority
          sizes="(min-width: 1024px) 760px, 100vw"
          className="object-cover"
        />
        <PostTags tags={post.tags} className="absolute bottom-0 left-0" />
      </div>
      <h2 className="mb-2.5">{post.title}</h2>
      <PostMeta
        date={post.date}
        isoDate={post.isoDate}
        featured={post.featured}
        className="mb-5"
      />
      <div className="flex flex-col gap-5 lg:gap-[30px]">
        {post.blocks.map((block, i) => (
          <Block key={i} block={block} />
        ))}
        <ShareLinks path={`/blog/${post.slug}`} title={post.title} />
      </div>
    </article>
  );
}
