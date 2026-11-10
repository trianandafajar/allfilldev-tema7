import type { ComponentProps } from "react";

const paths = {
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  facebook: (
    <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8.5A.5.5 0 0 1 14 8Z" />
  ),
  twitter: <path d="M4 4l16 16M20 4 4 20" />,
  whatsapp: (
    <>
      <path d="M4 20l1.3-4.2A8 8 0 1 1 8.4 19L4 20Z" />
      <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-.8.8a3.5 3.5 0 0 1-1.5-1.5l.8-.8-1-2L9 9.5Z" />
    </>
  ),
} as const;

export type SocialNetwork = keyof typeof paths;

export function SocialIcon({
  network,
  ...props
}: { network: SocialNetwork } & ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="size-5"
      {...props}
    >
      {paths[network]}
    </svg>
  );
}
