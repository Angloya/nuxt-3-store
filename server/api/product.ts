import { defineEventHandler } from "h3";
import { Product } from "~/types/interfaces";

const config = useRuntimeConfig();

export default defineEventHandler(async (event): Promise<Product> => {
  const params = useQuery(event);
  const id = params?.id;

  return await $fetch(`${config.apiBase}/products/${id}`);
});
