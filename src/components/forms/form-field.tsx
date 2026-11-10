import { memo, type ComponentProps, type ReactNode } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

/** Label mengambang murni CSS: kontrol harus berada tepat sebelum label dan memakai `peer`. */
export const floatingLabel =
  "pointer-events-none absolute left-4 top-2 origin-left text-xs text-foreground transition-all peer-placeholder-shown:top-[18px] peer-placeholder-shown:text-base peer-focus:top-2! peer-focus:text-xs! peer-focus:text-primary";

export function FieldShell({
  id,
  error,
  className,
  children,
}: {
  id: string;
  error?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <div className="relative flex-1">{children}</div>
      {error ? (
        <p id={`${id}-error`} role="alert" className="text-sm text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}

type Props = {
  name: string;
  label: string;
  error?: string;
  defaultValue?: string;
  required?: boolean;
  multiline?: boolean;
  fill?: boolean;
  className?: string;
} & Omit<
  ComponentProps<"input">,
  "name" | "defaultValue" | "required" | "className" | "placeholder"
>;

export const FormField = memo(function FormField({
  name,
  label,
  error,
  defaultValue,
  required,
  multiline,
  fill,
  className,
  ...inputProps
}: Props) {
  const id = `field-${name}`;
  const shared = {
    id,
    name,
    defaultValue,
    required,
    placeholder: " ",
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? `${id}-error` : undefined,
  };
  return (
    <FieldShell id={id} error={error} className={className}>
      {multiline ? (
        <Textarea {...shared} className={fill ? "h-full" : undefined} />
      ) : (
        <Input {...shared} {...inputProps} />
      )}
      <label htmlFor={id} className={floatingLabel}>
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
      </label>
    </FieldShell>
  );
});
