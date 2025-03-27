import { useState } from "react";
import BookTrainers from "../../../pages/BookTrainers";
import HealthTracker from "../../../pages/HealthTracker";
import Home from "../../../pages/Home";
import WorkoutRoom from "../../../pages/WorkoutRoom";
import styles from "./navigation.module.css"

const Navigation = ({ setCurrentPage }) => {
  const [activePage, setActivePage] = useState("home");
  const handleNavClick = (page, component) => {
    setActivePage(page);
    setCurrentPage(component);
  };

  return (
    <>
      <ul>
        <li
          className={activePage === "home" ? styles.active : ""}
          onClick={() => handleNavClick("home", <Home />)}
        >
          Home
        </li>
        <li
          className={activePage === "healthTracker" ? styles.active : ""}
          onClick={() => handleNavClick("healthTracker", <HealthTracker />)}
        >
          Health Tracker
        </li>
        <li
          className={activePage === "workoutRoom" ? styles.active : ""}
          onClick={() => handleNavClick("workoutRoom", <WorkoutRoom />)}
        >
          Workout Room
        </li>
        <li
          className={activePage === "bookTrainers" ? styles.active : ""}
          onClick={() => handleNavClick("bookTrainers", <BookTrainers />)}
        >
          Book Trainers
        </li>
      </ul>
    </>
  );
};
export default Navigation;
