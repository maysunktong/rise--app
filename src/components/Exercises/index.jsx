import ExercisesData from "../../data/exercises";
import ActionButton from "../UI/ActionButton/ActionButton";
import styles from "./exercises.module.css";

const SportImageLinks = [
  "https://res.cloudinary.com/maysunktong/image/upload/v1743536315/rise-app/Person_with_Barbell_evnya2.jpg",
  "https://res.cloudinary.com/maysunktong/image/upload/v1743593575/rise-app/Sporty_Woman_Abs_Exercises_vmjnaq.jpg",
  "https://res.cloudinary.com/maysunktong/image/upload/v1743593574/rise-app/Bodybuilder_Exercises_with_Rubber_Band_nofspw.jpg",
  "https://res.cloudinary.com/maysunktong/image/upload/v1743534429/rise-app/exercise_r0aypk.jpg",
];

const getRandomImage = () => {
  return SportImageLinks[Math.floor(Math.random() * SportImageLinks.length)];
};

const Exercises = () => {
  return (
    <div>
      <h1 className="pageHeader">Workout Room</h1>
      <div className={styles.cardsContainer}>
        <ul className={styles.cardsList}>
          {ExercisesData.map((exercise, index) => (
            <li key={index} className={styles.trainerCard}>
              <div className={styles.imageContainer}>
                <img src={getRandomImage()} alt="Exercise" width={100} />
              </div>
              <div className={styles.details}>
                <h2>{exercise.name}</h2>
                <p>Focus: {exercise.muscle}</p>
                <ActionButton action="book">Book now</ActionButton>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Exercises;
