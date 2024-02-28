<script setup>
import { ref } from 'vue';

const coupon = ref()
</script>

<template>
  <div class="custom">
    <div class="flex gap-4">
      <InputText type="number" v-model="coupon" placeholder="Coupon Code" />
      <Button label="Apply Coupon" />
    </div>
  </div>
</template>
