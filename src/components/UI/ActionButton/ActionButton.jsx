import styles from "./actionbutton.module.css";

const ActionButton = ({action, children }) => {
  return <button className={`${styles.actionButton} ${styles[action]}`}>{children}</button>;
};

export default ActionButton;
