import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export type ContactCard = {
  icon: LucideIcon;
  title: string;
  lines: readonly string[];
  href?: string;
};

export function ContactCards({ cards }: { cards: readonly ContactCard[] }) {
  return (
    <Section flushTop>
      <Container>
        <ul className="grid gap-5 md:grid-cols-3 lg:gap-[30px]">
          {cards.map(({ icon: Icon, title, lines, href }) => (
            <li
              key={title}
              className="flex flex-col items-center bg-secondary px-5 py-10 text-center"
            >
              <Icon className="mb-5 size-10 text-primary" aria-hidden="true" />
              <h3 className="mb-2.5 text-[22px]">{title}</h3>
              {href ? (
                <a
                  href={href}
                  className="transition-colors hover:text-primary focus-visible:text-primary"
                >
                  {lines.join(", ")}
                </a>
              ) : (
                lines.map((line) => <p key={line}>{line}</p>)
              )}
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
