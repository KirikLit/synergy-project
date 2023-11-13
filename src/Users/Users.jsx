import React, { useEffect, useState } from "react";
import styles from "./Users.module.css";

export default function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => setUsers(res));
  }, []);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Пользователи</h1>
      <p className={styles.descr}>(получение данных из API)</p>
      <div className={styles.users}>
        {users.map((user) => (
          <div className={styles.usercard}>
            <p className={styles.username}>
              {user.id}: {user.name}
            </p>
            <p className={styles.userdescr}>@{user.username}</p>
            <p className={styles.userdescr}>{user.email}</p>
            <p className={styles.userdescr}>Телефон: {user.phone}</p>
            <p className={styles.userdescr}>
              Адрес: {user.address.street}, {user.address.suite},{" "}
              {user.address.city}, {user.address.zipcode}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
