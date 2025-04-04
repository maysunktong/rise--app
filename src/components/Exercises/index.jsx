import { useState } from "react";
import ExercisesData from "../../data/exercises";
import GetRandomImage from "../../utils/GetRandomImage";
import Filter from "../Filter";
import ActionButton from "../UI/ActionButton/ActionButton";
import styles from "./exercises.module.css";

const Exercises = () => {
  const [selectedMuscle, setSelectedMuscle] = useState(null);

  const muscleTypes = Array.from(
    new Set(ExercisesData.map((exercise) => exercise["muscle"]))
  );

  const filteredExercises = selectedMuscle
    ? ExercisesData.filter((exercise) => exercise["muscle"] === selectedMuscle)
    : ExercisesData;

  return (
    <div className={styles.cardsContainer}>
      <Filter
        data={muscleTypes}
        selected={selectedMuscle}
        onSelect={setSelectedMuscle}
      />
      <div className={styles.cardsBody}>
        <ul className={styles.cardsList}>
          {filteredExercises.map((exercise, index) => (
            <li key={index} className={styles.trainerCard}>
              <div className={styles.imageContainer}>
                <img src={GetRandomImage()} alt={exercise.name} width={100} />
              </div>
              <div className={styles.details}>
                <h2>{exercise["name"]}</h2>
                <p>Focus: {exercise["muscle"]}</p>
                <ActionButton action="readmore">Read more</ActionButton>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Exercises;
