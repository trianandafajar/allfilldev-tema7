import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { reveal } from "@/lib/reveal";

export type Benefit = { icon: string; title: string; text: string };

export function Benefits({ items }: { items: readonly Benefit[] }) {
  return (
    <Section className="bg-muted">
      <Container>
        <ul className="flex flex-col gap-[30px] md:flex-row md:flex-wrap">
          {items.map((item, index) => (
            <li
              key={item.title}
              {...reveal("up", (index % 3) * 50 as 0 | 50 | 100)}
              className="flex flex-col justify-center gap-[15px] text-center sm:max-w-[370px] sm:flex-row sm:justify-start sm:gap-5 sm:text-left md:w-[calc(100%/3-20px)] md:max-w-none md:flex-col md:items-center md:text-center lg:flex-row lg:items-start lg:text-left"
            >
              <Image
                src={item.icon}
                alt=""
                width={60}
                height={60}
                className="mx-auto size-[60px] shrink-0 sm:mx-0"
              />
              <div className="md:w-full sm:w-[calc(100%-80px)] md:max-w-none">
                <h4 className="mb-2">{item.title}</h4>
                <p className="text-base">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
