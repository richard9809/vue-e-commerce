<script setup>
import ProductList from "@/components/ProductList.vue";
import { ref } from "vue";

const maxPrice = ref(0);
const minPrice = ref(0);
const search = ref("");
</script>

<template>
  <div class="h-full surface-ground">
    <div class="container">
      <div class="py-4">
        <Card
          style="
            overflow-y: auto;
            padding-block: 1rem;
            padding-inline: 0.5rem;
            overflow-x: hidden;
          "
        >
          <template #content>
            <div class="surface-ground mx-2 py-3 px-2">
              <div
                class="md:flex md:justify-content-between align-items-center"
              >
                <div class="price-filter md:flex md:gap-4 align-items-center">
                  <div class="">
                    <label for="min-price" class="font-bold block mb-2">
                      Min Price
                    </label>
                    <InputNumber
                      v-model="minPrice"
                      inputId="min-price"
                      showButtons
                      mode="currency"
                      currency="USD"
                      class="text-2xl md:text-lg"
                    />
                  </div>
                  <div>
                    <label for="max-price" class="font-bold block mb-2">
                      Max Price
                    </label>
                    <InputNumber
                      v-model="maxPrice"
                      inputId="max-price"
                      showButtons
                      mode="currency"
                      currency="USD"
                      class="text-2xl md:text-lg"
                    />
                  </div>
                </div>
                <div class="search-filter mt-4">
                  <InputText
                    type="text"
                    class="text-xl md:text-lg md:py-1 md:px-2"
                    v-model="search"
                    placeholder="Search..."
                  />
                </div>
              </div>
            </div>
            <div class="pt-4 px-2">
              <ProductList />
            </div>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

