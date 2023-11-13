import React, { useState } from "react";
import styles from "./Chat.module.css";
import MsgBox from "./MsgBox";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState("");
  function handleSend(e) {
    e.preventDefault();
    const author = document.cookie.split("; ")[0].split("=")[1];
    console.log(author);
    if (!author) {
      setStatus("Вы не вошли! Войдите!");
      return;
    }
    const text = e.target[0].value;
    if (text === "") {
      setStatus("Нельзя отправить пустое сообщение!");
      return;
    }
    setMessages([...messages, { author: author, text: text }]);
    setStatus("");
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Чат</h1>
      <MsgBox messages={messages} />
      <form className={styles.send} onSubmit={handleSend}>
        <input type="text" />
        <button type="submit">Отправить</button>
      </form>
      <p className={styles.status}>{status}</p>
    </div>
  );
}
