import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { media } from "@/data/media";

export const metadata: Metadata = {
  title: "Halaman Tidak Ditemukan",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center justify-center py-[130px] text-center">
      <Image
        src={media.muffinBunga.src}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-overlay" aria-hidden="true" />
      <Container className="relative flex flex-col items-center">
        <span className="mb-2.5 font-heading text-lg font-semibold uppercase tracking-widest">
          Error 404
        </span>
        <h1 className="mb-5">Halaman Tidak Ditemukan</h1>
        <p className="mx-auto mb-8 max-w-[650px] font-medium">
          Halaman yang Anda cari mungkin sudah dihapus, berganti nama, atau
          sedang tidak tersedia.
        </p>
        <Button asChild size="cta">
          <Link href="/">Kembali ke Beranda</Link>
        </Button>
      </Container>
    </section>
  );
}
