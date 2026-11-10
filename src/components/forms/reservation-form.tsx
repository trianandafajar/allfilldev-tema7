"use client";

import { useActionState } from "react";
import { submitReservation } from "@/app/reservasi/actions";
import { DatePickerField } from "@/components/forms/date-picker-field";
import { FormField } from "@/components/forms/form-field";
import { FormStatus } from "@/components/forms/form-status";
import { SelectField } from "@/components/forms/select-field";
import { Button } from "@/components/ui/button";
import { seatOptions, timeOptions } from "@/data/forms";
import { useFocusFirstError } from "@/hooks/use-focus-first-error";
import { idleState } from "@/lib/form-state";

export function ReservationForm() {
  const [state, action, pending] = useActionState(submitReservation, idleState);
  const formRef = useFocusFirstError(state);
  const error = (name: string) => state.errors?.[name];
  const value = (name: string) => state.values?.[name];
  return (
    <form
      ref={formRef}
      action={action}
      noValidate
      className="flex h-full flex-col gap-[15px] lg:gap-[25px]"
    >
      <div
        key={state.status === "success" ? "sent" : "fields"}
        className="grid flex-1 gap-[15px] md:grid-cols-2 md:grid-rows-[auto_auto_auto_1fr] lg:gap-[25px]"
      >
        <FormField name="name" label="Nama" autoComplete="name" required error={error("name")} defaultValue={value("name")} />
        <FormField name="email" label="Email" type="email" autoComplete="email" required error={error("email")} defaultValue={value("email")} />
        <FormField name="phone" label="Telepon" type="tel" autoComplete="tel" required error={error("phone")} defaultValue={value("phone")} />
        <SelectField name="seats" label="Jumlah tamu" options={seatOptions} required error={error("seats")} defaultValue={value("seats")} />
        <DatePickerField name="date" label="Tanggal" required error={error("date")} defaultValue={value("date")} />
        <SelectField name="time" label="Jam" options={timeOptions} required error={error("time")} defaultValue={value("time")} />
        <FormField name="message" label="Catatan (opsional)" multiline fill error={error("message")} defaultValue={value("message")} className="md:col-span-2" />
      </div>
      <FormStatus state={state} />
      <Button type="submit" size="cta" disabled={pending} className="w-full">
        {pending ? "Mengirim..." : "Reservasi"}
      </Button>
    </form>
  );
}
