import Image from "next/image";
import { PostPreview, type PostSummary } from "@/components/blog/post-preview";
import { Container } from "@/components/layout/container";
import { Deco } from "@/components/layout/deco";
import { ImageScrim } from "@/components/layout/image-scrim";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/sections/section-heading";

export function RecentPosts({
  subtitle,
  title,
  image,
  posts,
}: {
  subtitle: string;
  title: string;
  image: { src: string; alt: string };
  posts: readonly PostSummary[];
}) {
  return (
    <Section flushBottom>
      <Container className="relative">
        <Deco
          src="/svg/oval.svg"
          className="absolute top-0 left-1/2 -z-10 hidden size-[700px] -translate-x-1/2 bg-muted lg:block"
        />
        <SectionHeading subtitle={subtitle} title={title} />
        <div className="lg:flex lg:items-center">
          <div className="relative hidden h-[650px] w-[500px] shrink-0 lg:block">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="500px"
              className="object-cover"
            />
            <ImageScrim />
          </div>
          <ul className="flex flex-col gap-[30px] lg:-ml-[150px] xl:-ml-[50px]">
            {posts.map((post) => (
              <li key={post.slug}>
                <PostPreview post={post} />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
