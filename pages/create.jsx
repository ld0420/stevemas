import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import Router from "next/router";

const Create = () => {
  const [message, setMessage] = useState("");
  const [author, setName] = useState("");

  const submitData = (e) => {
    e.preventDefault();
  };
  const handleSave = async () => {
    try {
      const body = { author, message };
      await fetch("/api/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      await Router.push("/messages");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form onSubmit={submitData} className={styles.main}>
      <h1>Leave a birthday message for Steve</h1>
      <input
        className={styles.userName}
        type="text"
        value={author}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
      />
      <textarea
        className={styles.userMessage}
        type="text"
        value={message}
        placeholder="Message"
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className={styles.saveBtn} onClick={handleSave}>
        Save
      </button>
    </form>
  );
};

export default Create;
