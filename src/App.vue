<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";

const date = ref();
const value = ref("");
</script>

<template>
  <!-- Header -->
  <header class="flex align-items-center border-bottom-1 border-200">
    <Navbar />
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  height: 4rem;
}
</style>
