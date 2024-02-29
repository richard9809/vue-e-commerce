<script setup>
import { ref, onMounted } from "vue";
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import { useProductStore } from "@/stores/product";
import { useCategoryStore } from "./stores/category";
import { useCartStore } from "./stores/cart";

const storeProduct = useProductStore();
const storeCategory = useCategoryStore();
const storeCart = useCartStore();

onMounted(() => {
  storeProduct.fetchProducts();
  storeCategory.fetchCategories();
  storeCart.fetchCartItems();
});

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
