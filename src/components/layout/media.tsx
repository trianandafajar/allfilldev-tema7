import Image from "next/image";
import { cn } from "@/lib/utils";

export function Media({
  src,
  alt,
  ratio = "4 / 3",
  sizes = "(min-width: 1024px) 33vw, 100vw",
  priority = false,
  className,
}: {
  src: string;
  alt: string;
  ratio?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn("relative overflow-hidden rounded-xl bg-muted", className)}
      style={{ aspectRatio: ratio }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
