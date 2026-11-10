import { Deco } from "@/components/layout/deco";
import { MenuTile, type MenuItem } from "@/components/sections/menu-tile";
import { Slider, SliderNav, SliderTrack } from "@/components/sections/slider";

export function Presentation({
  subtitle,
  title,
  items,
}: {
  subtitle: string;
  title: string;
  items: readonly MenuItem[];
}) {
  return (
    <section className="bg-muted md:flex">
      <div className="relative flex min-h-[320px] flex-col justify-center overflow-hidden p-[30px] md:w-1/2 xl:p-[60px] 2xl:w-1/4">
        <Deco
          src="/svg/deco/presentation.svg"
          className="parallax-y absolute -top-[50px] -left-[50px] z-0 size-[200px] md:-top-20 md:-left-20 md:size-[360px]"
        />
        <span className="relative z-10 mb-1 block text-base font-medium uppercase text-heading">
          {subtitle}
        </span>
        <h2 className="relative z-10 xl:max-w-[500px]">{title}</h2>
      </div>
      <Slider delay={4000} className="min-w-0 md:w-1/2 2xl:w-3/4">
        <SliderTrack
          slides={items.map((item) => (
            <MenuTile
              key={item.title}
              item={item}
              size="lg"
              className="aspect-square"
              sizes="(min-width: 1600px) 25vw, (min-width: 1200px) 25vw, (min-width: 768px) 50vw, 100vw"
            />
          ))}
          itemClassName="basis-full sm:basis-1/2 md:basis-full xl:basis-1/2 2xl:basis-1/3"
        />
        <SliderNav className="right-0 left-auto" />
      </Slider>
    </section>
  );
}
