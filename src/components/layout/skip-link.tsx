export function SkipLink({ targetId, label }: { targetId: string; label: string }) {
  return (
    <a
      href={`#${targetId}`}
      className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-2 focus-visible:left-2 focus-visible:z-[100] focus-visible:bg-primary focus-visible:px-5 focus-visible:py-3 focus-visible:text-base focus-visible:font-medium focus-visible:text-primary-foreground"
    >
      {label}
    </a>
  );
}
