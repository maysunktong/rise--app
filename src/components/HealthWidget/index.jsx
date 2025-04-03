import { useEffect, useState } from "react";
import WidgetCard from "../WidgetCard";
import styles from "./healthWidget.module.css";

const HealthWidget = () => {
  const [waterCount, setWaterCount] = useState("--");
  const [coffeeCount, setCoffeeCount] = useState("--");
  const [stepCount, setStepCount] = useState("--");
  const [sleepCount, setSleepCount] = useState("--");

  const loadData = () => {
    const storedData = JSON.parse(localStorage.getItem("trackerList")) || [];
    if (storedData.length > 0) {
      const latestItem = storedData[0];
      setWaterCount(latestItem.waterCount || 0);
      setCoffeeCount(latestItem.coffeeCount || 0);
      setStepCount(latestItem.stepCount || 0);
      setSleepCount(latestItem.sleepCount || 0);
    } else {
      setWaterCount("--");
      setCoffeeCount("--");
      setStepCount("--");
      setSleepCount("--");
    }
  };

  useEffect(() => {
    loadData();

    const handleTrackerUpdate = () => {
      loadData();
    };

    window.addEventListener("trackerListUpdated", handleTrackerUpdate);
    return () =>
      window.removeEventListener("trackerListUpdated", handleTrackerUpdate);
  }, []);

  return (
    <div className={styles.healthWidget}>
      <WidgetCard value={stepCount} category={"steps"} />
      <WidgetCard value={sleepCount} category={"sleep"} />
      <WidgetCard value={coffeeCount} category={"coffee"} />
      <WidgetCard value={waterCount} category={"water"} />
    </div>
  );
};

export default HealthWidget;
