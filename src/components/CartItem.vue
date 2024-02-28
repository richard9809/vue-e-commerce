<template>
  <div class="flex gap-4 max-w-30rem px-1 py-2 border-bottom-1 border-gray-300">
    <div class="">
      <img
        src="/images/prod-img.jpg"
        alt="Product Image"
        class="max-w-6rem max-h-6rem border-1 p-2 border-gray-300"
      />
    </div>
    <div class="flex flex-column gap-1 w-full">
      <div class="flex justify-content-between align-items-center w-full">
        <h4 class="font-medium text-lg">Plain Yellow Hoodie</h4>
        <Button
          icon="pi pi-times"
          severity="danger"
          text
          rounded
          aria-label="Cancel"
        />
      </div>

      <div class="flex justify-content-between">
        <p class="text-lg">$875</p>
        <div class="flex gap-4 px-2 align-items-center">
          <p class="font-medium">Qty:</p>
          <p class="font-light text-lg">2</p>
        </div>
      </div>

      <div class="flex justify-content-between align-items-center">
        <Button
          icon="pi pi-pencil"
          severity="warning"
          text
          rounded
          aria-label="Edit"
        />
        <h5 class="font-bold text-lg">$1,750</h5>
      </div>
    </div>
  </div>
</template>
