import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { MenuTabs, type MenuCategory } from "@/components/sections/menu-tabs";
import { SectionHeading } from "@/components/sections/section-heading";

export function MenuSection({
  subtitle,
  title,
  text,
  categories,
  defaultCategory,
  flushBottom = false,
}: {
  subtitle: string;
  title: string;
  text: string;
  categories: readonly MenuCategory[];
  defaultCategory?: string;
  flushBottom?: boolean;
}) {
  return (
    <Section flushBottom={flushBottom}>
      <Container>
        <SectionHeading centered subtitle={subtitle} title={title} text={text} />
        <MenuTabs categories={categories} defaultCategory={defaultCategory} />
      </Container>
    </Section>
  );
}
