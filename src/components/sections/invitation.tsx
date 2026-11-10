import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Deco } from "@/components/layout/deco";
import { ImageScrim } from "@/components/layout/image-scrim";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { reveal } from "@/lib/reveal";

export function Invitation({
  subtitle,
  title,
  titleBreak,
  text,
  action,
  image,
}: {
  subtitle: string;
  title: string;
  titleBreak: string;
  text: string;
  action: { href: string; label: string };
  image: { src: string; alt: string };
}) {
  return (
    <Section flushBottom>
      <Container className="lg:mt-[140px] lg:flex lg:gap-[70px]">
        <div {...reveal("right")} className="relative hidden max-w-[500px] grow lg:block">
          <Deco
            src="/svg/oval.svg"
            className="absolute -top-[140px] -left-[180px] z-[1] size-[700px] bg-muted xl:-left-[225px]"
          />
          <div className="relative z-[2] h-full min-h-[500px]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="500px"
              className="object-cover"
            />
            <ImageScrim />
          </div>
        </div>
        <div {...reveal("left")}>
          <div className="relative mb-[30px] h-[180px] sm:h-[280px] md:h-[320px] lg:mb-[60px] lg:hidden">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="100vw"
              className="object-cover"
            />
            <ImageScrim />
          </div>
          <span className="mb-1 block text-base font-medium uppercase text-heading">
            {subtitle}
          </span>
          <h2 className="mb-2 lg:mb-[15px]">
            {title}
            <span className="md:block"> {titleBreak}</span>
          </h2>
          <p className="mb-[30px] max-w-[560px]">{text}</p>
          <Button
            size="cta"
            className="w-full sm:w-fit"
            asChild
          >
            <Link href={action.href}>{action.label}</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
