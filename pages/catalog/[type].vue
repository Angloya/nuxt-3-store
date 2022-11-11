<script setup lang="ts">
import type { Ref } from "vue";
import { showError } from "#app";
import { Product } from "~/types/interfaces";

const products: Ref<Product[]> = ref([]);
const route = useRoute();

const { data, error } = await useFetch("/api/specific-categories", { params: { type: route.params.type }, initialCache: false });

if (error.value) {
  showError(error.value as Error);
} else {
  products.value = data.value;
}
</script>

<template>
  <div class="d-flex">
    <v-container class="pa-0">
      <v-row justify="center" no-gutters>
        <v-col v-for=" product in products" :key="product.id" cols="12" md="4">
          <product-card :product="product" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style module>
.card {
  cursor: pointer;
}

.image {
  width: 200px;
  height: 200px;
}
</style>
