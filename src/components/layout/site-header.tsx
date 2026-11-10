import Link from "next/link";
import { HeaderShell } from "@/components/layout/header-shell";
import { Logo } from "@/components/layout/logo";
import { NavLink } from "@/components/layout/nav-link";
import { SocialLinks, type SocialLink } from "@/components/layout/social-links";
import { Button } from "@/components/ui/button";

export type NavItem = { href: string; label: string };

export function SiteHeader({
  name,
  nav,
  socials,
  cta,
}: {
  name: string;
  nav: readonly NavItem[];
  socials: readonly SocialLink[];
  cta: NavItem;
}) {
  return (
    <HeaderShell logo={<Logo name={name} />}>
      <ul className="flex flex-col gap-[15px] xl:ml-10 2xl:ml-[100px] xl:flex-1 xl:flex-row xl:items-center xl:gap-[30px]">
        {nav.map((item) => (
          <li key={item.href}>
            <NavLink href={item.href}>{item.label}</NavLink>
          </li>
        ))}
      </ul>
      <div className="mt-[50px] flex flex-wrap items-center gap-6 pb-6 xl:mt-0 xl:pb-0">
        <SocialLinks links={socials} />
        <Button asChild className="h-[50px] px-6 text-sm font-semibold uppercase">
          <Link href={cta.href}>{cta.label}</Link>
        </Button>
      </div>
    </HeaderShell>
  );
}
