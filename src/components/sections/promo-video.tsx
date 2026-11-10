"use client";

import { PlayIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/layout/container";
import { ImageScrim } from "@/components/layout/image-scrim";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";

export function PromoVideo({
  src,
  title,
  cover,
}: {
  src: string;
  title: string;
  cover: string;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <Section className="md:pt-0 lg:pt-0">
      <Container>
        <div className="relative h-[260px] md:h-[400px] lg:h-[600px]">
          {playing ? (
            <iframe
              src={`${src}?autoplay=1`}
              title={title}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              className="size-full"
            />
          ) : (
            <>
              <Image
                src={cover}
                alt=""
                fill
                sizes="(min-width: 1200px) 1170px, 100vw"
                className="object-cover"
              />
              <ImageScrim />
              <Button
                onClick={() => setPlaying(true)}
                aria-label={`Putar video: ${title}`}
                className="absolute top-1/2 left-1/2 size-[64px] -translate-x-1/2 -translate-y-1/2 rounded-full text-lg lg:size-[88px] lg:text-3xl"
              >
                <PlayIcon className="size-1/3 fill-current" />
              </Button>
            </>
          )}
        </div>
      </Container>
    </Section>
  );
}
