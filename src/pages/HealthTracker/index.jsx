import HealthWidget from "../../components/HealthWidget";
import Tracker from "../../components/Tracker";
import ActionButton from "../../components/UI/ActionButton/ActionButton";
import styles from "./healthtracker.module.css";

const HealthTracker = () => {
  return (
    <>
      <div className={styles.headerWrapper}>
        <h1 className="pageHeader">Health Tracker</h1>
        <div className={styles.buttonWrapper}>
          <ActionButton>Erase all</ActionButton>
          <ActionButton>Write</ActionButton>
        </div>
      </div>

      <HealthWidget />
      <Tracker />
    </>
  );
};
export default HealthTracker;
