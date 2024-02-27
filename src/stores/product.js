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
    async fetchFilteredProducts({
      title = "",
      price_min = "",
      price_max = "",
      categoryId = "",
    }) {
      try {
        const url = new URL(`https://api.escuelajs.co/api/v1/products/`);
        if (title) {
          url.searchParams.append("title", title);
        }
        if (price_min && price_max) {
          url.searchParams.append("price_min", price_min);
          url.searchParams.append("price_max", price_max);
        }
        if (categoryId) {
          url.searchParams.append("categoryId", categoryId);
        }

        const products = await fetch(url);
        const data = await products.json();
        this.products = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
