import { useToast } from "primevue/usetoast";

export default function useToastMessages() {
  const toast = useToast();

  const showSuccessToast = (summary, detail) => {
    toast.add({
      severity: "success",
      summary,
      detail,
      life: 10000,
    });
  };

  const showErrorToast = (summary, detail) => {
    toast.add({
      severity: "error",
      summary,
      detail,
      life: 3000,
    });
  };

  return { showSuccessToast, showErrorToast };
}
