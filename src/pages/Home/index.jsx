import HealthWidget from "../../components/HealthWidget";
import styles from "./home.module.css";

const Home = () => {
  return (
    <>
      <h1 className="pageHeader">Dashboard</h1>
      <div className={styles.cardsContainer}>
        <HealthWidget />
      </div>
    </>
  );
};
export default Home;
