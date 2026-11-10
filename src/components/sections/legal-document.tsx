import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

type LegalSection = {
  heading: string;
  paragraphs?: readonly string[];
  items?: readonly string[];
};

export function LegalDocument({
  intro,
  updated,
  updatedIso,
  sections,
}: {
  intro: string;
  updated: string;
  updatedIso: string;
  sections: readonly LegalSection[];
}) {
  return (
    <Section>
      <Container className="max-w-4xl">
        <p className="mb-2">{intro}</p>
        <p className="mb-10 text-base">
          Terakhir diperbarui: <time dateTime={updatedIso}>{updated}</time>
        </p>
        <ol className="flex flex-col gap-8">
          {sections.map((section, index) => (
            <li key={section.heading}>
              <h2 className="mb-3 text-[22px] md:text-2xl">
                {index + 1}. {section.heading}
              </h2>
              <div className="flex flex-col gap-3 text-base">
                {section.paragraphs?.map((text) => <p key={text}>{text}</p>)}
                {section.items ? (
                  <ul className="list-disc space-y-1.5 pl-5 marker:text-primary">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
