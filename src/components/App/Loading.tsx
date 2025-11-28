import { useEffect } from "react";
import { delay } from "../../delay";
import styles from "./Loading.module.css";

type loadingProps = {
  animate?: boolean;
  setAnim?: (value: boolean) => void;
};

export default function Loading({ animate = false, setAnim }: loadingProps) {
  useEffect(() => {
    if (animate) {
      if (!setAnim) return;
      const anim = async () => {
        await delay(850);
        setAnim(true);
      };
      anim();
    }
  }, [animate, setAnim]);

  return (
    <div className={`${styles.wrapper} ${animate ? styles.done : ""}`}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
