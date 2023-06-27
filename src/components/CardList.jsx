import Card from "./Card";
import styles from "../Styles/card.module.css";
import { useState } from "react";
import { useEffect } from "react";

const CardList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className={styles.cardList}>
      {users.length > 1 ? (
        users.map((user) => (
          <Card key={user.id} title={user.name} description={user.email} />
        ))
      ) : (
        <p style={{ textAlign: "center" }}>Loading...</p>
      )}
    </div>
  );
};

export default CardList;
