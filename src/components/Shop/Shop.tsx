import { useOutletContext } from "react-router";
import type { Item } from "../App/useItemLoader";
import styles from "./Shop.module.css";
import Card from "./Card";

type OutletCtx = {
  items: Item[];
  updateCart: (id: number, amount: number) => void;
};

export default function Shop() {
  const { items, updateCart } = useOutletContext<OutletCtx>();

  return (
    <div className={styles.wrapper}>
      {items.map((i) => {
        return <Card key={i.id} item={i} updateCart={updateCart} />;
      })}
    </div>
  );
}
