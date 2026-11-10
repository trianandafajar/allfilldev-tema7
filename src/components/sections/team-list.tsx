import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/sections/section-heading";
import { SocialLinks, type SocialLink } from "@/components/layout/social-links";
import { cn } from "@/lib/utils";
import { reveal } from "@/lib/reveal";

export type TeamMember = {
  name: string;
  position: string;
  bio: string;
  image: string;
  socials: readonly SocialLink[];
};

export function TeamList({
  subtitle,
  title,
  text,
  members,
  variant = "grid",
  flushBottom = true,
}: {
  subtitle: string;
  title: string;
  text: string;
  members: readonly TeamMember[];
  variant?: "grid" | "rows";
  flushBottom?: boolean;
}) {
  const rows = variant === "rows";

  return (
    <Section flushBottom={flushBottom} className={cn(rows && "md:pb-[100px] lg:pb-0")}>
      <SectionHeading
        centered
        subtitle={subtitle}
        title={title}
        text={text}
        className="px-5"
      />
      <Container className={cn(!rows && "max-w-none p-0")}>
        <ul
          className={cn(
            "md:flex md:flex-wrap",
            rows && "md:gap-10 lg:gap-0",
          )}
        >
          {members.map((member) => (
            <li
              key={member.name}
              {...reveal("up")}
              className={cn(
                "group relative h-[260px] cursor-pointer overflow-hidden sm:h-[340px] md:w-1/2 lg:w-1/3 xl:h-[480px]",
                rows &&
                  "md:flex md:h-auto md:w-full md:items-center md:overflow-hidden md:pl-5 lg:h-[340px] lg:w-1/3 lg:pl-0 xl:h-[480px]",
              )}
            >
              <div
                className={cn(
                  "relative size-full",
                  rows && "md:h-[270px] md:grow lg:h-full",
                )}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div
                className={cn(
                  "absolute inset-0 flex flex-col justify-end bg-overlay p-5 opacity-0 transition-opacity duration-[400ms] group-hover:opacity-100 group-focus-within:opacity-100 xl:p-10",
                  rows &&
                    "md:static md:bg-transparent md:opacity-100 lg:absolute lg:bg-overlay lg:opacity-0 lg:group-hover:opacity-100",
                )}
              >
                <span className="text-base uppercase text-heading">{member.position}</span>
                <h3 className="mt-2 mb-[15px] font-heading text-[22px] leading-none md:text-2xl">
                  {member.name}
                </h3>
                <p className="max-w-[440px] text-base">{member.bio}</p>
                <SocialLinks links={member.socials} className="mt-5" />
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
