<script setup>
import { ref } from "vue";
import TotalComponent from "@/components/TotalComponent.vue";
import CartItem from "@/components/CartItem.vue";

</script>

<template>
  <div class="h-full">
    <div class="container py-4 h-full">
      <div
        class="flex flex-column justify-content-between md:flex-row md:justify-content-between h-full overflow-hidden"
      >
        <div class="overflow-y-auto mb-4 md:h-full md:w-full">
          <CartItem />
        </div>

        <div class="w-full">
          <TotalComponent />
        </div>
      </div>
    </div>
  </div>
</template>