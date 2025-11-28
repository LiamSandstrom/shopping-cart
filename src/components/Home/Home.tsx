import { Link } from "react-router";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <h1>Welcome to Store name</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
        reprehenderit doloribus quo ut. Quia, perferendis laborum.
        Necessitatibus similique mollitia nihil.
      </p>
      <button>
        <Link to="/shop">Go Shop!</Link>
      </button>
    </div>
  );
}
