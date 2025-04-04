import { useState } from "react";
import { Specializations, TrainersData } from "../../data/trainers";
import Filter from "../Filter";
import ActionButton from "../UI/ActionButton/ActionButton";
import styles from "./trainers.module.css";

const Trainers = () => {
  const [selectedSpecialization, setSelectedSpecialization] = useState(null);

  const filteredTrainers = selectedSpecialization
    ? TrainersData.filter((trainer) =>
        trainer.specializations.includes(selectedSpecialization)
      )
    : TrainersData;

  return (
    <div className={styles.cardsContainer}>
      <Filter
        data={Specializations}
        onSelect={setSelectedSpecialization}
        selected={selectedSpecialization}
      />
      {/* Trainers List */}
      <div className={styles.cardsBody}>
        <ul className={styles.cardsList}>
          {filteredTrainers.length > 0 ? (
            filteredTrainers.map((trainer, index) => (
              <li key={index} className={styles.trainerCard}>
                <div className={styles.imageContainer}>
                  <img src={trainer.image} alt={trainer.name} width={100} />
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
            ))
          ) : (
            <p>No trainers found for "{selectedSpecialization}"</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Trainers;
