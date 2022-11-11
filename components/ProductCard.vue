<script setup lang="ts">
import { Product } from "~/types/interfaces";

const router = useRouter();

const cart = useCart();

const props = defineProps<{
  product: Product,
}>();

const price = computed<string>(() => `${props.product.price} RUB`);

const productInCart = computed<number>(() => {
  const productsInCart = cart.value.filter(item => item.id === props.product.id);

  return productsInCart.length;
});

const openProduct = () => router.push({ name: "product-id", params: { id: props.product.id } });

const addToCart = () => cart.value.push(props.product);

const removeFromCart = () => {
  const productIndex = cart.value.findIndex(item => item.id === props.product.id);
  cart.value.splice(productIndex, 1);
};
</script>

<template>
  <v-hover v-slot="{ isHovering }">
    <v-card
      :elevation="isHovering ? 24 : 6"
      :class="$style.card"
      class="ma-md-8 ma-2 rounded-0"
    >
      <v-card-text class="d-flex justify-center pa-0">
        <div class="mt-4">
          <img :class="$style.image" :src="props.product.image">
        </div>
      </v-card-text>

      <v-card-text :class="$style.title" class="text-center">
        {{ props.product.title }}
      </v-card-text>

      <v-card-text class="text-center">
        <v-rating
          id="rating"
          :model-value="props.product.rating.rate"
          active-color="yellow-accent-4"
          half-increments
          hover
          size="18"
        />
      </v-card-text>

      <v-card-title class="text-center">
        {{ price }}
      </v-card-title>

      <v-card-text class="d-flex flex-column">
        <v-btn
          v-if="!productInCart"
          text
          variant="outlined"
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
        <v-btn
          text
          variant="outlined"
          class="mt-4"
          @click="openProduct"
        >
          Открыть
        </v-btn>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<style module>
.card {
  cursor: pointer;
}

.image {
  width: 200px;
  height: 200px;
}

.title {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
}
</style>
