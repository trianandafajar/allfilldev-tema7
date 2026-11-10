"use client";

import { useActionState } from "react";
import { submitContact } from "@/app/kontak/actions";
import { FormField } from "@/components/forms/form-field";
import { FormStatus } from "@/components/forms/form-status";
import { Button } from "@/components/ui/button";
import { useFocusFirstError } from "@/hooks/use-focus-first-error";
import { idleState } from "@/lib/form-state";

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, idleState);
  const formRef = useFocusFirstError(state);
  const error = (name: string) => state.errors?.[name];
  const value = (name: string) => state.values?.[name];
  return (
    <form
      ref={formRef}
      action={action}
      noValidate
      className="flex flex-col gap-[15px] lg:gap-[25px]"
    >
      <div
        key={state.status === "success" ? "sent" : "fields"}
        className="grid gap-[15px] md:grid-cols-2 lg:gap-[25px]"
      >
        <FormField name="firstName" label="Nama depan" autoComplete="given-name" required error={error("firstName")} defaultValue={value("firstName")} />
        <FormField name="lastName" label="Nama belakang" autoComplete="family-name" error={error("lastName")} defaultValue={value("lastName")} />
        <FormField name="email" label="Email" type="email" autoComplete="email" required error={error("email")} defaultValue={value("email")} />
        <FormField name="phone" label="Telepon (opsional)" type="tel" autoComplete="tel" error={error("phone")} defaultValue={value("phone")} />
        <FormField name="message" label="Pesan" multiline required error={error("message")} defaultValue={value("message")} className="md:col-span-2" />
      </div>
      <FormStatus state={state} />
      <Button type="submit" size="cta" disabled={pending} className="w-full">
        {pending ? "Mengirim..." : "Kirim"}
      </Button>
    </form>
  );
}
