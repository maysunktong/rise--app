import { FaStar } from "react-icons/fa";
import styles from "./item.module.css"

const RatingItem = ({
  selected,
  onClick,
  Icon = FaStar,
  defaultColor = "gray",
  selectedColor = "blue",
}) => {
  return (
    <div className={StyleSheet.ratingItemContainer}>
      <Icon color={selected ? selectedColor : defaultColor} onClick={onClick} />
    </div>
  );
};

export default RatingItem;
