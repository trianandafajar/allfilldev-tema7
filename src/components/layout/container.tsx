import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function Container({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-2xl px-5 md:px-10 xl:px-20",
        className,
      )}
      {...props}
    />
  );
}
