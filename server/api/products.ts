import { defineEventHandler } from "h3";
import { Product } from "~/types/interfaces";

const config = useRuntimeConfig();

export default defineEventHandler(async (event): Promise<Product[]> => {
  return await $fetch(`${config.apiBase}/products`);
});
