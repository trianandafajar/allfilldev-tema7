"use server";

import { parseForm, type FormState } from "@/lib/form-state";
import { contactSchema } from "@/lib/schemas";

export async function submitContact(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const parsed = parseForm(contactSchema, formData);
  if (!parsed.ok) return parsed.state;

  return {
    status: "success",
    message: `Terima kasih, ${parsed.data.firstName}. Pesan Anda sudah kami terima dan akan kami balas secepatnya.`,
  };
}
