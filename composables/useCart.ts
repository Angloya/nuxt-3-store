import { Product } from "~/types/interfaces";

export const useCart = () => useState<Product[]>("cart", () => []);
