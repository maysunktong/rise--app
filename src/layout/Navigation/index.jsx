import Home from "../../pages/Home";
import HealthTracker from "../../pages/HealthTracker";
import WorkoutRoom from "../../pages/WorkoutRoom";
import BookTrainers from "../../pages/BookTrainers";
import { useState } from "react";
import styles from "./nav.module.css";

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
