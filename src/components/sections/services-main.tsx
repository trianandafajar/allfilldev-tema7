import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/sections/section-heading";
import { Button } from "@/components/ui/button";

export type ServiceItem = { label: string; title: string; text: string };

export function ServicesMain({
  subtitle,
  title,
  text,
  services,
  banner,
  children,
}: {
  subtitle: string;
  title: string;
  text: string;
  services: readonly ServiceItem[];
  banner: {
    title: string;
    image: string;
    action: { href: string; label: string };
  };
  children?: React.ReactNode;
}) {
  return (
    <Section>
      <Container>
        <SectionHeading subtitle={subtitle} title={title} text={text} />
        <div className="flex flex-col-reverse lg:mb-[60px] lg:flex-row lg:justify-between">
          <ul className="flex flex-col gap-[15px] sm:flex-row sm:flex-wrap lg:w-[calc(100%-350px)] lg:gap-[30px] xl:w-[calc(100%-410px)]">
            {services.map((service) => (
              <li
                key={service.label}
                className="border border-input px-[30px] py-10 sm:w-[calc(50%-7.5px)] lg:w-[calc(50%-15px)]"
              >
                <span className="mb-2 block text-base uppercase text-heading">
                  {service.label}
                </span>
                <h4>{service.title}</h4>
                <p className="mt-[15px]">{service.text}</p>
              </li>
            ))}
          </ul>
          <div className="group relative isolate my-[30px] flex min-h-[350px] flex-col justify-end overflow-hidden px-[30px] py-10 md:mb-10 lg:m-0 lg:max-w-[320px] lg:grow lg:self-stretch xl:max-w-[380px]">
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <Image
                src={banner.image}
                alt=""
                fill
                sizes="(min-width: 1200px) 380px, 100vw"
                className="object-cover transition-transform duration-[400ms] group-hover:scale-110"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-overlay/70" />
            </div>
            <h3 className="mb-[15px] max-w-[220px] text-center sm:mx-0 sm:text-left xl:max-w-[320px]">
              {banner.title}
            </h3>
            <Button
              size="cta"
              className="w-full sm:w-fit"
              asChild
            >
              <Link href={banner.action.href}>{banner.action.label}</Link>
            </Button>
          </div>
        </div>
        {children}
      </Container>
    </Section>
  );
}
