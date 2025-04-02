import RatingItem from "../RatingItem";
import styles from "./bar.module.css";

const RatingBar = ({
  totalRatings = 5,
  selectedRatings = 0,
  onSelect,
  Icon,
  defaultColor,
  selectedColor,
  title,
}) => {
  return (
    <div>
      <p>{title}</p>
      <div className={styles.ratingItemWrapper}>
        {Array.from({ length: totalRatings }).map((_, index) => (
          <RatingItem
            key={index}
            selected={selectedRatings > index}
            onClick={() => onSelect(index + 1)}
            Icon={Icon}
            selectedColor={selectedColor}
            defaultColor={defaultColor}
          />
        ))}
        <p>
          {selectedRatings}/{totalRatings}
        </p>
      </div>
    </div>
  );
};

export default RatingBar;
