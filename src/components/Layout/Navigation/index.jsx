import { useState } from "react";
import BookTrainers from "../../../pages/BookTrainers";
import HealthTracker from "../../../pages/HealthTracker";
import Home from "../../../pages/Home";
import WorkoutRoom from "../../../pages/WorkoutRoom";
import styles from "./navigation.module.css";

import { FaRunning } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { IoFitnessOutline } from "react-icons/io5";
import { LiaDumbbellSolid } from "react-icons/lia";

const Navigation = ({ setCurrentPage }) => {
  const [activePage, setActivePage] = useState("home");
  const handleNavClick = (page, component) => {
    setActivePage(page);
    setCurrentPage(component);
  };

  return (
    <ul className={styles.navigationLists}>
      <li
        className={activePage === "home" ? styles.active : ""}
        onClick={() => handleNavClick("home", <Home />)}
      >
        <IoMdHome /> Home
      </li>
      <li
        className={activePage === "healthTracker" ? styles.active : ""}
        onClick={() => handleNavClick("healthTracker", <HealthTracker />)}
      >
        <IoFitnessOutline /> Health Tracker
      </li>
      <li
        className={activePage === "workoutRoom" ? styles.active : ""}
        onClick={() => handleNavClick("workoutRoom", <WorkoutRoom />)}
      >
        <LiaDumbbellSolid /> Workout Room
      </li>
      <li
        className={activePage === "bookTrainers" ? styles.active : ""}
        onClick={() => handleNavClick("bookTrainers", <BookTrainers />)}
      >
        <FaRunning /> Book Trainers
      </li>
    </ul>
  );
};
export default Navigation;
