# Foto dan kompresi WebP (ffmpeg)

Semua foto situs berupa WebP di `public/img/`. File mentah JPG tidak di-commit (`/assets-src/` ada di `.gitignore`); dua skrip di `scripts/` membuat ulang semuanya.

## Alur

```bash
bun scripts/fetch-photos.mjs      # unduh JPG sumber ke assets-src/ (sesuai scripts/photos.json)
bun scripts/optimize-images.mjs   # ubah ke public/img/*.webp dengan ffmpeg
```

Syarat: `ffmpeg` dengan encoder `libwebp` ada di `PATH` (di mesin ini `C:fmpegin`).

Perintah per file yang dijalankan skrip:

```bash
ffmpeg -i in.jpg -vf "scale='min(W,iw)':-2" -c:v libwebp -quality Q -compression_level 6 -preset photo out.webp
```

| Awalan nama | Lebar maks (W) | Kualitas (Q) | Dipakai untuk |
| --- | --- | --- | --- |
| `hero-` | 1920 | 65 | Slide hero, banner paralaks, latar header/testimoni (tertutup overlay) |
| `tim-` | 700 | 78 | Kartu tim |
| `avatar-` | 160 | 78 | (cadangan, belum dipakai) |
| lainnya | 1000 | 78 | Kartu menu, artikel, galeri |

Hasil saat ini: 13 MB JPG menjadi sekitar 4 MB WebP. `next/image` tetap membuat varian responsif dari file ini.

## Menambah atau mengganti foto

1. Tambah entri di `scripts/photos.json` (`"nama-file": <id foto Pexels>`), atau taruh JPG sendiri di `assets-src/nama-file.jpg`.
2. Jalankan kedua skrip.
3. Daftarkan di `src/data/media.ts` dengan teks alternatif bahasa Indonesia yang menjelaskan isi foto, lalu pakai `media.<nama>` dari file data. Jangan menulis path `/img/...` langsung di komponen atau data lain.

Gambar share (Open Graph) sengaja bukan WebP: dibuat sebagai PNG oleh `src/app/opengraph-image.tsx`, karena banyak crawler media sosial tidak membaca WebP.

## Sumber dan lisensi

Foto berasal dari Pexels. Lisensi Pexels mengizinkan pemakaian gratis, termasuk komersial, tanpa kewajiban atribusi. Nama fotografer tidak dicatat di repo ini; halaman sumber di bawah memuatnya.

**Foto stok ini bersifat sementara.** Foto tim dan galeri acara bukan staf atau acara CafeId yang sebenarnya, dan hidangan di foto belum tentu sama dengan hidangan di menu. Ganti dengan foto kafe sendiri sebelum rilis.

| Berkas (`public/img/<nama>.webp`) | Sumber |
| --- | --- |
| `hero-ruang` | https://www.pexels.com/photo/6457517/ |
| `hero-barista` | https://www.pexels.com/photo/302899/ |
| `hero-sarapan` | https://www.pexels.com/photo/566566/ |
| `hero-header` | https://www.pexels.com/photo/19498991/ |
| `hero-testimoni` | https://www.pexels.com/photo/1695052/ |
| `hero-acara` | https://www.pexels.com/photo/14457430/ |
| `muffin-bunga` | https://www.pexels.com/photo/131897/ |
| `kopi-susu-aren` | https://www.pexels.com/photo/31911261/ |
| `teh-melati` | https://www.pexels.com/photo/5946774/ |
| `cafe-latte` | https://www.pexels.com/photo/16135710/ |
| `es-kopi-hitam` | https://www.pexels.com/photo/28901490/ |
| `salad-segar` | https://www.pexels.com/photo/35652678/ |
| `lumpia-sayur` | https://www.pexels.com/photo/6646369/ |
| `roti-telur-poached` | https://www.pexels.com/photo/4109530/ |
| `aneka-lauk` | https://www.pexels.com/photo/11837281/ |
| `nasi-goreng` | https://www.pexels.com/photo/32938733/ |
| `pancake-madu` | https://www.pexels.com/photo/9597582/ |
| `roti-telur` | https://www.pexels.com/photo/32134464/ |
| `roti-alpukat` | https://www.pexels.com/photo/3872371/ |
| `kue-cokelat` | https://www.pexels.com/photo/4861852/ |
| `tiramisu` | https://www.pexels.com/photo/6880219/ |
| `cheesecake-buah` | https://www.pexels.com/photo/9009965/ |
| `muffin-cokelat` | https://www.pexels.com/photo/3650438/ |
| `tiramisu-kopi` | https://www.pexels.com/photo/14766327/ |
| `es-kopi-karamel` | https://www.pexels.com/photo/33793180/ |
| `croissant-almond` | https://www.pexels.com/photo/27969785/ |
| `latte-art` | https://www.pexels.com/photo/34910279/ |
| `pancake-beri` | https://www.pexels.com/photo/2635307/ |
| `kue-kopi` | https://www.pexels.com/photo/8308187/ |
| `promo-pancake` | https://www.pexels.com/photo/3780469/ |
| `promo-kopi` | https://www.pexels.com/photo/2159156/ |
| `promo-roti` | https://www.pexels.com/photo/20220615/ |
| `promo-pastri` | https://www.pexels.com/photo/30890368/ |
| `promo-rabu` | https://www.pexels.com/photo/20586637/ |
| `offer-sarapan` | https://www.pexels.com/photo/1603463/ |
| `testimoni-teman` | https://www.pexels.com/photo/5225313/ |
| `kopi-teh-meja` | https://www.pexels.com/photo/15675493/ |
| `teman-ngopi` | https://www.pexels.com/photo/4920902/ |
| `ruang-makan` | https://www.pexels.com/photo/8890516/ |
| `acara-ulang-tahun` | https://www.pexels.com/photo/7180598/ |
| `pesta-anak` | https://www.pexels.com/photo/5610323/ |
| `keluarga-masak` | https://www.pexels.com/photo/4262422/ |
| `kue-ulang-tahun` | https://www.pexels.com/photo/7254232/ |
| `kue-selamat` | https://www.pexels.com/photo/11527494/ |
| `tim-koki` | https://www.pexels.com/photo/2544829/ |
| `tim-barista` | https://www.pexels.com/photo/29516134/ |
| `tim-pastri` | https://www.pexels.com/photo/2245295/ |
| `tim-manajer` | https://www.pexels.com/photo/20418284/ |
| `tim-dapur` | https://www.pexels.com/photo/5251019/ |
| `tim-pramusaji` | https://www.pexels.com/photo/33683554/ |
| `blog-penutup` | https://www.pexels.com/photo/13177921/ |
| `blog-teh` | https://www.pexels.com/photo/229493/ |
| `blog-biji-kopi` | https://www.pexels.com/photo/6612674/ |
| `blog-biji-curah` | https://www.pexels.com/photo/1695052/ |
| `blog-teh-teko` | https://www.pexels.com/photo/5052684/ |
| `blog-muffin-karangan` | https://www.pexels.com/photo/131899/ |
| `blog-es-merah` | https://www.pexels.com/photo/38622185/ |
