import { Link } from "react-router";
import styles from "./Navbar.module.css";
import ShopCart from "./ShopCart";
import { Moon, Sun } from "lucide-react";
import { useRef, useState } from "react";

export default function Navbar() {
  const [darkTheme, setDarkTheme] = useState(true);
  const root = useRef(document.body);

  function FlipTheme() {
    setDarkTheme((prev) => !prev);
    if (darkTheme) root.current?.classList.add("dark-theme");
    else root.current?.classList.remove("dark-theme");
  }

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
          {darkTheme ? (
            <Moon className="cursor" onClick={FlipTheme} size={20} />
          ) : (
            <Sun className="cursor" onClick={FlipTheme} size={20} />
          )}
          <Link to={"/cart"}>
            <ShopCart size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
