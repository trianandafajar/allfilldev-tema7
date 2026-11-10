import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { reveal } from "@/lib/reveal";

export function ContactBanner({
  subtitle,
  title,
  text,
  action,
  background,
}: {
  subtitle: string;
  title: string;
  text: string;
  action: { href: string; label: string };
  background: string;
}) {
  return (
    <Section className="relative isolate">
      <Image
        src={background}
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover object-right lg:object-center"
      />
      <Container>
        <div {...reveal("up")} className="bg-overlay p-6 md:max-w-[570px] lg:ml-auto">
          <span className="mb-1 block text-base font-medium uppercase text-heading">
            {subtitle}
          </span>
          <h2 className="mb-2 md:max-w-[470px] lg:mb-[15px]">{title}</h2>
          <p className="mb-[30px]">{text}</p>
          <Button size="cta" className="w-full sm:w-fit" asChild>
            <Link href={action.href}>{action.label}</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
