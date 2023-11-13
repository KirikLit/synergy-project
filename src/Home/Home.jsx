import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export default function Главная() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {document.cookie.split("; ")[0].split("=")[1]
          ? `Добро пожаловать, ${document.cookie.split("; ")[0].split("=")[1]}!`
          : "Добро пожаловать на мой сайт!"}
      </h1>
      <img
        src="https://img.freepik.com/free-photo/cute-domestic-kitten-sits-at-window-staring-outside-generative-ai_188544-12519.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699833600&semt=ais"
        alt="котик"
      />
      <p>
        Вы можете пройти авторизацию <Link to={"/login"}>здесь</Link>{" "}
      </p>
      <p>
        Ссылка на исходный код{" "}
        <a
          href="https://github.com/KirikLit/synergy-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          тут
        </a>
      </p>
    </div>
  );
}
