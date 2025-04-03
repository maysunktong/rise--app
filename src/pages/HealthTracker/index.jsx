import { useEffect, useState } from "react";
import HealthWidget from "../../components/HealthWidget";
import Tracker from "../../components/Tracker";
import ActionButton from "../../components/UI/ActionButton/ActionButton";
import styles from "./healthtracker.module.css";

const HealthTracker = () => {
  const [list, setList] = useState([]);

  const loadData = () => {
    const storedData = JSON.parse(localStorage.getItem("trackerList")) || [];
    setList(storedData);
  };

  useEffect(() => {
    loadData();
  }, []);

  const onClearList = () => {
    setList([]);
    localStorage.removeItem("trackerList");
  };

  return (
    <>
      <div className={styles.headerWrapper}>
        <h1 className="pageHeader">Health Tracker</h1>
        <div className={styles.buttonWrapper}>
          <ActionButton action="erase" onClick={onClearList}>
            Erase all
          </ActionButton>
          <ActionButton action="write">Write</ActionButton>
        </div>
      </div>
      <HealthWidget />
      <Tracker list={list} setList={setList} />
    </>
  );
};

export default HealthTracker;
