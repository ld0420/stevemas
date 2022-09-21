import React from "react";
import prisma from "../lib/prisma";
import styles from "../styles/Home.module.css";

const Messages = (props) => {
  console.log("lara", props);
  return (
    <div>
      <div className={styles.main}>
        <h1>All Messages</h1>
        <main className={styles.messages}>
          {props.messages.map((post, ind) => (
            <div className={styles.messageCard} key={ind}>
              <p className={styles.messageName}>{post.author}</p>
              <p className={styles.messageText}>{post.message}</p>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const messages = await prisma.post.findMany({
    select: {
      author: true,
      message: true
    }
  });
  return {
    props: { messages }
  };
};

export default Messages;
