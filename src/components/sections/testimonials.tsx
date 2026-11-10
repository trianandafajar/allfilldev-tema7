import Image from "next/image";
import { Deco } from "@/components/layout/deco";
import { ImageScrim } from "@/components/layout/image-scrim";
import { Slider, SliderNav, SliderTrack } from "@/components/sections/slider";

export type Testimonial = { name: string; role?: string; quote: string };

export function Testimonials({
  title,
  image,
  items,
}: {
  title: string;
  image: { src: string; alt: string };
  items: readonly Testimonial[];
}) {
  return (
    <section className="xl:flex">
      <div className="relative hidden xl:block xl:w-1/2">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="50vw"
          className="object-cover"
        />
        <ImageScrim />
      </div>
      <div className="relative bg-secondary px-[30px] py-10 md:overflow-hidden md:px-[90px] md:pt-[45px] md:pb-[130px] xl:w-1/2">
        <div
          aria-hidden="true"
          className="absolute inset-0 z-[1] hidden overflow-hidden md:block"
        >
          <Deco
            src="/svg/oval.svg"
            className="parallax-y absolute top-[300px] -right-[290px] size-[700px] bg-muted"
          />
          <Deco
            src="/svg/oval-alt.svg"
            className="parallax-y absolute top-[200px] -right-[190px] size-[400px] bg-input"
          />
        </div>
        <h2 className="relative z-[2] mb-5 sm:-ml-[60px] sm:mb-[50px] sm:flex sm:items-end sm:gap-5 md:-ml-[145px] md:gap-10">
          <Deco
            src="/svg/quote.svg"
            className="hidden h-[230px] w-[260px] shrink-0 bg-input sm:inline-block"
          />
          <span className="relative sm:-bottom-2 sm:max-w-[315px] md:-bottom-[11px]">
            {title}
          </span>
        </h2>
        <Slider delay={4000} className="relative z-[2]">
          <SliderTrack
            slides={items.map((item) => (
              <figure key={item.name}>
                <blockquote className="mb-[15px] max-w-[495px] text-base font-medium md:mb-[30px]">
                  {item.quote}
                </blockquote>
                <figcaption>
                  <span className="block font-heading text-lg font-semibold text-heading">
                    {item.name}
                  </span>
                  {item.role ? (
                    <span className="text-base">{item.role}</span>
                  ) : null}
                </figcaption>
              </figure>
            ))}
          />
          <SliderNav variant="round" className="mt-[30px]" />
        </Slider>
      </div>
    </section>
  );
}
