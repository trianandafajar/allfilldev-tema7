import { Slot } from "radix-ui";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function Section({
  className,
  flushTop = false,
  flushBottom = false,
  asChild = false,
  ...props
}: ComponentProps<"section"> & {
  flushTop?: boolean;
  flushBottom?: boolean;
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot.Root : "section";
  return (
    <Comp
      className={cn(
        !flushTop && "pt-[70px] md:pt-[100px] lg:pt-[130px]",
        !flushBottom && "pb-[70px] md:pb-[100px] lg:pb-[130px]",
        className,
      )}
      {...props}
    />
  );
}
