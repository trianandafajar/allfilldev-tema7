import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/sections/section-heading";
import { Slider, SliderNav, SliderTrack } from "@/components/sections/slider";
import { initials } from "@/lib/utils";

export type TestimonialCard = {
  name: string;
  profession: string;
  quote: string;
};

export function TestimonialCards({
  subtitle,
  title,
  background,
  items,
}: {
  subtitle: string;
  title: string;
  background: string;
  items: readonly TestimonialCard[];
}) {
  return (
    <Section className="relative isolate text-center">
      <Image
        src={background}
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-overlay" />
      <Container>
        <SectionHeading centered subtitle={subtitle} title={title} />
        <Slider delay={4000}>
          <SliderTrack
            className="-ml-[15px] lg:-ml-[30px]"
            itemClassName="pl-[15px] md:basis-1/2 lg:pl-[30px]"
            slides={items.map((item) => (
              <figure
                key={item.name}
                className="flex h-full flex-col bg-background p-[30px] lg:p-[60px]"
              >
                <div
                  aria-hidden="true"
                  className="mx-auto mb-2 flex size-[70px] items-center justify-center rounded-full bg-primary font-heading text-xl font-semibold text-primary-foreground"
                >
                  {initials(item.name)}
                </div>
                <figcaption>
                  <span className="block font-heading text-lg font-semibold text-heading">
                    {item.name}
                  </span>
                  <span className="mt-1 mb-2 block text-base text-primary lg:mb-[15px]">
                    {item.profession}
                  </span>
                </figcaption>
                <blockquote className="text-base font-medium">{item.quote}</blockquote>
              </figure>
            ))}
          />
          <SliderNav variant="round" className="mt-5 justify-center md:mt-10" />
        </Slider>
      </Container>
    </Section>
  );
}
