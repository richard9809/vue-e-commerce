<script setup>
import Product from "@/components/Product.vue";
import { ref, watchEffect } from "vue";
import { useProductStore } from "@/stores/product";
import { useCategoryStore } from "@/stores/category";

const storeProduct = useProductStore();
const storeCategory = useCategoryStore();

const maxPrice = ref(0);
const minPrice = ref(0);
const search = ref("");
const selectedCategory = ref("");

watchEffect(() => {
  applyFilters();
});

async function applyFilters() {
  console.log("Selected category: ", selectedCategory.value.id);
  await storeProduct.fetchFilteredProducts({
    title: search.value,
    price_min: minPrice.value,
    price_max: maxPrice.value,
    categoryId: selectedCategory.value.id,
  });
}
</script>

<template>
  <div class="h-full surface-ground">
    <Toast />
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
              <div class="grid">
                <div class="col-12 md:col-6">
                  <label for="min-price" class="font-bold block mb-1">
                    Min Price
                  </label>
                  <InputNumber
                    v-model="minPrice"
                    inputId="min-price"
                    showButtons
                    mode="currency"
                    currency="USD"
                    class="w-full"
                  />
                </div>
                <div class="col-12 md:col-6">
                  <label for="max-price" class="font-bold block mb-1">
                    Max Price
                  </label>
                  <InputNumber
                    v-model="maxPrice"
                    inputId="max-price"
                    showButtons
                    mode="currency"
                    currency="USD"
                    class="w-full"
                  />
                </div>

                <div class="select-filter col-12 md:col-6">
                  <Dropdown
                    v-model="selectedCategory"
                    :options="storeCategory.categoriesContent"
                    optionLabel="name"
                    placeholder="Select a Category"
                    checkmark
                    :highlightOnSelect="false"
                    class="w-full"
                  />
                </div>
                <div class="search-filter col-12 md:col-6">
                  <InputText
                    type="text"
                    class="w-full"
                    v-model="search"
                    placeholder="Search..."
                  />
                </div>
              </div>
            </div>
            <div class="product-list">
              <Product
                v-for="(item, i) in storeProduct.productsContent"
                :key="i"
                :item="item"
              />
            </div>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-list {
  display: grid;
  padding-block: 2rem;
  padding-inline: 1rem;
  place-content: center;
  grid-column-gap: 0.75rem;
  grid-row-gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
}
</style>

<!-- class="flex flex-column gap-4 py-4 px-4 md:px-2 md:flex-row md:wrap bg-primary-500 " -->
