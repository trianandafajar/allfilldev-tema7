# shadcn/ui

Terpasang pada 2026-10-29 lewat `bunx shadcn@latest init -t next -b radix -d -y`.

## Konfigurasi

Sumber kebenaran ada di `components.json`.

| Item | Nilai |
| --- | --- |
| Style | `radix-nova` |
| Base library | Radix (paket `radix-ui`) |
| Base color | `neutral` |
| CSS variables | ya, di `src/app/globals.css` |
| Icon | `lucide-react` |
| RSC | ya |
| Tailwind config | kosong (Tailwind v4, token lewat CSS) |

Alias:

| Alias | Lokasi |
| --- | --- |
| `@/components` | `src/components/` |
| `@/components/ui` | `src/components/ui/` (komponen shadcn) |
| `@/lib/utils` | `src/lib/utils.ts` (`cn`) |
| `@/hooks` | `src/hooks/` |

## Menambah komponen

```bash
bunx shadcn@latest add card
bunx shadcn@latest add dialog input label
```

File masuk ke `src/components/ui/` dan **menjadi milik repo ini**: boleh diedit. Jangan menimpa komponen yang sudah dimodifikasi tanpa `git diff` dulu (`add` akan menanyakan sebelum menimpa; jangan pakai `--overwrite` sembarangan).

Jika sebuah komponen shadcn dimodifikasi dari aslinya, catat perubahannya di bagian "Keputusan dan hal yang perlu diketahui" di bawah.

## Mengubah tema

Seluruh warna dan radius ada di `src/app/globals.css`:

- `:root` untuk mode terang, `.dark` untuk mode gelap (format `oklch`).
- `--radius` mengatur skala radius seluruh komponen.
- `--primary` adalah warna brand utama. Sudah diisi warna brand CafeId (`#B38E6A`, dari template Cafert). Teks putih di atas warna ini hanya 3.0:1 (di bawah WCAG AA 4.5:1); jika perlu lebih kontras, gelapkan token ini, mis. `oklch(0.571 0.067 63.4)` (4.53:1).

Komponen hanya memakai utility token (`bg-primary`, `text-muted-foreground`, `border-border`). Jangan menulis hex atau palet Tailwind mentah (`zinc-500`) di komponen.

## Keputusan dan hal yang perlu diketahui

- **Radix, bukan Base UI.** CLI menawarkan `radix`, `base`, `aria`. Dipilih Radix karena paling umum dan dokumentasinya paling banyak. Mengganti base di kemudian hari berarti meng-install ulang semua komponen.
- **`cn` dari paket `cn`**, bukan `clsx` + `tailwind-merge`. Ini bawaan CLI saat ini (`src/lib/utils.ts` hanya `export { cn } from "cn"`). Paket tersebut dari org `shadcn-ui` di GitHub. Impor tetap lewat `@/lib/utils`, jadi bisa diganti tanpa menyentuh komponen.
- **Dark mode berbasis class `.dark`.** Boilerplate Next sebelumnya memakai `prefers-color-scheme`; itu dihapus oleh CLI. Saat ini tidak ada toggle dan class `.dark` tidak dipasang di mana pun, jadi tampilan selalu terang. Untuk mengaktifkan, pasang provider tema (mis. `next-themes`) atau pasang class `dark` sendiri. Belum diputuskan.
- **Perbaikan font di `globals.css`.** CLI menulis `--font-sans: var(--font-sans)` (merujuk dirinya sendiri, font tidak akan termuat). Sudah diganti menjadi `var(--font-geist-sans)`, sama dengan variabel yang didefinisikan di `src/app/layout.tsx`. Jika menjalankan `shadcn init` ulang atau `--reinstall`, periksa baris ini lagi.
- **Dependency yang ikut terpasang**: `radix-ui`, `class-variance-authority`, `cn`, `lucide-react`, `tw-animate-css`, dan `shadcn` (dipakai untuk `@import "shadcn/tailwind.css"`).
- **Verifikasi**: `tsc --noEmit`, `eslint`, dan `next build` lolos setelah setup. Tampilan di browser belum dicek.

## Komponen tambahan dan modifikasi (port template Cafert)

Terpasang: `button tabs input textarea label sheet carousel dialog popover calendar select accordion`. `sheet` saat ini tidak dipakai (menu mobile memakai `HeaderShell` sendiri); hapus bila tidak dibutuhkan.

- **`--radius: 0`.** Template Cafert bersudut tajam. Semua komponen shadcn ikut persegi; naikkan nilai token bila ingin sudut membulat.
- **`button`**: varian `default` hover ke `bg-heading`; ukuran baru `cta` (h-60, uppercase, 14px/600) dan `play` (lingkaran 60/100px).
- **`carousel`**: `setState` di effect dibungkus `requestAnimationFrame` (aturan lint `react-hooks`) dengan cleanup `off`. Jangan timpa saat `shadcn add --overwrite`.
- **`dialog`**: overlay `bg-black/60` untuk pop-up video.
- **Ikon sosial** ada di `src/components/ui/social-icon.tsx` karena `lucide-react` v1 tidak punya ikon merek.
- **Font** sekarang Montserrat (`--font-montserrat`, teks) dan Raleway (`--font-raleway`, heading) lewat `next/font/google`; catatan font Geist di atas sudah tidak berlaku.
- **Breakpoint memakai bawaan Tailwind** (`sm 640`, `md 768`, `lg 1024`, `xl 1280`, `2xl 1536`); tidak ada breakpoint kustom dan tidak memakai `min-[...px]`. Header desktop mulai di `xl`.
- **Lebar konten**: satu `Container` (`src/components/layout/container.tsx`: `max-w-screen-2xl`, padding 20/40/80px) dipakai header, footer, dan semua section. Jangan menambah `max-w-*` pada Container untuk halaman biasa; lebar teks memakai skala bawaan (`max-w-3xl`, `max-w-4xl`).
- **Input custom** (`ui/input.tsx`, `ui/textarea.tsx`): persegi, tinggi 56px, label mengambang murni CSS (`placeholder=" "` + `peer`; label harus setelah kontrol). Dipakai lewat `components/forms/form-field.tsx`; `select-field.tsx` dan `date-picker-field.tsx` memakai pola yang sama dengan `Select` dan `Popover` + `Calendar` (locale `id`).
- **`accordion`** terpasang untuk FAQ; ikon chevron diganti `PlusIcon` yang berputar saat terbuka.
- **Animasi scroll** bukan komponen shadcn: `RevealObserver` (`components/motion`) + atribut `reveal("up")` dari `lib/reveal.ts`; gaya awalnya di `globals.css` hanya aktif bila JS menyala dan reduced-motion tidak diminta. Parallax memakai `animation-timeline: view()` dan tidak jalan di Firefox.
