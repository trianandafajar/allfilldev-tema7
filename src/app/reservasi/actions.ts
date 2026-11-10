"use server";

import { parseForm, type FormState } from "@/lib/form-state";
import { reservationSchema } from "@/lib/schemas";

export async function submitReservation(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const parsed = parseForm(reservationSchema, formData);
  if (!parsed.ok) return parsed.state;

  const today = new Date().toLocaleDateString("en-CA", {
    timeZone: "Asia/Jakarta",
  });
  if (parsed.data.date < today) {
    return {
      status: "error",
      message: "Periksa kembali isian yang ditandai.",
      errors: { date: "Tanggal tidak boleh sudah lewat." },
      values: Object.fromEntries(
        [...formData.entries()].filter(
          (entry): entry is [string, string] => typeof entry[1] === "string",
        ),
      ),
    };
  }

  // Belum ada tujuan pengiriman (email atau database); data hanya divalidasi.
  return {
    status: "success",
    message: `Terima kasih, ${parsed.data.name}. Permintaan reservasi Anda sudah kami terima dan akan kami konfirmasi lewat email.`,
  };
}
