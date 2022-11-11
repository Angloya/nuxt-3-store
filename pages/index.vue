<script setup lang="ts">
import type { Ref } from "vue";
import { showError } from "#app";
import { CatalogTypes } from "~/constants/catalog";
import { CatalogItem } from "~/types/interfaces";

const list: Ref<CatalogItem[]> = ref([]);

const { data, error } = await useFetch("/api/categories");

if (error.value) {
  showError(error.value as Error);
} else {
  list.value = useCatalog(data.value);
}
</script>

<template>
  <div class="d-flex">
    <v-container class="pa-0">
      <v-row justify="center" no-gutters>
        <v-col v-for="(item, idx) in list" :key="idx" cols="12" md="6">
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              :to="{ name: 'catalog-type', params: { type: item.link }}"
              v-bind="props"
              :elevation="isHovering ? 24 : 6"
              :class="$style.card"
              class="ma-md-8 ma-2 rounded-0"
            >
              <v-card-text class="d-flex justify-center pa-0">
                <v-card class="rounded-0">
                  <img v-if="item.title === CatalogTypes.womens" :class="$style.image" src="~/assets/image/womens.jpg">
                  <img v-if="item.title === CatalogTypes.mens" :class="$style.image" src="~/assets/image/mens.jpg">
                  <img v-if="item.title === CatalogTypes.electronics" :class="$style.image" src="~/assets/image/electronics.jpg">
                  <img v-if="item.title === CatalogTypes.jewelery" :class="$style.image" src="~/assets/image/jewelery.jpeg">
                </v-card>
              </v-card-text>

              <v-card-title class="text-center">
                {{ item.title }}
              </v-card-title>
            </v-card>
          </v-hover>
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
