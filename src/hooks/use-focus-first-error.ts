import { useEffect, useRef } from "react";
import type { FormState } from "@/lib/form-state";

/** Memindahkan fokus ke field pertama yang bermasalah setelah submit gagal. */
export function useFocusFirstError(state: FormState) {
  const formRef = useRef<HTMLFormElement>(null);
  useEffect(() => {
    if (state.status !== "error") return;
    formRef.current
      ?.querySelector<HTMLElement>('[aria-invalid="true"], [data-invalid="true"]')
      ?.focus();
  }, [state]);
  return formRef;
}
