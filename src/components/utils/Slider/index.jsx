import styles from "./slider.module.css";

const Slider = ({ min = 0, max = 10000, step = 1, value, onChange, title }) => {
  return (
    <div className={styles.sliderContainer}>
      <p>{title}</p>
      <div className={styles.sliderInputWrapper}>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className={styles.slider}
        />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
        />
      </div>
    </div>
  );
};

export default Slider;
