import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import { namesList } from "../components/names";

const ElfName = () => {
  const [elfName, setElfName] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const indOne = Math.floor(Math.random() * 88);
    const indTwo = Math.floor(Math.random() * 88);

    while (indOne === indTwo) {
      indTwo = Math.floor(Math.random() * 88);
    }

    setElfName(namesList[indOne] + " " + namesList[indTwo]);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className={styles.elfNameContainer}>
      <hr className={styles.divider} />
      <div className={styles.loading}>And your Elf name is...</div>
      {!isLoading && (
        <div className={styles.elfName}>{elfName.toUpperCase()}</div>
      )}
      <hr className={styles.divider} />
    </div>
  );
};

export default ElfName;
