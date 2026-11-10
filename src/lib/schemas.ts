import { z } from "zod";

const name = z.string().trim().min(2, "Nama minimal 2 huruf.").max(80);
const email = z.email("Alamat email tidak valid.");
const phone = z
  .string()
  .trim()
  .regex(/^\+?[0-9\s-]{8,16}$/, "Nomor telepon tidak valid.");

export const reservationSchema = z.object({
  name,
  email,
  phone,
  date: z.iso.date("Pilih tanggal kunjungan."),
  time: z.iso.time({ precision: -1, error: "Pilih jam kunjungan." }),
  seats: z.coerce
    .number("Isi jumlah tamu.")
    .int("Jumlah tamu harus bilangan bulat.")
    .min(1, "Pilih jumlah tamu.")
    .max(20, "Untuk lebih dari 20 tamu, hubungi kami langsung."),
  message: z.string().trim().max(500, "Maksimal 500 karakter.").optional(),
});

export const contactSchema = z.object({
  firstName: name,
  lastName: z.string().trim().max(80).optional(),
  email,
  phone: phone.optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Pesan minimal 10 karakter.")
    .max(1000, "Maksimal 1000 karakter."),
});
