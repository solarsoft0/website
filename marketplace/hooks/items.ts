import { useMemo, useState } from "react";
import { items } from "../data/marketplace/items.json";
import { TCategory } from "./categories";

export type TApp = typeof items[0];

export { items };

export const useItems = () => {
  const [filtered, setFilter] = useState<TApp[]>([]);

  const filter = (category?: TCategory) => {
    let data =
      items.filter((item) => item.categories?.includes(category?.id as string)) ??
      [];

    if (!category || category?.id == "all") {
      data = items;
    }

    setFilter(data);
  };

  return useMemo(() => ({ items, filtered, filter }), [filtered]);
};
