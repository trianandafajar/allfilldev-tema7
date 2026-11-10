import type { ElementType } from "react";
import { cn } from "@/lib/utils";
import { reveal } from "@/lib/reveal";

export function SectionHeading({
  subtitle,
  title,
  text,
  as: Heading = "h2",
  centered = false,
  className,
}: {
  subtitle?: string;
  title: string;
  text?: string;
  as?: ElementType;
  centered?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-[30px] lg:mb-10",
        centered && "flex flex-col items-center text-center",
        className,
      )}
    >
      {subtitle ? (
        <span {...reveal("down")} className="mb-1 block text-base font-medium uppercase text-heading">
          {subtitle}
        </span>
      ) : null}
      <Heading {...reveal("up")} className="mb-2 lg:mb-[15px]">{title}</Heading>
      {text ? <p {...reveal("up", 50)} className="max-w-3xl">{text}</p> : null}
    </div>
  );
}
