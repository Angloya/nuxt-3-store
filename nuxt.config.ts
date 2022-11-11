import { defineNuxtConfig } from "nuxt";
import eslintPlugin from "vite-plugin-eslint";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    apiBase: "https://fakestoreapi.com"
  },
  css: [
    "vuetify/lib/styles/main.sass",
    "mdi/css/materialdesignicons.min.css"
  ],
  build: {
    transpile: ["vuetify", "@headlessui/vue"]
  },
  vite: {
    define: {
      "process.env.DEBUG": false
    },
    plugins: [
      eslintPlugin()
    ]
  }
});
