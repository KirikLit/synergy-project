import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className={styles.container}>
      <navbar className={styles.list}>
        <Link className={styles.link} to={"/"}>
          Главная
        </Link>

        <Link className={styles.link} to={"/chat"}>
          Чат
        </Link>

        <Link className={styles.link} to={"/users"}>
          Пользователи
        </Link>

        <Link className={styles.link} to={"/login"}>
          Войти
        </Link>
      </navbar>
    </header>
  );
}
