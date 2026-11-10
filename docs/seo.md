# SEO, GEO, sitemap

Catatan setup. Dokumen ini diperbarui seiring fitur ditambah; bagian "Belum dikerjakan" adalah daftar kerja berikutnya.

"GEO" di sini berarti Generative Engine Optimization (agar muncul/terkutip di jawaban AI). SEO lokal (area layanan, alamat) dicatat terpisah di bagian terakhir.

## Yang sudah ada

| Fitur | File | Keterangan |
| --- | --- | --- |
| Identitas situs | `src/config/site.ts` | `siteConfig`, `sitePages`, `siteContact` (alamat, geo, jam buka terstruktur, sosial), `siteBusiness` (kisaran harga, masakan, kata kunci) |
| Metadata per halaman | `src/lib/seo.ts` | `pageMetadata({ path, title, description, type })`: title, canonical, Open Graph, Twitter |
| Metadata global | `src/app/layout.tsx` | `metadataBase`, title template, `robots` (`max-image-preview: large`), `viewport.themeColor`, keywords, `formatDetection`, tag geo (`geo.region`, `geo.placename`, `geo.position`, `ICBM`) |
| Gambar share | `src/app/opengraph-image.tsx`, `src/app/blog/[slug]/opengraph-image.tsx`, `src/lib/og.tsx` | PNG 1200x630 dari `ImageResponse`, diprerender saat build |
| Ikon | `src/app/icon.svg`, `src/app/apple-icon.tsx`, `src/app/favicon.ico`, `src/app/manifest.ts` | `favicon.ico` dibuat dari `icon.svg` dengan ImageMagick: `magick -background none -density 384 src/app/icon.svg -define icon:auto-resize=16,32,48 src/app/favicon.ico` |
| JSON-LD | `src/lib/jsonld.ts`, `src/components/seo/json-ld.tsx` | `Organization` + `WebSite` (layout), `CafeOrCoffeeShop` lengkap (beranda dan kontak), `BreadcrumbList` (otomatis di `PageHeader`), `BlogPosting` (artikel), `FAQPage` |
| Tombol bagikan | `src/components/blog/share-links.tsx`, `copy-link-button.tsx` | WhatsApp, Facebook, X (tautan biasa), dan salin tautan/Web Share API |
| robots.txt, sitemap.xml | `src/app/robots.ts`, `src/app/sitemap.ts` | Sitemap dari `sitePages` + artikel: `lastModified`, `changeFrequency`, `priority`, `images`, `alternates` |
| llms.txt | `src/app/llms.txt/route.ts` | Ringkasan situs untuk AI: info, jam buka, halaman, artikel |

Tidak ada package tambahan; semua memakai fitur bawaan Next.

## Nilai contoh yang harus diganti

Di `src/config/site.ts`, blok `siteContact` dan `siteBusiness` berisi data **contoh** (alamat "Jl. Contoh No. 1", koordinat pusat Jakarta, telepon, email `halo@example.com`, jam buka, harga, akun sosial). Semua turunan (footer, kontak, JSON-LD, geo, llms.txt, peta) mengikuti file itu, jadi cukup ubah di sana. Domain dari `NEXT_PUBLIC_SITE_URL`.

Warna di `src/lib/og.tsx`, `src/app/apple-icon.tsx`, `src/app/icon.svg`, `src/app/manifest.ts`, dan `viewport.themeColor` adalah padanan heksa token di `globals.css` (OG/ikon/manifest tidak bisa membaca oklch atau CSS variable). Ubah juga bila tema berganti.

## Environment

`NEXT_PUBLIC_SITE_URL` (lihat `.env.example`) menentukan domain di canonical, sitemap, robots, llms.txt, dan JSON-LD. Jika kosong, jatuh ke `http://localhost:3000`, jadi **wajib diisi di production**. Nilainya ikut tertanam saat build, bukan saat runtime.

## Menambah halaman baru

1. Buat route di `src/app/...`.
2. Daftarkan di `sitePages` (`src/config/site.ts`). Otomatis masuk sitemap dan llms.txt.
3. Di `page.tsx` export `metadata` berisi `title`, `description`, dan `alternates: { canonical: "/path" }`. Title otomatis diberi akhiran nama situs.
4. Halaman yang tidak boleh diindeks (login, dashboard): jangan masukkan ke `sitePages`, dan set `robots: { index: false }` pada metadata-nya.

## Keputusan dan batasan

- **Jangan pakai `new Date()` di sitemap.** Dengan `cacheComponents: true`, `new Date()` saat prerender membuat build gagal. `lastModified` diisi dari data tetap: `sitePages[].lastModified` (perbarui saat isi halaman berubah) dan `isoDate` tiap artikel di `src/data/blog.ts`. Halaman 2+ blog (`/blog?page=N`) tidak masuk sitemap; canonical-nya `/blog`.
- **URL berbahasa Indonesia.** Alamat lama (`/about`, `/services`, `/team`, `/contacts`, `/reservations`, `/privacy`, `/terms`, `/blog/page/N`) dialihkan 308 lewat `redirects()` di `next.config.ts`.
- **Canonical diset per halaman (lewat `pageMetadata`), bukan di layout.** Canonical di layout akan menunjuk semua halaman ke `/`.
- **`twitter:card` = `summary_large_image`**; gambarnya dari file `opengraph-image` terdekat (root atau per artikel).
- **Open Graph di halaman menggantikan seluruh objek di layout**, makanya `pageMetadata` menulis ulang `siteName` dan `locale`. Jangan menulis `openGraph` langsung di halaman.
- **`<html lang>`** diambil dari `siteConfig.language` (`id`).
- **Rute berparameter** (`/blog/[slug]`) membaca `params` di dalam `<Suspense>` agar App Shell tidak terikat satu URL (insight dev overlay "URL data outside of Suspense").
- **`reveal()`** menambah `suppressHydrationWarning` karena `RevealObserver` menambah `data-revealed` sebelum hydrate selesai.
- **JSON-LD** disisipkan lewat `<script>` biasa, dengan `<` di-escape (`<`) sesuai panduan Next, supaya data dinamis tidak bisa menutup tag script.
- **llms.txt** adalah usulan standar komunitas, dan belum ada bukti kuat mesin AI utama membacanya. Biayanya kecil, jadi disertakan, tapi jangan dianggap pengganti konten yang jelas, JSON-LD, dan halaman yang bisa di-crawl.
- **Crawler AI** (GPTBot, ClaudeBot, PerplexityBot, dll.) tidak diblokir karena aturan `*` mengizinkan semua. Untuk membatasi, tambah rule per `userAgent` di `robots.ts`.

## Halaman FAQ dan legal

- `/faq` memuat JSON-LD `FAQPage` yang dibangun dari `src/data/faq.ts` (sumber yang sama dengan tampilan).
- `/privasi` dan `/syarat-ketentuan` isinya di `src/data/legal.ts`. Itu draf umum bahasa Indonesia (merujuk UU No. 27 Tahun 2022); tinjau oleh pemilik usaha atau penasihat hukum sebelum rilis, dan perbarui `updated`/`updatedIso` setiap revisi.
- Ketiganya `inNav: false`, ditautkan dari baris bawah footer.

## Belum dikerjakan

- [ ] **Search Console / Bing Webmaster**: verifikasi domain dan submit `sitemap.xml` setelah domain final.
- [ ] **Multi-bahasa** (`alternates.languages` / hreflang) bila situs lebih dari satu bahasa. Lihat guide `internationalization.md`.
- [ ] **Validasi** dengan Rich Results Test dan Schema Markup Validator setelah ada URL publik.

## SEO lokal (area layanan)

Beranda sudah memuat JSON-LD `CafeOrCoffeeShop` dari `siteContact` (alamat berupa teks bebas, nilai contoh). Setelah data bisnis nyata ada, lengkapi `address` (PostalAddress), `geo`, `openingHoursSpecification`.

Catatan awal: Untuk bisnis jasa lokal, tambahkan `LocalBusiness` (atau subtipe) JSON-LD dengan `address`, `geo`, `areaServed`, `openingHoursSpecification`, `telephone`. Datanya harus sama persis dengan Google Business Profile. Letakkan di halaman terkait (bukan layout), memakai komponen `JsonLd`.
