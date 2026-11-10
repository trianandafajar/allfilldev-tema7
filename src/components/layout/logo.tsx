import Link from "next/link";
import { cn } from "@/lib/utils";

function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 67 76"
      fill="none"
      stroke="currentColor"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M22 6c-4 5 4 8 0 14M33 6c-4 5 4 8 0 14M44 6c-4 5 4 8 0 14" />
      <path d="M10 32h42v14a18 18 0 0 1-18 18h-6a18 18 0 0 1-18-18V32Z" />
      <path d="M52 38h3a8 8 0 0 1 0 16h-6" />
      <path d="M6 70h50" />
    </svg>
  );
}

export function Logo({ name, className }: { name: string; className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "flex w-fit items-center gap-1 font-heading text-2xl font-semibold leading-[1.3] text-heading transition-colors hover:text-primary focus-visible:text-primary",
        className,
      )}
    >
      <LogoMark className="h-9 w-auto xl:h-11" />
      {name}
    </Link>
  );
}
