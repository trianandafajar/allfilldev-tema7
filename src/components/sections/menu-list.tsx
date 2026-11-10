"use client";

import { FlameIcon, PlusIcon, SproutIcon } from "lucide-react";
import { Tabs as TabsPrimitive } from "radix-ui";
import { memo, useCallback, useState } from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export type MenuListItem = {
  name: string;
  price: string;
  description: string;
  tag?: "spicy" | "vegan";
};

export type MenuListCategory = {
  id: string;
  label: string;
  items: readonly MenuListItem[];
};

const tagStyle = {
  spicy: { border: "border-spicy", text: "text-spicy", label: "Pedas", Icon: FlameIcon },
  vegan: { border: "border-vegan", text: "text-vegan", label: "Vegan", Icon: SproutIcon },
} as const;

const Item = memo(function Item({ item }: { item: MenuListItem }) {
  const tag = item.tag ? tagStyle[item.tag] : null;
  return (
    <li
      className={cn(
        "border-b border-rule py-[15px] last:border-b-0 lg:w-[calc(50%-25px)] lg:py-[30px] lg:last:border-b",
        tag?.border,
      )}
    >
      <div className="mb-2 flex justify-between gap-[15px] font-heading text-lg font-semibold text-heading">
        <span className="flex gap-2.5">
          {tag ? (
            <tag.Icon
              className={cn("mt-0.5 size-5 shrink-0", tag.text)}
              aria-label={tag.label}
              role="img"
            />
          ) : null}
          {item.name}
        </span>
        <span>{item.price}</span>
      </div>
      <p className="text-base italic lowercase">{item.description}</p>
    </li>
  );
});

export function MenuList({
  categories,
  defaultCategory,
}: {
  categories: readonly MenuListCategory[];
  defaultCategory?: string;
}) {
  const first = defaultCategory ?? categories[0]?.id;
  const [expanded, setExpanded] = useState<readonly string[]>(
    first ? [first] : [],
  );

  const toggle = useCallback((id: string) => {
    setExpanded((current) =>
      current.includes(id) ? current.filter((x) => x !== id) : [...current, id],
    );
  }, []);

  return (
    <Tabs defaultValue={first} className="gap-0">
      <TabsPrimitive.List
        aria-label="Kategori menu"
        className="mb-2.5 hidden justify-center gap-10 lg:flex"
      >
        {categories.map((category) => (
          <TabsPrimitive.Trigger
            key={category.id}
            value={category.id}
            className="relative cursor-pointer font-heading text-2xl font-semibold leading-[1.4] text-heading after:absolute after:top-1/2 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-[width] after:duration-500 hover:after:w-full focus-visible:after:w-full data-[state=active]:after:w-full"
          >
            {category.label}
          </TabsPrimitive.Trigger>
        ))}
      </TabsPrimitive.List>
      <div className="flex flex-col gap-[15px] lg:gap-0">
        {categories.map((category) => {
          const open = expanded.includes(category.id);
          const panelId = `menu-${category.id}`;
          return (
            <TabsContent
              key={category.id}
              value={category.id}
              forceMount
              className="text-lg data-[state=inactive]:lg:hidden"
            >
              <button
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => toggle(category.id)}
                className="flex w-full cursor-pointer items-center justify-between gap-2.5 border-b border-primary pb-2 text-left lg:hidden"
              >
                <span className="font-heading text-[22px] font-semibold text-heading md:text-2xl">
                  {category.label}
                </span>
                <PlusIcon
                  aria-hidden="true"
                  className={cn(
                    "size-5 text-primary transition-transform",
                    open && "rotate-45",
                  )}
                />
              </button>
              <ul
                id={panelId}
                className={cn(
                  "mt-2 lg:mt-0 lg:flex lg:flex-wrap lg:justify-between",
                  !open && "max-lg:hidden",
                )}
              >
                {category.items.map((item) => (
                  <Item key={item.name} item={item} />
                ))}
              </ul>
            </TabsContent>
          );
        })}
      </div>
    </Tabs>
  );
}
