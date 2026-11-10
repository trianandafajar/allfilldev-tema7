"use client";

import { Tabs as TabsPrimitive } from "radix-ui";
import { useState } from "react";
import { MenuTile, type MenuItem } from "@/components/sections/menu-tile";
import { SwipeRow } from "@/components/ui/swipe-row";
import { Tabs, TabsContent } from "@/components/ui/tabs";

export type MenuCategory = {
  id: string;
  label: string;
  items: readonly MenuItem[];
};

export function MenuTabs({
  categories,
  defaultCategory,
}: {
  categories: readonly MenuCategory[];
  defaultCategory?: string;
}) {
  const [value, setValue] = useState(defaultCategory ?? categories[0]?.id);
  const activeIndex = categories.findIndex((category) => category.id === value);

  return (
    <Tabs value={value} onValueChange={setValue} className="gap-0">
      <SwipeRow activeIndex={activeIndex} className="mb-[15px] lg:mb-[30px] xl:mb-5">
        <TabsPrimitive.List
          aria-label="Kategori menu"
          className="flex w-max min-w-full flex-nowrap justify-center gap-x-4 whitespace-nowrap sm:gap-x-5 lg:gap-x-10"
        >
          {categories.map((category) => (
            <TabsPrimitive.Trigger
              key={category.id}
              value={category.id}
              className="group/tab relative flex min-h-11 shrink-0 cursor-pointer items-center font-heading text-lg font-semibold text-heading sm:text-[22px] md:text-2xl md:leading-[1.4] after:absolute after:top-1/2 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-[width] after:duration-500 hover:after:w-full focus-visible:after:w-full data-[state=active]:after:w-full"
            >
              {category.label}
            </TabsPrimitive.Trigger>
          ))}
        </TabsPrimitive.List>
      </SwipeRow>
      <div className="grid">
        {categories.map((category) => (
          <TabsContent
            key={category.id}
            value={category.id}
            className="col-start-1 row-start-1 duration-[400ms] data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=inactive]:pointer-events-none data-[state=inactive]:animate-out data-[state=inactive]:fade-out-0 motion-reduce:animate-none"
          >
            <ul className="flex flex-col gap-[15px] md:flex-row md:flex-wrap lg:gap-[30px] xl:flex-nowrap xl:justify-between xl:gap-0">
              {category.items.map((item) => (
                <li
                  key={item.title}
                  className="h-[240px] sm:h-[340px] md:w-[calc(50%-7.5px)] lg:w-[calc(50%-15px)] xl:h-[230px] xl:w-[calc(25%-15px)]"
                >
                  <MenuTile
                    item={item}
                    className="size-full"
                    sizes="(min-width: 1200px) 25vw, (min-width: 768px) 50vw, 100vw"
                  />
                </li>
              ))}
            </ul>
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
}
