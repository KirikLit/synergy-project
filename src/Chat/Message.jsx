import React from "react";
import styles from "./Message.module.css";

export default function Message({ author, text }) {
  return (
    <div className={styles.container}>
      <p className={styles.author}>{author}:</p>
      <p className={styles.text}>{text}</p>
    </div>
  );
}
