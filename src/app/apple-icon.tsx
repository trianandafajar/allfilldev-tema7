import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Padanan token primary dan primary-foreground (ImageResponse tidak membaca oklch).
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#b38e6a",
        }}
      >
        <svg
          width="110"
          height="124"
          viewBox="0 0 67 76"
          fill="none"
          stroke="#ffffff"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 6c-4 5 4 8 0 14M33 6c-4 5 4 8 0 14M44 6c-4 5 4 8 0 14" />
          <path d="M10 32h42v14a18 18 0 0 1-18 18h-6a18 18 0 0 1-18-18V32Z" />
          <path d="M52 38h3a8 8 0 0 1 0 16h-6" />
          <path d="M6 70h50" />
        </svg>
      </div>
    ),
    size,
  );
}
