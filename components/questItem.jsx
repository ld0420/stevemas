import React, { useState } from "react";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";

export const QuestItem = ({ quest, ind, setQuestIsDone }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [secretPhrase, setSecretPhrase] = useState("");
  const [playaName, setPlayaName] = useState("");

  const handleQuestSubmit = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    if (ind === 1 && secretPhrase.toLowerCase() === "shakira" && isChecked) {
      setQuestIsDone(isChecked);
    } else if (
      ind === 3 &&
      playaName.toLocaleLowerCase() === "sunshine" &&
      isChecked
    ) {
      setQuestIsDone(isChecked);
    } else if (ind !== 1 && ind !== 3 && isChecked) {
      setQuestIsDone(isChecked);
    }
  }, [isChecked, secretPhrase, playaName, ind, setQuestIsDone]);
  return (
    <div className={styles.questItem}>
      <input
        className={styles.checkbox}
        type="checkbox"
        value={isChecked}
        checked={isChecked}
        onClick={handleQuestSubmit}
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
