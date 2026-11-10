import { SocialIcon, type SocialNetwork } from "@/components/ui/social-icon";
import { cn } from "@/lib/utils";

export type SocialLink = { network: SocialNetwork; label: string; href: string };

export function SocialLinks({
  links,
  className,
}: {
  links: readonly SocialLink[];
  className?: string;
}) {
  return (
    <ul className={cn("flex gap-[15px]", className)}>
      {links.map((link) => (
        <li key={link.network}>
          <a
            href={link.href}
            aria-label={link.label}
            target="_blank"
            rel="noopener noreferrer"
            className="group/social flex size-[50px] items-center justify-center rounded-full bg-muted transition-colors hover:bg-primary focus-visible:bg-primary"
          >
            <SocialIcon
              network={link.network}
              className="size-[22px] text-primary transition-colors group-hover/social:text-muted group-focus-visible/social:text-muted"
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
