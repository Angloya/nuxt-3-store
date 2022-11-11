<script setup lang="ts">
import { clearError } from "#app";
import { CustomError } from "~/types/interfaces";

const props = defineProps<{
  error: CustomError
}>();

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <div class="d-flex align-center flex-column">
    <v-card width="100%" height="100vh" class="d-flex align-center justify-center flex-column">
      <template v-if="props.error.statusCode">
        <h1 class="mt-8 text-h1">
          {{ props.error.statusCode }}
        </h1>

        <p class="mt-16 text-body-1">
          {{ props.error.statusMessage }}
        </p>
      </template>

      <h1 v-else class="mt-8 text-center text-h1">
        Упс... Что-то пошло не так
      </h1>

      <v-btn flat color="secondary" class="mt-16 mb-8" @click="handleError">
        Вернуться на главную страницу
      </v-btn>
    </v-card>
  </div>
</template>
