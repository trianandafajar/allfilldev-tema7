import Image from "next/image";
import Link from "next/link";
import { BlogBanner } from "@/components/blog/blog-banner";
import { PostTags } from "@/components/blog/post-tags";

type SidebarPost = {
  slug: string;
  title: string;
  date: string;
  isoDate: string;
  image: { src: string; alt: string };
};

function Widget({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-[50px]">
      <h4 className="mb-5 border-b border-primary pb-2.5">{title}</h4>
      {children}
    </section>
  );
}

export function BlogSidebar({
  recent,
  tags,
  banner,
}: {
  recent: readonly SidebarPost[];
  tags: readonly string[];
  banner: { title: string; text: string; cta: { href: string; label: string } };
}) {
  return (
    <aside className="grid w-full gap-x-[30px] md:grid-cols-3 xl:sticky xl:top-[120px] xl:block xl:w-[370px] xl:shrink-0 xl:self-start">
      <Widget title="Tulisan Terbaru">
        <ul className="flex flex-col gap-5">
          {recent.map((post) => (
            <li key={post.slug} className="flex gap-4">
              <Image
                src={post.image.src}
                alt=""
                width={90}
                height={90}
                className="size-[90px] shrink-0 object-cover"
              />
              <div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-heading text-lg font-semibold leading-[1.3] text-heading transition-colors hover:text-primary focus-visible:text-primary"
                >
                  {post.title}
                </Link>
                <time
                  dateTime={post.isoDate}
                  className="mt-1 block text-sm"
                >
                  {post.date}
                </time>
              </div>
            </li>
          ))}
        </ul>
      </Widget>
      <Widget title="Topik">
        <PostTags tags={tags} />
      </Widget>
      <BlogBanner {...banner} />
    </aside>
  );
}
