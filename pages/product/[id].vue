<script setup lang="ts">
import { showError } from "#app";
import { Product } from "~/types/interfaces";

const route = useRoute();
const cart = useCart();

const product = ref<Product | null>(null);
const rating = ref<number>(0);

const { data, error } = await useFetch("/api/product", { params: { id: route.params.id }, initialCache: false });
if (error.value) {
  showError(error.value as Error);
} else {
  product.value = data.value;
  rating.value = product.value?.rating?.rate;
}

const price = computed<string>(() => `${product.value.price} RUB`);

const productInCart = computed<number>(() => {
  const productsInCart = cart.value.filter(item => item.id === product.value.id);

  return productsInCart.length;
});

const addToCart = () => cart.value.push(product.value);

const removeFromCart = () => {
  const productIndex = cart.value.findIndex(item => item.id === product.value.id);
  cart.value.splice(productIndex, 1);
};

watch(rating, newRating => alert(`новый рейтинг ${newRating}`));
</script>

<template>
  <div>
    <v-card-title class="text-center">
      {{ product.title }}
    </v-card-title>

    <v-card-text class="d-flex justify-center ma-4">
      <img :class="$style.image" :src="product.image">
    </v-card-text>

    <v-card-title class="text-center">
      {{ price }}
    </v-card-title>

    <div class="d-flex justify-center align-center flex-column">
      <v-rating
        id="rating"
        v-model="rating"
        active-color="yellow-accent-4"
        half-increments
        hover
        size="18"
      />

      <span class="text-grey-lighten-2 text-caption">
        текущий рейтинг ({{ rating }})
      </span>
    </div>

    <div class="d-flex flex-column align-center mt-8">
      <v-btn
        v-if="!productInCart"
        text
        variant="outlined"
        max-width="300px"
        @click="addToCart"
      >
        Добавить в корзину
      </v-btn>

      <div v-if="productInCart" class="d-flex align-center justify-center">
        <v-btn
          text
          variant="outlined"
          @click="removeFromCart"
        >
          -
        </v-btn>

        <div class="ml-4 mr-4">
          {{ productInCart }}
        </div>

        <v-btn
          text
          variant="outlined"
          @click="addToCart"
        >
          +
        </v-btn>
      </div>
    </div>

    <v-card-text class="mt-8 ml-md-16 mr-md-16">
      <product-expansion :product="product" />
    </v-card-text>
  </div>
</template>

<style module>
.image {
  width: 250px;
  height: 250px;
}
</style>
