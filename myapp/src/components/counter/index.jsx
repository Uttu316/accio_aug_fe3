import { useState } from "react";
import styles from "./counter.module.css";

const Counter = () => {
  const [x, setX] = useState(0);

  const onAdd = () => {
    setX(x + 1);
    setX(x + 1);
    setX(x + 1);
    setX(x + 1);
    setX(x + 1);
    console.log("Addd", x);
  };
  const onMinus = () => {
    setX((currX) => currX - 1);
    setX((currX) => currX - 1);
    setX((currX) => currX - 1);
    setX((currX) => currX - 1);
    console.log("Minus", x);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Counter</h2>
      <h3 className={styles.value}>{x}</h3>
      <div className={styles.buttons}>
        <button className={styles.addBtn} onClick={onAdd}>
          Add
        </button>
        <button className={styles.minusBtn} onClick={onMinus}>
          Minus
        </button>
      </div>
    </div>
  );
};
export default Counter;
