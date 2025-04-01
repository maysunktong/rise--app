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
      ? `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${selectedBodyPart}?limit=20`
      : "https://exercisedb.p.rapidapi.com/exercises?limit=20";

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
      <ul className={styles.cardsContainer}>
        {exerciseList.length > 0 ? (
          exerciseList.map((exercise, index) => (
            <li key={index} className={styles.trainerCard}>
              <div className={styles.imageContainer}>
                <img src="https://res.cloudinary.com/maysunktong/image/upload/v1743534429/rise-app/exercise_r0aypk.jpg" alt="" width={100} />
              </div>
              <div className={styles.details}>
                <h3>{exercise.name}</h3>
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
