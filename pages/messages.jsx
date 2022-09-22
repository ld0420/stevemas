import React from "react";
import styles from "../styles/Home.module.css";
import Create from "../components/create";

import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Messages = () => {
  const { data, error } = useSWR("/api/messages", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <div className={styles.createContainer}>
        <Create />
        <main className={styles.messages}>
          {data.map((post, ind) => (
            <div className={styles.messageCard} key={ind}>
              <p className={styles.messageName}>from: {post.author}</p>
              <p className={styles.messageText}>{post.message}</p>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Messages;
