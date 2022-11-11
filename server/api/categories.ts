import { defineEventHandler } from 'h3';

const config = useRuntimeConfig();

export default defineEventHandler(async(event): Promise<string[]> => await $fetch(`${config.apiBase}/products/categories`));