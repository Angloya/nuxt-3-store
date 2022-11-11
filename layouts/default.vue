<script setup lang="ts">
import type { Ref } from "vue";
import { NavItem } from "~/types/interfaces";

const router = useRouter();

const drawer: Ref<boolean> = ref(false);

const cart = useCart();

const items: NavItem[] = reactive([
  {
    title: "Каталог",
    icon: "mdi-apps"
  },
  {
    title: "Доставка",
    icon: "mdi-truck-delivery"
  },
  {
    title: "Контакты",
    icon: "mdi-phone"
  }
]);

const cartItems = computed(() => cart.value.length);

const redirectToCatalog = () => router.push({ name: "catalog" });

const redirectToMainPage = () => router.push({ name: "index" });

const redirectToCart = () => router.push({ name: "cart" });
</script>

<template>
  <v-container fluid class="pa-0">
    <v-layout fluid>
      <v-app-bar
        :class="$style.header"
        color="surface"
        prominent
      >
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" />

        <v-toolbar-title @click="redirectToMainPage">
          Интернет Магазин
        </v-toolbar-title>

        <v-btn variant="text" prepend-icon="mdi-apps" @click="redirectToCatalog">
          Все товары
        </v-btn>

        <v-spacer />

        <v-btn variant="text" icon="mdi-magnify" />

        <v-badge v-if="cartItems" :content="cartItems" color="error" @click="redirectToCart">
          <v-icon>mdi-cart</v-icon>
        </v-badge>

        <v-icon v-else @click="redirectToCart">
          mdi-cart
        </v-icon>

        <v-btn variant="text" icon="mdi-dots-vertical" />
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        bottom
        temporary
      >
        <v-list v-for="(item, idx) in items" :key="idx">
          <v-list-item :prepend-icon="item.icon" :title="item.title" />
        </v-list>
      </v-navigation-drawer>

      <v-main :class="$style.main" class="mt-16 mb-16 pa-4 pl-md-6 pr-md-6" fluid>
        <slot />
      </v-main>

      <FooterRoot />
    </v-layout>
  </v-container>
</template>

<style module>
.header {
    position: fixed;
    width: 100%;
    top: 0;
}

@media screen and (max-width: 1000px) {
  .main {
    margin-bottom: 100px;
  }
}
</style>
