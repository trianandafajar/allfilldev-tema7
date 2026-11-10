export type RevealDirection = "up" | "down" | "left" | "right";
export type RevealDelay = 0 | 50 | 100 | 150 | 200 | 250 | 300;

/** Atribut untuk animasi muncul saat scroll; diproses oleh `RevealObserver`. */
export function reveal(direction: RevealDirection = "up", delay?: RevealDelay) {
  return {
    "data-reveal": direction,
    "data-reveal-delay": delay || undefined,
    // RevealObserver menambah data-revealed sebelum React selesai hydrate; itu disengaja.
    suppressHydrationWarning: true,
  } as const;
}
