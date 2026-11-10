"use client";

import { memo, useState } from "react";
import { FieldShell } from "@/components/forms/form-field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

type Option = { value: string; label: string };

export const SelectField = memo(function SelectField({
  name,
  label,
  options,
  error,
  defaultValue = "",
  required,
}: {
  name: string;
  label: string;
  options: readonly Option[];
  error?: string;
  defaultValue?: string;
  required?: boolean;
}) {
  const id = `field-${name}`;
  const [value, setValue] = useState(defaultValue);
  return (
    <FieldShell id={id} error={error}>
      <Select name={name} value={value} onValueChange={setValue}>
        <SelectTrigger
          id={id}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className="h-14 w-full rounded-none border-input bg-background px-4 pt-5 pb-1 text-base text-heading focus-visible:border-primary focus-visible:ring-0 aria-invalid:ring-0 data-[size=default]:h-14"
        >
          <SelectValue />
        </SelectTrigger>
        <SelectContent position="popper">
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <label
        htmlFor={id}
        className={cn(
          "pointer-events-none absolute left-4 origin-left text-foreground transition-all",
          value ? "top-2 text-xs" : "top-[18px] text-base",
        )}
      >
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
      </label>
    </FieldShell>
  );
});
