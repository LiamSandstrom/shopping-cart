import { Link } from "react-router";
import styles from "./Navbar.module.css";
import ShopCart from "./ShopCart";
import { Moon, Sun } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { Item } from "../App/useItemLoader";

export default function Navbar({ inCart = [] }: { inCart: Item[] }) {
  const [lightTheme, setLightTheme] = useState(false);
  const root = useRef(document.documentElement);

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
            <ShopCart inCart={inCart.length} size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
