import ExercisesData from "../../data/exercises";
import GetRandomImage from "../../utils/GetRandomImage";
import ActionButton from "../UI/ActionButton/ActionButton";
import styles from "./exercises.module.css";

const Exercises = () => {
  return (
    <div>
      <h1 className="pageHeader">Workout Room</h1>
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
                <div className={styles.buttonWrapper}>
                  <ActionButton action="readmore">Read more</ActionButton>
                  <ActionButton action="workout">Book now</ActionButton>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Exercises;
