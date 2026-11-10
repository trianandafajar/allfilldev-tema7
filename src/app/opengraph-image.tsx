import { siteConfig } from "@/config/site";
import { renderOgImage } from "@/lib/og";

export const alt = `${siteConfig.name}: kafe dengan sarapan, kopi, dan hidangan penutup`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return renderOgImage({
    label: "Kafe & ruang acara",
    title: "Kopi hangat, sarapan segar, hidangan penutup",
  });
}
