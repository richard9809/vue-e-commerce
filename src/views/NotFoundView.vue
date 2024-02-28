<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

</script>

<template>
  <div class="h-full">
    <div
      class="custom flex flex-column align-items-center justify-content-center h-full"
    >
      <div class="container">
        <h1 class="text-8xl font-bold text-center line-height-1">
          404 Not Found 😒
        </h1>
        <div class="text-center">
          <p class="min-w-20rem text-center py-4">
            Your visited page not found. You may go to home page.
          </p>
        </div>
        <div class="text-center">
          <Button label="Back to home page" @click="router.push('/')" />
        </div>
      </div>
    </div>
  </div>
</template>
