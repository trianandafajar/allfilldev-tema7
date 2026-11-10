import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import Link from "next/link";

type NavPost = { slug: string; title: string };

export function PostNav({
  previous,
  next,
}: {
  previous?: NavPost;
  next?: NavPost;
}) {
  if (!previous && !next) return null;
  const link =
    "group flex items-center gap-3 font-heading text-lg font-semibold text-heading transition-colors hover:text-primary focus-visible:text-primary";
  return (
    <nav
      aria-label="Tulisan lainnya"
      className="flex flex-wrap justify-between gap-5 border-y border-rule py-5"
    >
      {previous ? (
        <Link href={`/blog/${previous.slug}`} className={link}>
          <ArrowLeftIcon className="size-5 shrink-0 text-primary" aria-hidden="true" />
          <span>{previous.title}</span>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link href={`/blog/${next.slug}`} className={link}>
          <span>{next.title}</span>
          <ArrowRightIcon className="size-5 shrink-0 text-primary" aria-hidden="true" />
        </Link>
      ) : null}
    </nav>
  );
}
