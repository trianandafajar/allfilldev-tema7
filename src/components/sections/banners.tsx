import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

export type Banner =
  | {
      kind: "link";
      href: string;
      image: string;
      title: string;
      eyebrow?: string;
      text?: string;
    }
  | { kind: "image"; image: string };

const placement = [
  "md:row-span-2",
  "lg:col-span-2 lg:col-start-2 lg:row-start-1 lg:row-span-1",
  "",
  "",
  "lg:col-span-2 lg:col-start-3 lg:row-start-2",
] as const;

export function Banners({ items }: { items: readonly Banner[] }) {
  return (
    <div>
      <Container>
        <ul className="grid gap-[15px] md:grid-cols-2 lg:grid-cols-4 lg:gap-[30px]">
          {items.map((item, index) => (
            <li
              key={index}
              className={cn(
                placement[index],
                item.kind === "image" && "hidden lg:block",
              )}
            >
              {item.kind === "link" ? (
                <Link
                  href={item.href}
                  className={cn(
                    "group relative isolate flex h-full min-h-[235px] flex-col justify-end overflow-hidden",
                    index !== 0 && "md:justify-start",
                  )}
                >
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="-z-10 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <span aria-hidden="true" className="absolute inset-0 -z-10 bg-overlay/70" />
                  <span
                    className={cn(
                      "flex flex-col gap-y-2 bg-secondary p-[30px] md:bg-transparent",
                      index === 0 && "gap-y-0",
                    )}
                  >
                    {item.eyebrow ? (
                      <span className="block text-base font-medium uppercase text-heading">
                        {item.eyebrow}
                      </span>
                    ) : null}
                    <span className="font-heading text-[22px] font-semibold leading-[1.3] text-heading md:max-w-[210px] md:text-2xl md:leading-[1.4]">
                      {item.title}
                    </span>
                    {item.text ? (
                      <span className="text-base font-medium">{item.text}</span>
                    ) : null}
                  </span>
                </Link>
              ) : (
                <div className="relative h-full min-h-[235px]">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="25vw"
                    className="object-cover"
                  />
                </div>
              )}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
