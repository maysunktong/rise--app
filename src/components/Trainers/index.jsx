import TrainersData from "../../data/trainers";

const Trainers = () => {
  return (
    <ul>
      {TrainersData.map((trainer, index) => (
        <li key={index}>
          <p>{trainer.name}</p>
          <p>Years of Exp: {trainer.yearsExperience}</p>
          <p>Programmes:</p>
          <ul>
            {trainer.specializations.map((programme, idx) => (
              <li key={idx}>{programme}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default Trainers;
