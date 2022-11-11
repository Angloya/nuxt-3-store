<script setup lang="ts">
import get from "lodash.get";
import type { Ref } from "vue";
import { showError } from "#app";
import { Product } from "~/types/interfaces";

const products: Ref<Product[]> = ref([]);
const filter = ref<string>("");
const isDoubleClick = ref<boolean>(false);

const { data, error } = await useFetch("/api/products");

if (error.value) {
  showError(error.value as Error);
} else {
  products.value = data.value;
}

const filteredProducts = computed(() => sortProducts(filter.value));

const filtredByParam = (param: string) => {
  filter.value = param;
  if (filter.value === param) {
    setDoubleClick();
  } else {
    isDoubleClick.value = false;
  }
};

const sortProducts = (sortParam: string) => {
  return products.value.sort((a, b) => {
    if (isDoubleClick.value) {
      return get(a, sortParam, "") - get(b, sortParam, "");
    } else {
      return get(b, sortParam, "") - get(a, sortParam, "");
    }
  });
};

const setDoubleClick = () => {
  isDoubleClick.value = !isDoubleClick.value;
};
</script>

<template>
  <div class="d-flex mb-8">
    <v-container class="pa-0">
      <v-row class="d-flex align-center justify-end mt-8">
        Фильтровать
        <v-chip class="ma-2" outlined @click="filtredByParam('price')">
          По цене
        </v-chip>

        <v-chip class="ma-2" outlined @click="filtredByParam('rating.count')">
          По популярности
        </v-chip>

        <v-chip class="ma-2" outlined @click="filtredByParam('rating.rate')">
          По рейтингу
        </v-chip>
      </v-row>
      <v-row justify="center" no-gutters>
        <v-col v-for="product in filteredProducts" :key="product.id" cols="12" md="4">
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
  width: 100%;
  height: 100%;
  min-width: 200px;
  min-height: 200px;
}
</style>
