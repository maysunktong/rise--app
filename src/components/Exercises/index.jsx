import ExercisesData from "../../data/exercises";
import GetRandomImage from "../../utils/GetRandomImage";
import ActionButton from "../UI/ActionButton/ActionButton";
import styles from "./exercises.module.css";

const Exercises = () => {
  return (
    <div className={styles.cardsContainer}>
      <ul className={styles.cardsList}>
        {ExercisesData.map((exercise, index) => (
          <li key={index} className={styles.trainerCard}>
            <div className={styles.imageContainer}>
              <img src={GetRandomImage()} alt="Exercise" width={100} />
            </div>
            <div className={styles.details}>
              <h2>{exercise.name}</h2>
              <p>Focus: {exercise.muscle}</p>
              <ActionButton action="readmore">Read more</ActionButton>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Exercises;
