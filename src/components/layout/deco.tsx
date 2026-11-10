import { cn } from "@/lib/utils";

export function Deco({ src, className }: { src: string; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn("deco block bg-deco", className)}
      style={{ maskImage: `url(${src})`, WebkitMaskImage: `url(${src})` }}
    />
  );
}
