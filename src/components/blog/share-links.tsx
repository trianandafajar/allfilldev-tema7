import { CopyLinkButton } from "@/components/blog/copy-link-button";
import { SocialIcon, type SocialNetwork } from "@/components/ui/social-icon";
import { absoluteUrl } from "@/lib/seo";

const linkClass =
  "inline-flex size-10 items-center justify-center border border-input text-heading transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:border-primary focus-visible:bg-primary focus-visible:text-primary-foreground";

export function ShareLinks({ path, title }: { path: string; title: string }) {
  const url = absoluteUrl(path);
  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(title);
  const targets: { label: string; href: string; network: SocialNetwork }[] = [
    {
      label: "Bagikan lewat WhatsApp",
      href: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
      network: "whatsapp",
    },
    {
      label: "Bagikan di Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      network: "facebook",
    },
    {
      label: "Bagikan di X",
      href: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
      network: "twitter",
    },
  ];

  return (
    <div className="flex flex-wrap items-center gap-3 border-t border-rule pt-6">
      <span className="font-heading text-lg font-semibold text-heading">
        Bagikan
      </span>
      <ul className="flex gap-2">
        {targets.map(({ label, href, network }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={linkClass}
            >
              <SocialIcon network={network} className="size-[18px]" />
            </a>
          </li>
        ))}
        <li>
          <CopyLinkButton url={url} title={title} className={linkClass} />
        </li>
      </ul>
    </div>
  );
}
