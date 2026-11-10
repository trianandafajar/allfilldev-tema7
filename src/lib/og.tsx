import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const ogSize = { width: 1200, height: 630 };

// ImageResponse (satori) tidak membaca oklch dan var(--token), jadi nilai heksa di sini
// adalah padanan token di globals.css: secondary, primary, heading, foreground.
const color = {
  background: "#e5dcd2",
  primary: "#b38e6a",
  heading: "#534931",
  text: "#5c5c5c",
};

function Cup() {
  return (
    <svg
      width="84"
      height="96"
      viewBox="0 0 67 76"
      fill="none"
      stroke={color.primary}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 6c-4 5 4 8 0 14M33 6c-4 5 4 8 0 14M44 6c-4 5 4 8 0 14" />
      <path d="M10 32h42v14a18 18 0 0 1-18 18h-6a18 18 0 0 1-18-18V32Z" />
      <path d="M52 38h3a8 8 0 0 1 0 16h-6" />
      <path d="M6 70h50" />
    </svg>
  );
}

export function renderOgImage({
  title,
  label,
}: {
  title: string;
  label: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: color.background,
          borderLeft: `18px solid ${color.primary}`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <Cup />
          <div
            style={{
              fontSize: 52,
              fontWeight: 700,
              color: color.heading,
              display: "flex",
            }}
          >
            {siteConfig.name}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 28,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: color.primary,
              display: "flex",
            }}
          >
            {label}
          </div>
          <div
            style={{
              fontSize: title.length > 60 ? 60 : 76,
              lineHeight: 1.15,
              fontWeight: 700,
              color: color.heading,
              display: "flex",
            }}
          >
            {title}
          </div>
        </div>
        <div style={{ fontSize: 28, color: color.text, display: "flex" }}>
          Sarapan, kopi, dan hidangan penutup segar
        </div>
      </div>
    ),
    ogSize,
  );
}
