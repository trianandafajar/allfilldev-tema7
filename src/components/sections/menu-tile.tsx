import Image from "next/image";
import { cn } from "@/lib/utils";

export type MenuItem = {
  title: string;
  price: string;
  ingredients: string;
  image: string;
};

export function MenuTile({
  item,
  size = "md",
  className,
  sizes,
}: {
  item: MenuItem;
  size?: "md" | "lg";
  className?: string;
  sizes: string;
}) {
  return (
    <article
      tabIndex={0}
      className={cn("group relative overflow-hidden outline-offset-2", className)}
    >
      <Image
        src={item.image}
        alt=""
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div
        className={cn(
          "absolute inset-0 flex flex-col items-center justify-center bg-overlay p-5 text-center text-sm opacity-0 transition-opacity duration-[400ms] group-hover:opacity-100 group-focus-visible:opacity-100",
          size === "lg" && "items-start p-[30px] text-left duration-300",
        )}
      >
        <span
          className={cn(
            "flex aspect-square w-fit items-center justify-center rounded-full bg-primary p-[5px] font-heading font-semibold text-primary-foreground",
            size === "md" ? "min-h-10 min-w-10" : "min-h-[50px] min-w-[50px]",
          )}
        >
          {item.price}
        </span>
        <h3
          className={cn(
            "text-lg font-semibold",
            size === "md" ? "mt-[15px] mb-1" : "mt-[15px] mb-2",
          )}
        >
          {item.title}
        </h3>
        <p>{item.ingredients}</p>
      </div>
    </article>
  );
}
