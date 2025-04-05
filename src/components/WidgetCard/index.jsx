import WidgetData from "../../data/widget";
import styles from "./healthCard.module.css";

const WidgetCard = ({ value, category }) => {
  const widget = WidgetData.find((item) => item.name === category);

  const unitMap = {
    coffee: "cups",
    water: "glasses",
    sleep: "hrs",
    steps: "steps",
  };

  return (
    <div className={styles.widgetCard}>
      <div className={styles.widgetStats}>
        <p className={styles.widgetHeader}>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </p>
        <p className={styles.widgetValue}>
          {value} {unitMap[category] || ""}
        </p>
      </div>
      <div>
        {widget && (
          <div className={`${styles.widgetImageContainer} ${styles[category]}`}>
            <img src={widget.image} alt={category} width={50} />
          </div>
        )}
      </div>
    </div>
  );
};
export default WidgetCard;
