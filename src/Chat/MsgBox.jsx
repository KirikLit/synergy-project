import React from "react";
import Message from "./Message";
import styles from "./MsgBox.module.css";

export default function MsgBox({ messages }) {
  console.log(messages);
  return (
    <div className={styles.box}>
      {messages.map((msg) => (
        <Message author={msg.author} text={msg.text} />
      ))}
    </div>
  );
}
