import { MailIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/layout/container";
import { Logo } from "@/components/layout/logo";
import { Section } from "@/components/layout/section";
import { SocialLinks, type SocialLink } from "@/components/layout/social-links";

type Contact = {
  address: string;
  phones: readonly string[];
  email: string;
  hours: readonly { days: string; time: string }[];
  socials: readonly SocialLink[];
};

function FooterBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="md:w-1/2 lg:mt-[22px] lg:w-auto">
      <h4 className="mb-[15px] lg:mb-[30px]">{title}</h4>
      {children}
    </div>
  );
}

export function SiteFooter({
  name,
  contact,
  links,
}: {
  name: string;
  contact: Contact;
  links: readonly { href: string; label: string }[];
}) {
  return (
    <Section asChild flushBottom>
      <footer className="pb-6 md:pb-8">
        <Container className="flex flex-col gap-[30px] md:flex-row md:flex-wrap md:gap-x-0 md:gap-y-10 lg:flex-nowrap lg:items-start lg:justify-between lg:gap-x-[15px] lg:gap-y-0">
          <div className="md:w-1/2 lg:w-auto">
            <Logo name={name} />
            <div className="md:max-w-[270px]">
              <p className="mt-[15px] text-sm font-semibold leading-[1.4]">
                {contact.address}
              </p>
            </div>
          </div>
          <FooterBlock title="Kontak">
            <ul className="flex flex-col gap-y-2 text-base font-semibold">
              {contact.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone.replace(/[^+\d]/g, "")}`}
                    className="inline-flex items-center gap-2.5 transition-colors hover:text-primary"
                  >
                    <PhoneIcon className="size-[18px] text-primary" aria-hidden="true" />
                    {phone}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-primary"
                >
                  <MailIcon className="size-[18px] text-primary" aria-hidden="true" />
                  {contact.email}
                </a>
              </li>
            </ul>
          </FooterBlock>
          <FooterBlock title="Jam Buka">
            <ul className="flex flex-col gap-y-2 text-base">
              {contact.hours.map((row) => (
                <li key={row.days}>
                  <span className="font-semibold">{row.days}</span>
                  <br />
                  {row.time}
                </li>
              ))}
            </ul>
          </FooterBlock>
          <FooterBlock title="Ikuti Kami">
            <p className="text-base font-semibold lg:mb-5">
              Kami ada di media sosial
            </p>
            <SocialLinks links={contact.socials} className="mt-[15px] lg:mt-0" />
          </FooterBlock>
        </Container>
        <Container className="mt-8">
          <div className="flex flex-col gap-3 border-t border-rule pt-6 md:flex-row md:items-center md:justify-between">
            <p className="text-sm">© {name}. Hak cipta dilindungi.</p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold md:justify-end">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-primary focus-visible:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </footer>
    </Section>
  );
}
