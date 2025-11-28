import { useEffect, useState } from "react";
import { delay } from "../../delay";

export type Item = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  amount: number;
};

const minLoadTimeMs = 0;

export const useItemLoader = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchItems = async () => {
      const start = performance.now();
      try {
        const res = await fetch("https://fakestoreapi.com/products?limit=12");
        if (!res.ok) throw new Error("Failed to fetch items");
        const data = await res.json();
        setItems(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        const elapsed = performance.now() - start;
        const remaining = Math.max(0, minLoadTimeMs - elapsed);

        await delay(remaining);
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  return { items, loading, error };
};
