import { QuoteIcon } from "lucide-react";

export function BlogQuote({
  text,
  author,
}: {
  text: string;
  author: string;
}) {
  return (
    <figure className="relative bg-secondary px-5 py-[30px] md:px-10 md:py-[50px] lg:px-[60px]">
      <QuoteIcon
        className="mb-5 size-10 fill-primary text-primary"
        aria-hidden="true"
      />
      <blockquote className="font-heading text-[22px] font-semibold leading-[1.4] text-heading md:text-[25px]">
        {text}
      </blockquote>
      <figcaption className="mt-5 text-base font-semibold text-primary">
        {author}
      </figcaption>
    </figure>
  );
}
