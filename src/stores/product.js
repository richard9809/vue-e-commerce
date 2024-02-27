import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
  state: () => ({
    products: [],
  }),

  getters: {
    productsContent() {
      return this.products;
    },
  },

  actions: {
    async fetchProducts() {
      try {
        const products = await fetch(
          `https://api.escuelajs.co/api/v1/products/`
        );
        const data = await products.json();
        this.products = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
