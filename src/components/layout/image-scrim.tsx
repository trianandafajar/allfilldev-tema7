import { cn } from "@/lib/utils";

/**
 * Lapisan gelap bergradien di atas foto agar tidak terlalu terang.
 * Letakkan sebagai saudara `<Image fill>` di dalam wrapper `relative`.
 */
export function ImageScrim({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 bg-linear-to-t from-scrim/70 via-scrim/25 to-scrim/5",
        className,
      )}
    />
  );
}
