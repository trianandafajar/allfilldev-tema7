"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function NavLink({
  href,
  className,
  ...props
}: ComponentProps<typeof Link> & { href: string }) {
  const pathname = usePathname();
  const active = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "text-lg font-semibold text-heading transition-colors hover:text-primary focus-visible:text-primary aria-[current=page]:text-primary xl:text-base",
        className,
      )}
      {...props}
    />
  );
}
