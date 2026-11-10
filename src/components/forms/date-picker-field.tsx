"use client";

import { format, parseISO, startOfToday } from "date-fns";
import { id as idLocale } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { memo, useState } from "react";
import { FieldShell } from "@/components/forms/form-field";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export const DatePickerField = memo(function DatePickerField({
  name,
  label,
  error,
  defaultValue,
  required,
}: {
  name: string;
  label: string;
  error?: string;
  defaultValue?: string;
  required?: boolean;
}) {
  const id = `field-${name}`;
  const [date, setDate] = useState<Date | undefined>(
    defaultValue ? parseISO(defaultValue) : undefined,
  );
  const [open, setOpen] = useState(false);
  const [minDate, setMinDate] = useState<Date>();

  function handleOpenChange(next: boolean) {
    if (next) setMinDate(startOfToday());
    setOpen(next);
  }

  return (
    <FieldShell id={id} error={error}>
      <Popover open={open} onOpenChange={handleOpenChange}>
        <PopoverTrigger asChild>
          <button
            type="button"
            id={id}
            aria-haspopup="dialog"
            data-invalid={error ? true : undefined}
            aria-describedby={error ? `${id}-error` : undefined}
            className="flex h-14 w-full items-center justify-between border border-input bg-background px-4 pt-5 pb-1 text-left text-base text-heading outline-none transition-colors focus-visible:border-primary data-[invalid=true]:border-destructive"
          >
            <span>{date ? format(date, "d MMMM yyyy", { locale: idLocale }) : ""}</span>
            <CalendarIcon className="size-5 text-primary" aria-hidden="true" />
          </button>
        </PopoverTrigger>
        <PopoverContent align="start" className="w-auto p-0">
          <Calendar
            mode="single"
            className="[--cell-size:--spacing(10)]"
            locale={idLocale}
            selected={date}
            defaultMonth={date}
            disabled={minDate ? { before: minDate } : undefined}
            onSelect={(next) => {
              setDate(next);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
      <input
        type="hidden"
        name={name}
        value={date ? format(date, "yyyy-MM-dd") : ""}
      />
      <label
        htmlFor={id}
        className={cn(
          "pointer-events-none absolute left-4 origin-left text-foreground transition-all",
          date ? "top-2 text-xs" : "top-[18px] text-base",
        )}
      >
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
      </label>
    </FieldShell>
  );
});
