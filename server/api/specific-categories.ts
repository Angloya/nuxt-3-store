import { defineEventHandler } from "h3";
import { Product, CategoryParams } from "~/types/interfaces";
import { CatalogTypes } from "~/constants/catalog";

const config = useRuntimeConfig();

export default defineEventHandler(async (event): Promise<Product[]> => {
  const params: CategoryParams = useQuery(event);
  const type = params?.type;
  const category = CatalogTypes[type];

  return await $fetch(`${config.apiBase}/products/category/${category}`);
});
