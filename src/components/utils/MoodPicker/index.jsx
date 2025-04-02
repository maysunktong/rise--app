import { useState } from "react";
import Moods from "../../../data/moods";
import styles from "./moodpicker.module.css";

const MoodPicker = ({ selectedMood = "", setSelectedMood }) => {
  const [isMoodPanelOpen, setIsMoodPanelOpen] = useState(false);

  return (
    <div className={styles.dropdown}>
      <div className={styles.moodButtonWrapper}>
        <button
          type="button"
          onClick={() => setIsMoodPanelOpen(!isMoodPanelOpen)}
          className={styles.moodPickerButton}
        >
          {selectedMood}
        </button>
      </div>

      {isMoodPanelOpen && (
        <div className={styles.dropdownContent}>
          <ul>
            {Moods.map((mood, index) => (
              <li
                key={index}
                onClick={() => {
                  setSelectedMood(`${mood.icon}`);
                  setIsMoodPanelOpen(false);
                }}
              >
                <p>
                  {mood.icon} {mood.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MoodPicker;
