import Image from "next/image";
import Link from "next/link";
import { reveal } from "@/lib/reveal";

export type PostSummary = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  isoDate: string;
  image: { src: string; alt: string };
};

export function PostPreview({ post }: { post: PostSummary }) {
  const href = `/blog/${post.slug}`;
  return (
    <article {...reveal("up")} className="md:flex md:justify-between">
      <div className="relative mb-[15px] h-[220px] sm:h-[320px] md:mb-0 md:h-[250px] md:w-[320px]">
        <Image
          src={post.image.src}
          alt=""
          fill
          sizes="(min-width: 768px) 320px, 100vw"
          className="object-cover"
        />
        <time
          dateTime={post.isoDate}
          className="absolute top-0 right-0 flex h-[34px] items-center bg-primary px-[15px] font-heading text-sm font-semibold text-primary-foreground"
        >
          {post.date}
        </time>
      </div>
      <div className="md:w-[calc(100%-340px)] lg:w-[calc(100%-360px)]">
        <h4>
          <Link
            href={href}
            className="block w-fit transition-colors hover:text-primary focus-visible:text-primary lg:max-w-[190px]"
          >
            {post.title}
          </Link>
        </h4>
        <p className="mt-2 mb-[15px] text-base">{post.excerpt}</p>
        <Link
          href={href}
          className="text-sm font-semibold uppercase text-heading transition-colors hover:text-primary focus-visible:text-primary"
        >
          Baca selengkapnya
        </Link>
      </div>
    </article>
  );
}
