import { CalendarIcon, PinIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function PostMeta({
  date,
  isoDate,
  featured,
  className,
}: {
  date: string;
  isoDate: string;
  featured?: boolean;
  className?: string;
}) {
  return (
    <ul className={cn("flex flex-wrap gap-x-[25px] gap-y-1", className)}>
      <li className="flex items-center gap-2.5 text-base font-medium leading-normal">
        <CalendarIcon className="size-[18px] text-primary" aria-hidden="true" />
        <time dateTime={isoDate}>{date}</time>
      </li>
      {featured ? (
        <li className="flex items-center gap-2.5 text-base font-medium leading-normal text-primary">
          <PinIcon className="size-[18px]" aria-hidden="true" />
          Unggulan
        </li>
      ) : null}
    </ul>
  );
}
