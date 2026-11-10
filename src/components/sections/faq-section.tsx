import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/sections/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { reveal } from "@/lib/reveal";

type Group = {
  id: string;
  title: string;
  items: readonly { question: string; answer: string }[];
};

export function FaqSection({
  subtitle,
  title,
  text,
  groups,
}: {
  subtitle: string;
  title: string;
  text: string;
  groups: readonly Group[];
}) {
  return (
    <Section>
      <Container className="max-w-4xl">
        <SectionHeading centered subtitle={subtitle} title={title} text={text} />
        <div className="flex flex-col gap-10 lg:gap-[50px]">
          {groups.map((group) => (
            <section key={group.id} aria-labelledby={`faq-${group.id}`} {...reveal("up")}>
              <h3 id={`faq-${group.id}`} className="mb-2.5 text-[22px] md:text-2xl">
                {group.title}
              </h3>
              <Accordion type="single" collapsible>
                {group.items.map((item, index) => (
                  <AccordionItem
                    key={item.question}
                    value={`${group.id}-${index}`}
                    className="border-b border-rule"
                  >
                    <AccordionTrigger className="cursor-pointer items-center gap-5 rounded-none py-[15px] font-heading text-lg font-semibold text-heading hover:text-primary hover:no-underline focus-visible:ring-0 focus-visible:text-primary md:text-xl [&_svg]:size-5 [&_svg]:text-primary">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-[15px] text-base">
                      <p>{item.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          ))}
        </div>
      </Container>
    </Section>
  );
}
