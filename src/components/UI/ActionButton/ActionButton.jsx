import styles from "./actionbutton.module.css";

const ActionButton = ({action, children, onClick }) => {
  return <button onClick={onClick} className={`${styles.actionButton} ${styles[action]}`}>{children}</button>;
};

export default ActionButton;
