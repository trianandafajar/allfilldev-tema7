import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function BlogBanner({
  title,
  text,
  cta,
  className,
}: {
  title: string;
  text: string;
  cta: { href: string; label: string };
  className?: string;
}) {
  return (
    <aside
      className={cn(
        "flex min-h-[350px] flex-col items-center justify-center bg-secondary px-5 py-10 text-center",
        className,
      )}
    >
      <h3 className="mb-2.5">{title}</h3>
      <p className="mb-6 max-w-[300px] text-base">{text}</p>
      <Button asChild size="cta">
        <Link href={cta.href}>{cta.label}</Link>
      </Button>
    </aside>
  );
}
