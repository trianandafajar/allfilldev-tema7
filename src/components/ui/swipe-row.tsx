"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useEffect, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Baris item yang tetap satu baris dan bisa digeser (drag/swipe) bila tidak muat,
 * tanpa bilah scroll. Anak langsung dari elemen di dalamnya menjadi "slide";
 * beri elemen itu `w-max min-w-full` agar tetap rata tengah saat muat.
 */
export function SwipeRow({
  children,
  activeIndex,
  className,
}: {
  children: ReactNode;
  activeIndex?: number;
  className?: string;
}) {
  const [viewportRef, api] = useEmblaCarousel({
    dragFree: true,
    containScroll: "trimSnaps",
    watchFocus: true,
  });

  useEffect(() => {
    if (api && activeIndex !== undefined) api.scrollTo(activeIndex);
  }, [api, activeIndex]);

  return (
    <div
      ref={viewportRef}
      className={cn(
        "cursor-grab touch-pan-y touch-pinch-zoom select-none overflow-hidden active:cursor-grabbing",
        className,
      )}
    >
      {children}
    </div>
  );
}
