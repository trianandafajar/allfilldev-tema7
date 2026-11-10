import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Deco } from "@/components/layout/deco";
import { ImageScrim } from "@/components/layout/image-scrim";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { reveal } from "@/lib/reveal";

export function OfferBanner({
  eyebrow,
  title,
  subtitle,
  action,
  image,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  action: { href: string; label: string };
  image: { src: string; alt: string };
}) {
  return (
    <Section className="relative isolate overflow-hidden bg-secondary">
      <div aria-hidden="true" className="absolute inset-0 -z-10 hidden xl:block">
        <Deco
          src="/svg/deco/offer.svg"
          className="absolute -right-[120px] -bottom-[60px] h-[504px] w-[835px] -rotate-[15deg] bg-input/40"
        />
      </div>
      <Container className="grid items-center gap-10 md:grid-cols-2 lg:gap-[70px]">
        <div {...reveal("right")} className="relative mr-4 mb-4 md:mr-5 md:mb-5">
          <span
            aria-hidden="true"
            className="absolute inset-0 translate-x-4 translate-y-4 border-2 border-primary md:translate-x-5 md:translate-y-5"
          />
          <div className="relative h-[260px] sm:h-[340px] lg:h-[440px]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
            <ImageScrim className="from-scrim/40" />
          </div>
        </div>
        <div {...reveal("left")}>
          <span className="mb-1 block text-base font-medium uppercase text-heading">
            {eyebrow}
          </span>
          <h2 className="mb-2 lg:mb-[15px]">{title}</h2>
          <p className="max-w-[460px] font-medium">{subtitle}</p>
          <Button size="cta" className="mt-[30px] w-full sm:w-fit" asChild>
            <Link href={action.href}>{action.label}</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
