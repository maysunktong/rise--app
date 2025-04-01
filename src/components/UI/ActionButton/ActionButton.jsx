import styles from "./actionbutton.module.css";

const ActionButton = ({action, text = "Book Now" }) => {
  return <button className={`${styles.actionButton} ${styles[action]}`}>{text}</button>;
};

export default ActionButton;
