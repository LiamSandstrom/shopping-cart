import { ShoppingCart } from "lucide-react";
import styles from "./ShopCart.module.css";
export default function ShopCart({ inCart = 2, size = 20 }) {
  return (
    <div className={styles.wrapper + " flex-row-center"}>
      <ShoppingCart size={size} />
      <div className={styles.bubble}>{inCart}</div>
    </div>
  );
}
