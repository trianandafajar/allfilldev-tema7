# zod

Validasi form di sisi server (zod 4, `bun add zod`).

## Struktur

- `src/lib/schemas.ts`: skema `reservationSchema` dan `contactSchema`, pesan error berbahasa Indonesia.
- `src/lib/form-state.ts`: tipe `FormState` dan `parseForm(schema, formData)`. Hasil gagal berisi satu pesan per field (`errors`) dan nilai isian (`values`) agar form tidak kosong lagi.
- Server Action: `src/app/reservasi/actions.ts`, `src/app/kontak/actions.ts`.
- Form client (`useActionState`): `src/components/forms/*`. `FormField` memasang `aria-invalid` dan `aria-describedby` ke pesan error.

## Menambah form baru

1. Tambah skema di `schemas.ts`.
2. Buat `actions.ts` yang memanggil `parseForm`, lalu mengembalikan `FormState`.
3. Buat komponen form dengan `FormField`, `FormStatus`, dan `Button`.

## Catatan

- **Belum ada tujuan pengiriman.** Action hanya memvalidasi lalu menampilkan pesan sukses. Tambahkan email atau database di action setelah `parseForm` berhasil.
- Tanggal dan jam memakai input native (`type="date"`/`"time"`). Zod: `z.iso.date()` dan `z.iso.time({ precision: -1 })` (format `HH:MM`).
- Belum ada pembatasan spam (rate limit atau honeypot); tambahkan sebelum form dihubungkan ke email.
