import { Outlet, useNavigation } from "react-router";
import styles from "./App.module.css";
import Navbar from "../Navbar/Navbar";
import LoadBar from "../Loadbar/Loadbar";

function App() {
  const navigation = useNavigation();

  return (
    <div className={styles.wrapper}>
      <Navbar />
      {navigation.state === "loading" ? <LoadBar /> : null}
      <Outlet />
    </div>
  );
}

export default App;
