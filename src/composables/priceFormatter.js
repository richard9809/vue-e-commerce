import { ref } from "vue";

export function usePriceFormatter(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
