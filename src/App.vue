<script setup>
import { ref, onMounted } from "vue";
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import { useProductStore } from "@/stores/product";
import { useCategoryStore } from "./stores/category";

const storeProduct = useProductStore();
const storeCategory = useCategoryStore();

onMounted(() => {
  storeProduct.fetchProducts();
  storeCategory.fetchCategories();
});

const date = ref();
const value = ref("");
</script>

<template>
  <!-- Header -->
  <header class="flex align-items-center border-bottom-1 border-200">
    <Navbar />
  </header>
  <main class="h-full">
    <RouterView />
  </main>
</template>

<style scoped>
header {
  height: 4rem;
}
</style>