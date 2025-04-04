import styles from "./filter.module.css";

const Filter = ({ data, selected, onSelect }) => {
  
  const handleChange = (e) => {
    const value = e.target.value;
    onSelect(value === "all" ? null : value);
  };

  return (
    <>
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
      <div className={styles.mobileFilter}>
        <select
          className={styles.dropdown}
          value={selected || "all"}
          onChange={handleChange}
        >
          <option value="all">All</option>
          {data.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Filter;
