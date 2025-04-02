import Trainers from "../../components/Trainers";
import { Specializations } from "../../data/trainers";

const BookTrainers = () => {
  return (
    <div>
      <h1 className="pageHeader">Fitness Trainers</h1>
      <ul>
        {Specializations.map((type, index) => (
          <li key={index}>{type}</li>
        ))}
      </ul>
      <Trainers />
    </div>
  );
};
export default BookTrainers;
