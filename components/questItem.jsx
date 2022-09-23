import React, { useState } from "react";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";

export const QuestItem = ({
  quest,
  ind,
  quest1IsDone,
  setQuest1IsDone,
  quest3IsDone,
  setQuest3IsDone
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [secretPhrase, setSecretPhrase] = useState("");
  const [playaName, setPlayaName] = useState("");

  useEffect(() => {
    if (secretPhrase.toLowerCase() === "shakira") {
      setQuest1IsDone(true);
    }

    if (playaName.toLocaleLowerCase() === "sunshine") {
      setQuest3IsDone(true);
    }
  }, [playaName, secretPhrase, setQuest1IsDone, setQuest3IsDone]);
  return (
    <div className={styles.questItem}>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={isChecked}
        onClick={() => setIsChecked(!isChecked)}
      />
      <span className={styles.questLabel}>
        Quest {ind}: {quest.name}
      </span>
      <ul className={styles.stepsList}>
        {quest.steps.map((step, stepInd) => {
          return (
            <>
              <li key={stepInd} className={styles.step}>
                {step}
              </li>
              {ind === 1 && stepInd === 2 && (
                <input
                  className={styles.phraseInput}
                  onChange={(e) => setSecretPhrase(e.target.value)}
                />
              )}
              {ind === 3 && stepInd === 1 && (
                <input
                  className={styles.phraseInput}
                  onChange={(e) => setPlayaName(e.target.value)}
                />
              )}
            </>
          );
        })}
      </ul>
      <hr className={styles.divider} />
    </div>
  );
};
