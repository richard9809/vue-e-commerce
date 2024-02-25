<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";

const date = ref();
const value = ref("");
</script>

<template>
  <div class="container">
    <!-- <h1>Welcome to PrimeTime</h1> -->
    <div class="card flex justify-content-center flex-column gap-12">
      <Calendar v-model="date" :style="{ width: '15rem' }" />
      <FloatLabel>
        <InputText id="username" v-model="value" :style="{ width: '15rem' }" />
        <label for="username">Username</label>
      </FloatLabel>
    </div>
  </div>

  <!-- <TabMenu :model="items">
    <template #item="{ item, props }">
      <a v-ripple v-bind="props.action" class="flex align-items-center gap-2">
        <img
          :alt="item.name"
          :src="`/images/avatar/${item.image}`"
          style="width: 32px"
        />
        <span class="font-bold">{{ item.name }}</span>
      </a>
    </template>
  </TabMenu> -->

  <!-- <RouterView /> -->
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
</style>
