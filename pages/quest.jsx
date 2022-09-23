import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import { QuestItem } from "../components/questItem";
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
          target="_blank"
          rel="noreferrer noopener"
          href="https://photos.app.goo.gl/zyhFKj5cpicbWDYa9"
        >
          Upload pictures here
        </a>
      ]
    }
  ]);
  const [quest1IsDone, setQuest1IsDone] = useState(false);
  const [quest2IsDone, setQuest2IsDone] = useState(false);
  const [quest3IsDone, setQuest3IsDone] = useState(false);
  const [quest4IsDone, setQuest4IsDone] = useState(false);
  const [quest5IsDone, setQuest5IsDone] = useState(false);
  const [quest6IsDone, setQuest6IsDone] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    router.push("/elfName");
  };
  console.log("lara quest 1 is done", quest1IsDone);
  console.log("lara quest 2 is done", quest2IsDone);
  console.log("lara quest 3 is done", quest3IsDone);

  return (
    <div className={styles.questContainer}>
      <div>
        <h2 className={styles.questHeader}>
          The greatest honor of Stevemas is to become an Elf!
          <br />
          Complete these 6 tasks and St. Bartel will give your Elven name!
        </h2>

        <div className={styles.questQuestions}>
          <QuestItem
            quest={questList[0]}
            ind={1}
            setQuestIsDone={setQuest1IsDone}
          />
          {quest1IsDone && (
            <QuestItem
              quest={questList[1]}
              ind={2}
              setQuestIsDone={setQuest2IsDone}
            />
          )}
          {quest2IsDone && (
            <QuestItem
              quest={questList[2]}
              ind={3}
              setQuestIsDone={setQuest3IsDone}
            />
          )}
          {quest3IsDone && (
            <QuestItem
              quest={questList[3]}
              ind={4}
              setQuestIsDone={setQuest4IsDone}
            />
          )}
          {quest4IsDone && (
            <QuestItem
              quest={questList[4]}
              ind={5}
              setQuestIsDone={setQuest5IsDone}
            />
          )}
          {quest5IsDone && (
            <QuestItem
              quest={questList[5]}
              ind={6}
              setQuestIsDone={setQuest6IsDone}
            />
          )}
        </div>

        {quest6IsDone && (
          <div className={styles.questBtnContainer}>
            <button className={styles.questSubmitBtn} onClick={handleClick}>
              Are you done? Honor code!
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quest;
