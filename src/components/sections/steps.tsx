import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/sections/section-heading";
import { reveal } from "@/lib/reveal";

export type Step = { title: string; text: string };

export function Steps({
  subtitle,
  title,
  items,
}: {
  subtitle: string;
  title: string;
  items: readonly Step[];
}) {
  return (
    <Section className="bg-muted">
      <Container>
        <SectionHeading centered subtitle={subtitle} title={title} />
        <ol className="grid gap-[30px] md:grid-cols-3">
          {items.map((item, index) => (
            <li
              key={item.title}
              {...reveal("up", (index * 50) as 0 | 50 | 100)}
              className="flex flex-col items-center text-center"
            >
              <span
                aria-hidden="true"
                className="mb-[15px] flex size-[60px] items-center justify-center rounded-full bg-primary font-heading text-2xl font-semibold text-primary-foreground"
              >
                {index + 1}
              </span>
              <h4 className="mb-2">{item.title}</h4>
              <p className="max-w-[320px] text-base">{item.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
