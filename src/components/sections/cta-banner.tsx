import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/sections/section-heading";
import { Button } from "@/components/ui/button";
import { reveal } from "@/lib/reveal";

export function CtaBanner({
  subtitle,
  title,
  text,
  action,
}: {
  subtitle: string;
  title: string;
  text: string;
  action: { href: string; label: string };
}) {
  return (
    <Section>
      <Container>
        <SectionHeading centered subtitle={subtitle} title={title} text={text} />
        <div {...reveal("up", 100)} className="flex justify-center">
          <Button size="cta" asChild>
            <Link href={action.href}>{action.label}</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
