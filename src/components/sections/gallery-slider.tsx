import Image from "next/image";
import { ImageScrim } from "@/components/layout/image-scrim";
import { Slider,SliderNav, SliderTrack } from "@/components/sections/slider";

export function GallerySlider({
  subtitle,
  title,
  images,
}: {
  subtitle: string;
  title: string;
  images: readonly { src: string; alt: string }[];
}) {
  return (
    <Slider delay={4000} className="lg:flex lg:items-center">
      <div className="mb-5 lg:mb-0">
        <span className="mb-1 block text-base font-medium uppercase text-heading">
          {subtitle}
        </span>
        <h3>{title}</h3>
      </div>
      <div className="mb-5 min-w-0 lg:mx-[50px] lg:mb-0 lg:grow">
        <SliderTrack
          className="-ml-[15px] lg:-ml-[30px]"
          itemClassName="pl-[15px] sm:basis-1/2 lg:basis-1/4 lg:pl-[30px]"
          slides={images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 568px) 50vw, 100vw"
                className="object-cover transition-transform duration-[400ms] group-hover:scale-110"
              />
              <ImageScrim className="from-scrim/45" />
            </div>
          ))}
        />
      </div>
      <SliderNav variant="round" className="lg:mr-[15px]" />
    </Slider>
  );
}
