import React, { useState } from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

export default function Login() {
  const [status, setStatus] = useState("");
  function handleLogin(e) {
    e.preventDefault();
    const password = localStorage.getItem(e.target[0].value);
    if (password === null) {
      setStatus("Неверное имя или пароль!");
      return;
    } else if (e.target[1].value !== password) {
      setStatus("Неверное имя или пароль!");
      return;
    }
    setStatus("Вы успешно вошли!");
    document.cookie = `user=${e.target[0].value}`;
  }
  return (
    <div className={styles.container}>
      <h1>Вход</h1>
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
          <button type="submit">Войти</button>
        </div>
      </form>
      <p className={styles.status}>{status}</p>
      <p style={{ textAlign: "center" }}>
        Нет аккаунта? Зарегестрируйся <Link to={"/signup"}>здесь</Link>
      </p>
    </div>
  );
}
