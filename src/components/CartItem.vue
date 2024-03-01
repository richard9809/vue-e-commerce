<script setup>
import { useCartStore } from "@/stores/cart";
import { ref } from "vue";
import useToastMessages from "@/composables/useToastMessages";

const { showSuccessToast, showErrorToast } = useToastMessages();

defineProps({
  item: {
    type: Object,
  },
});

const store = useCartStore();
const visible = ref(false);
const qty = ref();

const prodTotal = (price, quantity) => {
  return price * quantity;
};

const showModal = (value) => {
  qty.value = value;
  visible.value = true;
};

const handleEdit = (item) => {
  const updatedItem = {
    id: parseInt(item.id),
    name: item.name,
    price: item.price,
    quantity: qty.value,
    image: "images/prod-img.jpg",
  };

  store.updateCartItem(updatedItem);
  store.fetchCartItems();
  visible.value = false;
  showSuccessToast("Edit", "Cart item has been edited successfully");
};

const handleDelete = (item) => {
  store.deleteCart(item);
  showSuccessToast("Delete", "Item has been deleted successfully")
};

function numberFormat(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
</script>

<template>
  <div class="flex gap-4 max-w-30rem px-1 py-2 border-bottom-1 border-gray-300">
    <div class="">
      <img
        :src="item.image"
        alt="Product Image"
        class="max-w-6rem max-h-6rem"
      />
    </div>
    <div class="flex flex-column gap-1 w-full">
      <div class="flex justify-content-between align-items-center w-full">
        <h4 class="font-medium text-lg">{{ item.name }}</h4>
        <Button
          icon="pi pi-times"
          severity="danger"
          text
          rounded
          aria-label="Cancel"
          @click="handleDelete(item)"
        />
      </div>

      <div class="flex justify-content-between">
        <p class="text-lg">${{ numberFormat(item.price) }}</p>
        <div class="flex gap-4 px-2 align-items-center">
          <p class="font-medium">Qty:</p>
          <p class="font-light text-lg">{{ item.quantity }}</p>
        </div>
      </div>

      <div class="flex justify-content-between align-items-center">
        <Button
          icon="pi pi-pencil"
          severity="warning"
          text
          rounded
          aria-label="Edit"
          @click="showModal(item.quantity)"
        />
        <h5 class="font-bold text-lg">
          ${{ numberFormat(prodTotal(item.price, item.quantity)) }}
        </h5>
      </div>
    </div>
  </div>

  <Dialog
    v-model:visible="visible"
    modal
    header="Edit Cart"
    :style="{ width: '25rem' }"
  >
    <span class="p-text-secondary block mb-5">Update the quantity</span>
    <div class="flex align-items-center gap-3 mb-3">
      <label for="quantity" class="font-semibold w-6rem">Quantity</label>
      <InputNumber
        v-model="qty"
        inputId="quantity"
        mode="decimal"
        showButtons
        :min="1"
        :max="100"
      />
    </div>
    <div class="flex justify-content-end gap-2">
      <Button
        type="button"
        label="Cancel"
        severity="secondary"
        @click="visible = false"
      ></Button>
      <Button type="button" label="Save" @click="handleEdit(item)"></Button>
    </div>
  </Dialog>
</template>
