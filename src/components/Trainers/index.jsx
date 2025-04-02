import { TrainersData } from "../../data/trainers";
import ActionButton from "../UI/ActionButton/ActionButton";
import styles from "./trainers.module.css";

const Trainers = () => {
  return (
    <div className={styles.cardsContainer}>
      <ul className={styles.cardsList}>
        {TrainersData.map((trainer, index) => (
          <li key={index} className={styles.trainerCard}>
            <div className={styles.imageContainer}>
              <img src={trainer.image} alt="" width={100} />
            </div>
            <div className={styles.details}>
              <h2>{trainer.name}</h2>
              <p>Years of Exp: {trainer.yearsExperience}</p>
              <ul>
                {trainer.specializations.map((programme, idx) => (
                  <li key={idx}>{programme}</li>
                ))}
              </ul>
              <ActionButton action="trainer">Book now</ActionButton>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Trainers;
