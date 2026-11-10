"use client";

import { XIcon } from "lucide-react";
import type { ReactNode } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function VideoDialog({
  src,
  title,
  children,
}: {
  src: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="max-w-[min(1170px,calc(100%-2.5rem))] gap-0 rounded-none border-2 border-primary bg-background p-5 ring-0 sm:max-w-[min(1170px,calc(100%-2.5rem))] md:p-10"
      >
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <DialogDescription className="sr-only">Pemutar video</DialogDescription>
        <DialogClose
          aria-label="Tutup video"
          className="absolute -top-10 right-0 flex size-[30px] items-center justify-center border-2 border-primary bg-background text-primary transition-colors hover:text-heading"
        >
          <XIcon className="size-4" />
        </DialogClose>
        <div className="aspect-video w-full">
          <iframe
            src={src}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="size-full"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
