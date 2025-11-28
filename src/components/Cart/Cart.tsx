import { useOutletContext } from "react-router";
import styles from "./Cart.module.css";
import type { Item } from "../App/useItemLoader";

export type OutletCtx = {
  items: Item[];
  inCart: Map<number, number>;
};

export default function Cart() {
  const { items, inCart } = useOutletContext<OutletCtx>();

  // Get array of keys from Map
  const keys = Array.from(inCart.keys());

  // Filter items that exist in cart
  const itemsInCart = items.filter((item) => {
    return keys.includes(item.id);
  });

  const total = itemsInCart.reduce(
    (sum, item) => sum + (inCart.get(item.id) || 0) * item.price,
    0
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.items}>
        {itemsInCart.map((i) => {
          const quantity = inCart.get(i.id) || 0;
          return (
            <div key={i.id} className={styles.card}>

              <img src={i.image} alt={i.title} />
              <div>
                <h2>{i.title}</h2>
                <p>${i.price}</p>
                <p>Quantity: {quantity}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.price}>
        <h1>Total: ${total}</h1>
      </div>
    </div>
  );
}
