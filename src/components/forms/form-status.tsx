import type { FormState } from "@/lib/form-state";
import { cn } from "@/lib/utils";

export function FormStatus({ state }: { state: FormState }) {
  if (state.status === "idle" || !state.message) return null;
  const success = state.status === "success";
  return (
    <p
      role={success ? "status" : "alert"}
      className={cn(
        "border px-5 py-4 text-base",
        success
          ? "border-vegan text-vegan"
          : "border-destructive text-destructive",
      )}
    >
      {state.message}
    </p>
  );
}
