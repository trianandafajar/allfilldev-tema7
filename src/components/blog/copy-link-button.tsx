"use client";

import { CheckIcon, LinkIcon } from "lucide-react";
import { useState } from "react";

export function CopyLinkButton({
  url,
  title,
  className,
}: {
  url: string;
  title: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function share() {
    try {
      if (typeof navigator.share === "function") {
        await navigator.share({ title, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Pengguna membatalkan dialog bagikan atau izin clipboard ditolak.
    }
  }

  return (
    <button
      type="button"
      onClick={share}
      aria-label={copied ? "Tautan disalin" : "Salin tautan"}
      className={className}
    >
      {copied ? (
        <CheckIcon className="size-[18px]" aria-hidden="true" />
      ) : (
        <LinkIcon className="size-[18px]" aria-hidden="true" />
      )}
      <span role="status" className="sr-only">
        {copied ? "Tautan disalin" : ""}
      </span>
    </button>
  );
}
