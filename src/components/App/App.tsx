import { Outlet, useNavigation } from "react-router";
import styles from "./App.module.css";
import Navbar from "../Navbar/Navbar";
import LoadBar from "../Loadbar/Loadbar";
import { useItemLoader, type Item } from "./useItemLoader";
import { useState } from "react";
import ErrorPage from "./ErrorPage";
import Loading from "./Loading";

function App() {
  const { items, loading, error } = useItemLoader();
  const [inCart, setInCart] = useState<Item[]>([]);
  const navigation = useNavigation();
  const [animDone, setAnimDone] = useState(false);

  function updateCart(id: number) {
    const newItem = items?.find((i) => i.id === id);
    if (!newItem) return;

    setInCart((prev) => [...prev, newItem]);
  }

  if (error) return <ErrorPage />;

  return (
    <div className={styles.wrapper}>
      {(loading || !animDone)? (
        <Loading animate={!loading} setAnim={setAnimDone} />
      ) : (
        <>
          <Navbar inCart={inCart} />
          {navigation.state === "loading" ? <LoadBar /> : null}
          <Outlet context={{ items, updateCart }} />
        </>
      )}
    </div>
  );
}

export default App;
