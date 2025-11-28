import { useState } from "react";
import type { Item } from "../App/useItemLoader";
import styles from "./Card.module.css";

export default function Card({
  item,
  updateCart,
}: {
  item: Item;
  updateCart: (id: number, amount: number) => void;
}) {
  const [amount, setAmount] = useState(1);

  function validateAmount(e: React.ChangeEvent<HTMLInputElement>) {
    const val = Number(e.target.value);

    if (Number.isInteger(val) && val >= 0) {
      setAmount(val);
    }
  }

  return (
    <div className={styles.card}>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={item.image} alt={item.title} />
      </div>
      <div className={styles.lowerCard}>
        <h2>{item.title}</h2>
        <p className={styles.price}>${item.price}</p>
        <div className="flex-row-center gap-16">
          <div className={styles.inputWrapper}>
            <button
              onClick={() => setAmount((prev) => prev - 1)}
              className={styles.remove}
            >
              -
            </button>
            <input value={amount} onChange={validateAmount} type="text" />
            <button
              onClick={() => setAmount((prev) => prev + 1)}
              className={styles.add}
            >
              +
            </button>
          </div>
          <button
            className={styles.cartBtn}
            onClick={() => updateCart(item.id, amount)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
