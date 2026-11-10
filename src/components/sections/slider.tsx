"use client";

import Autoplay from "embla-carousel-autoplay";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useMemo, type ReactNode } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export function Slider({
  children,
  delay = 3000,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const plugins = useMemo(() => {
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    return [
      Autoplay({
        delay,
        playOnInit: !reduceMotion,
        stopOnMouseEnter: true,
        stopOnInteraction: false,
      }),
    ];
  }, [delay]);

  return (
    <Carousel
      opts={{ loop: true, duration: 40 }}
      plugins={plugins}
      className={className}
    >
      {children}
    </Carousel>
  );
}

export function SliderTrack({
  slides,
  className,
  itemClassName,
}: {
  slides: readonly ReactNode[];
  className?: string;
  itemClassName?: string;
}) {
  return (
    <CarouselContent className={cn("ml-0", className)}>
      {slides.map((slide, index) => (
        <CarouselItem
          key={index}
          aria-label={`${index + 1} dari ${slides.length}`}
          className={cn("pl-0", itemClassName)}
        >
          {slide}
        </CarouselItem>
      ))}
    </CarouselContent>
  );
}

const navItem = {
  overlay:
    "flex size-[50px] items-center justify-center bg-background text-primary transition-[color,background-color,scale] hover:bg-primary hover:text-primary-foreground focus-visible:bg-primary focus-visible:text-primary-foreground focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring active:scale-95 md:size-[100px]",
  round:
    "flex size-[50px] items-center justify-center rounded-full border-2 border-primary text-heading transition-[color,background-color,scale] hover:bg-primary hover:text-primary-foreground focus-visible:bg-primary focus-visible:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring active:scale-95",
} as const;

export function SliderNav({
  variant = "overlay",
  className,
}: {
  variant?: keyof typeof navItem;
  className?: string;
}) {
  const { scrollPrev, scrollNext } = useCarousel();
  const iconSize = variant === "overlay" ? "size-[17px]" : "size-3";

  return (
    <div
      className={cn(
        "flex",
        variant === "overlay" && "absolute bottom-0 left-0 z-10",
        variant === "round" && "gap-[25px]",
        className,
      )}
    >
      <button
        type="button"
        onClick={scrollPrev}
        aria-label="Slide sebelumnya"
        className={navItem[variant]}
      >
        <ChevronLeftIcon className={iconSize} />
      </button>
      <button
        type="button"
        onClick={scrollNext}
        aria-label="Slide berikutnya"
        className={navItem[variant]}
      >
        <ChevronRightIcon className={iconSize} />
      </button>
    </div>
  );
}
