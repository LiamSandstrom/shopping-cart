import { Link } from "react-router";
import styles from "./Navbar.module.css";
import ShopCart from "./ShopCart";
import { Moon, Sun } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Navbar({
  inCart = new Map(),
}: {
  inCart: Map<number, number>;
}) {
  const [lightTheme, setLightTheme] = useState(false);
  const root = useRef(document.documentElement);

  let inCartAmount = 0;
  for (const val of inCart.values()) {
    inCartAmount += val;
  }

  function FlipTheme() {
    setLightTheme((prev) => !prev);
  }

  useEffect(() => {
    root.current?.classList.toggle("light-theme", lightTheme);
  }, [lightTheme]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar}>
        <Link to="/">
          <h1>Store name</h1>
        </Link>
        <div className="flex-row-center gap-8">
          <Link to={"/"}>Home</Link>
          <Link to={"/shop"}>Shop</Link>
        </div>

        <div className="flex-row-center gap-8">
          {lightTheme ? (
            <Moon className="cursor" onClick={FlipTheme} size={20} />
          ) : (
            <Sun className="cursor" onClick={FlipTheme} size={20} />
          )}
          <Link to={"/cart"}>
            <ShopCart inCart={inCartAmount} size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
