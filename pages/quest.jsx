import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import { QuestItem } from "../components/questItem";
import { namesList } from "../components/names";

const Quest = () => {
  const [questList, setQuestList] = useState([
    "question 1",
    "question 2",
    "question 3"
  ]);
  const [completed, setCompleted] = useState(false);
  const [elfName, setElfName] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const handleClick = () => {
    const indOne = Math.floor(Math.random() * 88);
    const indTwo = Math.floor(Math.random() * 88);

    while (indOne === indTwo) {
      indTwo = Math.floor(Math.random() * 88);
    }

    setElfName(namesList[indOne] + " " + namesList[indTwo]);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    setCompleted(true);
  };

  return (
    <div>
      <div>
        <h2 className={styles.questHeader}>
          You can find out your Elf name only after you finish the quest
        </h2>

        <div className={styles.questQuestions}>
          {questList.map((quest, ind) => {
            return <QuestItem key={ind} quest={quest} />;
          })}
        </div>

        <div className={styles.questBtnContainer}>
          <button className={styles.questSubmitBtn} onClick={handleClick}>
            Submit
          </button>
        </div>
      </div>
      {completed && (
        <div className={styles.elfNameContainer}>
          <div className={styles.loading}>Your Elf name is:</div>
          {!isLoading && <div className={styles.elfName}>{elfName}</div>}
        </div>
      )}
    </div>
  );
};

export default Quest;
