import React, { useState } from "react";
import styles from "./Signup.module.css";

export default function Signup() {
  const [status, setStatus] = useState("");
  function handleLogin(e) {
    e.preventDefault();
    const [name, password, ...rest] = e.target;
    if (name.value === "" || password.value === "") {
      setStatus("Поля нельзя оставлять пустыми!");
      return;
    }
    localStorage.setItem(name.value, password.value);
    setStatus("Вы успешно зарегестрировались");
  }
  return (
    <div className={styles.container}>
      <h1>Регистрация</h1>
      <form onSubmit={handleLogin}>
        <div className={styles.formBlock}>
          <label htmlFor="">Имя: </label>
          <input id="name" type="text" />
        </div>
        <div className={styles.formBlock}>
          <label htmlFor="">Пароль: </label>
          <input id="password" type="password" />
        </div>
        <div className={styles.formBlock}>
          <button type="submit">Зарегестрироваться</button>
        </div>
      </form>
      <p className={styles.status}>{status}</p>
    </div>
  );
}
