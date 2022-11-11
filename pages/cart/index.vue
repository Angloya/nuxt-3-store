<script setup lang="ts">
const cart = useCart();
</script>

<template>
  <div>
    <template v-if="!cart.length">
      Тут пока пусто
    </template>

    <template v-else>
      <v-card v-for="item in cart" :key="item.id">
        {{ item.title }}
      </v-card>
    </template>
  </div>
</template>

  <style module>
  .image {
    width: 250px;
    height: 250px;
  }
  </style>
