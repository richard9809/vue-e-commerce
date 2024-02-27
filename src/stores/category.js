import { defineStore } from "pinia";

export const useCategoryStore = defineStore("category", {
  state: () => ({
    categories: [],
  }),

  getters: {
    categoriesContent() {
      return this.categories;
    },
    categoryNames() {
      return this.categories.map((category) => category.name);
    },
  },

  actions: {
    async fetchCategories() {
      try {
        const categories = await fetch(
          `https://api.escuelajs.co/api/v1/categories/`
        );
        const data = await categories.json();
        this.categories = data;
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
