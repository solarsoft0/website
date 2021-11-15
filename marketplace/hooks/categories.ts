import { useMemo } from "react";
import { categories as terms } from "../data/marketplace/categories.json";

export type TCategory = typeof terms[0];

export const useCategories = () => {
  const categories = terms.slice(0, 4);
  const more = terms.slice(4);

  const getById = (value: string) => {
    const cat = [...categories, ...more].find(({ id }) => id === value);

    return cat;
  };

  const data = {
    categories,
    more,
    defaultCategory: categories[0],
    getById,
  };

  return useMemo(() => data, []);
};
