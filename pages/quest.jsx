import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import { QuestItem } from "../components/questItem";
import { namesList } from "../components/names";
import { useRouter } from "next/router";

const Quest = () => {
  const [questList, setQuestList] = useState([
    {
      name: "Spin the Wheel, Take a Picture",
      steps: [
        `Step 1: Want your first drink? Spin the wheel and take a polaroid picture based on the prompt - however you’d interpret it:) 
        NOTE: Please put the camera back in the box so others can use it!`,
        "Step 2: Give your picture to the bartender who will give you the secret phrase to unlock future drinks and Quest #2",
        "Step 3: Insert secret phrase"
      ]
    },
    {
      name: "Under the Stevemas Tree",
      steps: [
        "Naughty or nice? Go upstairs & write Steve a note that he’ll be delighted to see on Stevemas Day! Don't be shy with the stickers!"
      ]
    },
    {
      name: "Cuddle Me!",
      steps: [
        "Find Steve and give him a big hug and find out his playa name.",
        "Insert Playa name to unlock Quest #4"
      ]
    },
    {
      name: "Spread Love",
      steps: ["Give someone you don't know a compliment!"]
    },
    {
      name: "Life Beyond Stevemas",
      steps: ["Make a new friend and exchange numbers!"]
    },
    {
      name: "Thx for the Memories",
      steps: [
        "Add a picture from this party to the slideshow!",
        // eslint-disable-next-line react/jsx-key
        <a
          className={styles.link}
          href="https://photos.app.goo.gl/zyhFKj5cpicbWDYa9"
        >
          Upload pictures here
        </a>
      ]
    }
  ]);
  const [completed, setCompleted] = useState(false);
  const [elfName, setElfName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [quest1IsDone, setQuest1IsDone] = useState(false);
  const [quest3IsDone, setQuest3IsDone] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    router.push("/elfName");
    // const indOne = Math.floor(Math.random() * 88);
    // const indTwo = Math.floor(Math.random() * 88);

    // while (indOne === indTwo) {
    //   indTwo = Math.floor(Math.random() * 88);
    // }

    // setElfName(namesList[indOne] + " " + namesList[indTwo]);
    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 1000);
    // setCompleted(true);
  };

  return (
    <div>
      <div>
        <h2 className={styles.questHeader}>
          You can find out your Elf name only after you finish the quest
        </h2>

        <div className={styles.questQuestions}>
          <QuestItem
            quest={questList[0]}
            ind={1}
            quest1IsDone={quest1IsDone}
            setQuest1IsDone={setQuest1IsDone}
            quest3IsDone={quest3IsDone}
            setQuest3IsDone={setQuest3IsDone}
          />
          {quest1IsDone && (
            <QuestItem
              quest={questList[1]}
              ind={2}
              quest1IsDone={quest1IsDone}
              setQuest1IsDone={setQuest1IsDone}
              quest3IsDone={quest3IsDone}
              setQuest3IsDone={setQuest3IsDone}
            />
          )}
          {quest1IsDone && (
            <QuestItem
              quest={questList[2]}
              ind={3}
              quest1IsDone={quest1IsDone}
              setQuest1IsDone={setQuest1IsDone}
              quest3IsDone={quest3IsDone}
              setQuest3IsDone={setQuest3IsDone}
            />
          )}
          {quest3IsDone && (
            <QuestItem
              quest={questList[3]}
              ind={4}
              quest1IsDone={quest1IsDone}
              setQuest1IsDone={setQuest1IsDone}
              quest3IsDone={quest3IsDone}
              setQuest3IsDone={setQuest3IsDone}
            />
          )}
          {quest3IsDone && (
            <QuestItem
              quest={questList[4]}
              ind={5}
              quest1IsDone={quest1IsDone}
              setQuest1IsDone={setQuest1IsDone}
              quest3IsDone={quest3IsDone}
              setQuest3IsDone={setQuest3IsDone}
            />
          )}
          {quest3IsDone && (
            <QuestItem
              quest={questList[5]}
              ind={6}
              quest1IsDone={quest1IsDone}
              setQuest1IsDone={setQuest1IsDone}
              quest3IsDone={quest3IsDone}
              setQuest3IsDone={setQuest3IsDone}
            />
          )}
        </div>

        <div className={styles.questBtnContainer}>
          <button className={styles.questSubmitBtn} onClick={handleClick}>
            Are you done? Honor code!
          </button>
        </div>
      </div>
      {/* {completed && (
        <div className={styles.elfNameContainer}>
          <div className={styles.loading}>Your Elf name is:</div>
          {!isLoading && <div className={styles.elfName}>{elfName}</div>}
        </div>
      )} */}
    </div>
  );
};

export default Quest;
