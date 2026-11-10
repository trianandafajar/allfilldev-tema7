import { PlayIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { Container } from "@/components/layout/container";
import { Deco } from "@/components/layout/deco";
import { ImageScrim } from "@/components/layout/image-scrim";
import { Slider, SliderNav, SliderTrack } from "@/components/sections/slider";
import { VideoDialog } from "@/components/sections/video-dialog";
import { Button } from "@/components/ui/button";
import { reveal } from "@/lib/reveal";

type HeroImage = { src: string; alt: string };

export function Hero({
  subtitle,
  title,
  text,
  action,
  video,
  slides,
}: {
  subtitle: string;
  title: string;
  text: string;
  action: { href: string; label: string };
  video?: { src: string; title: string };
  slides: readonly HeroImage[];
}) {
  return (
    <section className="relative pt-[140px] md:pt-[170px] 2xl:h-screen 2xl:pt-[130px]">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 hidden overflow-hidden md:block"
      >
        <Deco
          src="/svg/deco/hero.svg"
          className="parallax-y absolute -top-[37%] right-0 h-[600px] w-[530px] -rotate-[129deg] 2xl:-top-[200px] 2xl:right-[100px]"
        />
        <Deco
          src="/svg/deco/hero.svg"
          className="parallax-y absolute bottom-0 left-0 h-[600px] w-[530px] xl:bottom-[300px] 2xl:-bottom-[170px]"
        />
      </div>
      <Container className="2xl:flex 2xl:h-full 2xl:items-center">
        <div className="2xl:mr-[100px] 2xl:w-[560px] 2xl:shrink-0">
          <div className="mb-[70px] md:mb-[100px] lg:mb-[130px] 2xl:mb-0">
            <span {...reveal("down")} className="mb-1 block text-base font-medium uppercase text-heading">
              {subtitle}
            </span>
            <h1 {...reveal("up")} className="mb-2 md:max-w-[320px] lg:mb-[15px] lg:max-w-[500px]">
              {title}
            </h1>
            <p {...reveal("up", 50)} className="font-medium md:max-w-[600px]">{text}</p>
            <div {...reveal("up", 100)} className="mt-[30px] flex items-center gap-[25px]">
              <Button size="cta" asChild>
                <Link href={action.href}>{action.label}</Link>
              </Button>
              {video ? (
                <VideoDialog src={video.src} title={video.title}>
                  <Button size="play" aria-label="Putar video">
                    <PlayIcon className="size-4 fill-current" />
                  </Button>
                </VideoDialog>
              ) : null}
            </div>
          </div>
        </div>
        <Slider
          delay={4000}
          className="-mx-5 min-w-0 md:-mx-10 xl:-mx-20 2xl:mx-0 2xl:-mr-[max(5rem,calc((100vw-96rem)/2+5rem))] 2xl:grow"
        >
          <SliderTrack
            itemClassName="relative h-[280px] md:h-[400px] lg:h-[600px] 2xl:h-[calc(100vh-130px)]"
            slides={slides.map((slide, index) => (
              <Fragment key={slide.src + index}>
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  sizes="(min-width: 1400px) 60vw, 100vw"
                  className="object-cover"
                />
                <ImageScrim />
              </Fragment>
            ))}
          />
          <SliderNav className="bottom-auto top-1/2 w-full -translate-y-1/2 justify-between 2xl:bottom-0 2xl:top-auto 2xl:w-fit 2xl:translate-y-0" />
        </Slider>
      </Container>
    </section>
  );
}
