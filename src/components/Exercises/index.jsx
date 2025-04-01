import { useEffect, useState } from "react";
import styles from "./exercises.module.css";

const Exercises = () => {
  const [bodyPartList, setBodyPartList] = useState([]);
  const [exerciseList, setExerciseList] = useState([]);
  const [selectedBodyPart, setSelectedBodyPart] = useState("");

  useEffect(() => {
    fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPartList", {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        "X-RapidAPI-Key": import.meta.env.VITE_EXERCISEDB_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) =>
        Array.isArray(data)
          ? setBodyPartList(data)
          : console.error("Invalid body part list data", data)
      )
      .catch((error) => console.error("Error fetching body part list:", error));
  }, []);

  useEffect(() => {
    const url = selectedBodyPart
      ? `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${selectedBodyPart}?limit=30`
      : "https://exercisedb.p.rapidapi.com/exercises?limit=30";

    fetch(url, {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        "X-RapidAPI-Key": import.meta.env.VITE_EXERCISEDB_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) =>
        Array.isArray(data)
          ? setExerciseList(data)
          : console.error("Invalid exercises data", data)
      )
      .catch((error) => console.error("Error fetching exercises:", error));
  }, [selectedBodyPart]);

  return (
    <div>
      {/* mobile filter */}
      {/* {
        <select onChange={(e) => setSelectedBodyPart(e.target.value)}>
          <option value="">All Exercises</option>
          {bodyPartList.map((bodyPart, index) => (
            <option key={index} value={bodyPart}>
              {bodyPart}
            </option>
          ))}
        </select>
      } */}

      <ul>
        <li onClick={() => setSelectedBodyPart("")}>All exercisees</li>
        {bodyPartList.map((bodyPart, index) => (
          <li key={index} onClick={() => setSelectedBodyPart(bodyPart)}>
            {bodyPart}
          </li>
        ))}
      </ul>

      <h1>Exercises</h1>
      <ul className={styles.cardsContainer}>
        {exerciseList.length > 0 ? (
          exerciseList.map((exercise, index) => (
            <li key={index} className={styles.trainerCard}>
              <div className={styles.imageContainer}>
                <img src="../../../public/assets/gym/exercise.jpg" alt="" width={100} />
              </div>
              <div className={styles.details}>
                <h2>{exercise.name}</h2>
              </div>
            </li>
          ))
        ) : (
          <li>No exercises found</li>
        )}
      </ul>
    </div>
  );
};

export default Exercises;
