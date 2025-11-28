import { Outlet } from "react-router";
import styles from "./App.module.css";
import Navbar from "../Navbar/Navbar";
import { useItemLoader } from "./useItemLoader";
import { useState } from "react";
import ErrorPage from "./ErrorPage";
import Loading from "./Loading";

function App() {
  const { items, loading, error } = useItemLoader();
  const [inCart, setInCart] = useState<Map<number, number>>(new Map());

  function updateCart(id: number, amount: number) {
    const newItem = items?.find((i) => i.id === id);
    if (!newItem) return;

    setInCart((prev) => new Map(prev).set(id, amount + (prev.get(id) || 0)));
  }

  if (error) return <ErrorPage />;

  return (
    <div className={styles.wrapper}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar inCart={inCart} />
          <Outlet context={{ items, updateCart, inCart }} />
        </>
      )}
    </div>
  );
}

export default App;
