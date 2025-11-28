import { Outlet } from "react-router";
import styles from "./App.module.css";
import Navbar from "../Navbar/Navbar";

function App() {
  return (
    <div className={styles.wrapper + " light-theme"}>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
