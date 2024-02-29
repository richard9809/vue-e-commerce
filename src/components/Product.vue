<script setup>
import { ref } from "vue";
import { useCartStore } from "@/stores/cart";

defineProps({
  item: {
    type: Object,
  },
});
const store = useCartStore();
const rating = ref(4);

const addCartItem = (cartId, productName, productPrice) => {
  const newCartItem = {
    id: cartId,
    name: productName,
    price: productPrice,
    quantity: 1,
    image: "images/prod-img.jpg",
  };

  store.addToCart(newCartItem);
};

function numberFormat(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
</script>

<template>
  <Card class="product-card border-1 border-gray-300 p-4">
    <template #header>
      <div class="flex gap-2 align-items-center">
        <i class="pi pi-tag" style="font-size: 1.25rem"></i>
        <h3 class="font-bold opacity-90">{{ item.category.name }}</h3>
      </div>
    </template>
    <template #content>
      <div class="mt-4 flex flex-column align-items-center">
        <img src="/images/prod-img.jpg" alt="Product image" class="w-6 h-6" />

        <div class="flex flex-column align-items-center mt-2">
          <h4 class="font-bold text-xl p-0">{{ item.title }}</h4>
          <p class="font-light text-sm p-0">{{ item.description }}</p>
        </div>
        <Rating
          :model-value="rating"
          readonly
          :cancel="false"
          class="pt-2 pb-4"
        />
      </div>
      <div class="flex justify-content-between align-items-center">
        <h6 class="font-bold text-xl">${{ numberFormat(item.price) }}</h6>
        <Button
          icon="pi pi-shopping-cart"
          severity="info"
          aria-label="Shopping Cart"
          class="py-2"
          @click="addCartItem(item.id, item.title, item.price)"
        />
      </div>
    </template>
  </Card>
</template>

<style scoped>
.p-card {
  max-width: 20rem;
  min-width: 16rem;
}

.pi {
  color: #db4444;
}
</style>
