import Link from "next/link";
import { cn } from "@/lib/utils";

export function BlogPagination({
  current,
  total,
  hrefFor,
}: {
  current: number;
  total: number;
  hrefFor: (page: number) => string;
}) {
  if (total < 2) return null;
  const pages = Array.from({ length: total }, (_, i) => i + 1);
  return (
    <nav aria-label="Halaman blog">
      <ul className="flex flex-wrap justify-center gap-2.5">
        {pages.map((page) => (
          <li key={page}>
            <Link
              href={hrefFor(page)}
              aria-current={page === current ? "page" : undefined}
              className={cn(
                "relative flex size-[50px] items-center justify-center font-heading text-xl font-semibold text-heading transition-colors hover:text-primary focus-visible:text-primary",
                "after:absolute after:bottom-2.5 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:bg-primary after:transition-[width]",
                page === current && "text-primary after:w-5",
              )}
            >
              {page}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
