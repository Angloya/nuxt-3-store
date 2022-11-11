import { CatalogTypes } from "~/constants/catalog";
import { CatalogItem } from "~/types/interfaces";

export const useCatalog = (data):CatalogItem[] => {
  const parsedCatalog = data.map((item) => {
    const catalogKeys = Object.keys(CatalogTypes);
    for (const type of catalogKeys) {
      if (CatalogTypes[type] === item) {
        return {
          link: type,
          title: item
        };
      }
    }

    return {
      link: "catalog",
      title: "Неизвестная категория"
    };
  });

  return parsedCatalog;
};
