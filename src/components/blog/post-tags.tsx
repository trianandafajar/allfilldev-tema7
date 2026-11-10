import { cn } from "@/lib/utils";

export function PostTags({
  tags,
  className,
}: {
  tags: readonly string[];
  className?: string;
}) {
  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {tags.map((tag) => (
        <li
          key={tag}
          className="bg-primary px-[15px] py-1 text-sm font-medium text-primary-foreground"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
