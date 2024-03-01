<script setup>
import { ref } from "vue";
import TotalComponent from "@/components/TotalComponent.vue";
import CartItem from "@/components/CartItem.vue";
import { useCartStore } from "@/stores/cart";

const store = useCartStore();
</script>

<template>
  <Toast />
  <div class="h-full">
    <div class="container py-4 h-full">
      <div
        class="pt-2 flex flex-column justify-content-between md:pt-4 md:flex-row md:justify-content-between h-full overflow-hidden"
      >
        <div class="overflow-y-auto mb-4 md:h-full md:w-full">
          <CartItem
            v-for="item in store.cartContent"
            :key="item.id"
            :item="item"
          />
        </div>

        <div class="w-full">
          <TotalComponent :total="store.totalAmount" />
        </div>
      </div>
    </div>
  </div>
</template>
