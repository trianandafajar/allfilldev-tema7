import type { ReactNode } from "react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { cn } from "@/lib/utils";

export function FormSection({
  title,
  text,
  wide = false,
  aside,
  children,
}: {
  title: string;
  text: string;
  wide?: boolean;
  aside?: ReactNode;
  children: ReactNode;
}) {
  return (
    <Section>
      <Container className={cn(!wide && !aside && "max-w-3xl")}>
        <h2 className="mb-2.5 text-center">{title}</h2>
        <p className="mx-auto mb-8 max-w-3xl text-center lg:mb-12">{text}</p>
        {aside ? (
          <div className="flex flex-col gap-10 lg:grid lg:grid-cols-12 lg:items-stretch lg:gap-[50px]">
            <div className="lg:col-span-7 [&>*]:h-full">{children}</div>
            <aside className="lg:col-span-5">{aside}</aside>
          </div>
        ) : (
          children
        )}
      </Container>
    </Section>
  );
}
