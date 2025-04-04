import styles from "./filter.module.css";

const Filter = ({ data, selected, onSelect }) => {
  return (
    <ul className={styles.filterStack}>
      <li
        className={`${styles.filterItem} ${
          selected === null ? styles.activeFilter : ""
        }`}
        onClick={() => onSelect(null)}
      >
        All
      </li>
      {data.map((item, index) => (
        <li
          key={index}
          className={`${styles.filterItem} ${
            selected === item ? styles.activeFilter : ""
          }`}
          onClick={() => onSelect(selected === item ? null : item)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Filter;
