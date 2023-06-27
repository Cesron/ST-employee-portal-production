import styles from "./Styles/app.module.css";
import CardList from "./components/CardList";

const App = () => {
  return (
    <main className={styles.main}>
      <h1>Employee Portal!</h1>
      <CardList />
    </main>
  );
};

export default App;
