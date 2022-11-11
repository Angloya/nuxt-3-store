<script setup lang="ts">
const icons = [
  "mdi-facebook",
  "mdi-twitter",
  "mdi-linkedin",
  "mdi-instagram"
];
</script>

<template>
  <v-footer
    app
    bottom
    fixed
    padless
    :class="$style.footer"
    class="fixed bottom bg-grey-lighten-1 text-white text-center d-flex flex-column"
  >
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4 text-white"
        :icon="icon"
        variant="text"
      />
    </div>

    <div class="text-white pt-0">
      Интернет магазин
    </div>

    <v-divider />

    <div class="text-white">
      {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </div>
  </v-footer>
</template>

<style module>
.footer {
    position: fixed;
    width: 100%;
    bottom: 0;
}
</style>
