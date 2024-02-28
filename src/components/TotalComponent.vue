<template>
  <div
    class="custom flex flex-column gap-2 px-3 bg-white"
    style="
      max-width: 25rem;
      min-width: 15rem;
      border: 1px solid #000 !important;
      border-radius: 3px;
      padding-block: 1rem;
    "
  >
    <h6 class="font-medium">Cart Total</h6>
    <div
      class="flex justify-content-between border-bottom-1 border-gray-300 py-1"
    >
      <p>Subtotal</p>
      <p>$1,750</p>
    </div>
    <div
      class="flex justify-content-between border-bottom-1 border-gray-300 py-1"
    >
      <p>Shipping</p>
      <p>Free</p>
    </div>
    <div
      class="flex justify-content-between border-bottom-1 border-gray-300 py-1"
    >
      <p>Total</p>
      <p>$1,750</p>
    </div>
    <div class="flex justify-content-center py-2">
      <Button label="Proceed to Checkout" />
    </div>
  </div>
</template>
