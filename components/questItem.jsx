import React, { useState } from "react";
import styles from "../styles/Home.module.css";

export const QuestItem = ({ quest }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className={styles.questItem}>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={isChecked}
        onClick={() => setIsChecked(!isChecked)}
      />
      <span className={styles.questLabel}>{quest}</span>
      <hr className={styles.divider} />
    </div>
  );
};
