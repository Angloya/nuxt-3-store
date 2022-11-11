<script setup lang="ts">
import { Product } from "~/types/interfaces";
import { CatalogDefault } from "~/constants/catalog";

const router = useRouter();

const props = defineProps<{
  product: Product;
}>();

const categoryText = computed(() => `Товар относится к категории ${props.product.category}`);

const redirectToCategory = () => router.push({ name: "catalog-type", params: { type: CatalogDefault[props.product.category] } });
</script>

<template>
  <v-expansion-panels>
    <v-expansion-panel
      title="Описание"
      :text="props.product.description"
    />

    <v-expansion-panel
      title="Категория"
    >
      <v-expansion-panel-text>
        {{ categoryText }}

        <v-card-actions>
          <v-spacer />
          <v-btn
            text
            color="primary"
            @click="redirectToCategory"
          >
            Перейти к категории {{ props.product.category }}
          </v-btn>
        </v-card-actions>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<style module>
</style>
