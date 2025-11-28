import { ShoppingCart } from "lucide-react";
import styles from "./ShopCart.module.css";
export default function ShopCart({ inCart = 0, size = 20 }) {
  return (
    <div className={styles.wrapper + " flex-row-center"}>
      <ShoppingCart size={size} />
      {inCart > 0 && (
        <div className={styles.bubble}>{inCart > 99 ? "99+" : inCart}</div>
      )}
    </div>
  );
}
