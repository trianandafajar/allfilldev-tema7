import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";
import { media } from "@/data/media";
import { breadcrumbJsonLd } from "@/lib/jsonld";

export type Crumb = { label: string; href?: string };

export function PageHeader({
  title,
  crumbs,
  image = media.heroHeader.src,
}: {
  title: string;
  crumbs: readonly Crumb[];
  image?: string;
}) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <div
        className="relative isolate flex h-[270px] flex-col items-center justify-center bg-cover bg-center px-5 text-center lg:h-[450px]"
        style={{ backgroundImage: `url(${image})` }}
      >
        <span aria-hidden="true" className="absolute inset-0 -z-10 bg-secondary/75" />
        <h1 className="mt-[70px] text-[30px] font-bold capitalize md:text-[40px] md:leading-[1.3] lg:mt-[130px] lg:text-[48px] lg:leading-[1.2]">
          {title}
        </h1>
      </div>
      <nav aria-label="Jejak halaman" className="bg-secondary p-5 text-center">
        <ol className="flex flex-wrap justify-center font-heading text-lg font-semibold capitalize">
          {crumbs.map((crumb, index) => (
            <li
              key={crumb.label}
              className={
                index < crumbs.length - 1
                  ? "after:ml-1 after:pr-1 after:content-['/']"
                  : undefined
              }
            >
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="text-primary transition-colors hover:text-heading"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span aria-current="page">{crumb.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
