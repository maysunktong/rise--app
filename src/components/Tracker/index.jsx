import { format } from "date-fns";
import { useEffect, useState } from "react";
import { FaGlassWater } from "react-icons/fa6";
import { PiCoffeeBeanFill } from "react-icons/pi";
import { RiDeleteBin5Line } from "react-icons/ri";
import MoodPicker from "../MoodPicker";
import RatingBar from "../RatingBar";
import Slider from "../Slider";
import ActionButton from "../UI/ActionButton/ActionButton";
import styles from "./tracker.module.css";

const Tracker = ({ list, setList, isTrackerOpen, setIsTrackerOpen }) => {
  const [text, setText] = useState("");
  const [waterCount, setWaterCount] = useState(0);
  const [coffeeCount, setCoffeeCount] = useState(0);
  const [stepCount, setStepCount] = useState(0);
  const [sleepCount, setSleepCount] = useState(0);
  const [selectedMood, setSelectedMood] = useState("🫥");
  const [error, setError] = useState("");

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("trackerList")) || [];
    setList(storedList);
  }, [setList]);

  useEffect(() => {
    if (list.length > 0) {
      localStorage.setItem("trackerList", JSON.stringify(list));
    }
  }, [list]);

  const validateInput = () => {
    if (!selectedMood || !text.trim()) {
      setError("Please select a mood and write something.");
      return false;
    }
    if (
      waterCount === 0 &&
      coffeeCount === 0 &&
      stepCount === 0 &&
      sleepCount === 0
    ) {
      setError("Please fill in at least one activity");
      return false;
    }
    setError("");
    return true;
  };

  const onAddList = () => {
    if (!validateInput()) return;
    const newEntry = {
      text,
      waterCount,
      coffeeCount,
      stepCount,
      sleepCount,
      selectedMood,
      date: format(new Date(), "MMMM dd"),
      time: format(new Date(), "HH:mm"),
    };

    setText("");
    setWaterCount(0);
    setCoffeeCount(0);
    setStepCount(0);
    setSleepCount(0);
    setSelectedMood("🫥");

    const updatedList = [newEntry, ...list];
    setList(updatedList);
    localStorage.setItem("trackerList", JSON.stringify(updatedList));

    window.dispatchEvent(new Event("trackerListUpdated"));

    setIsTrackerOpen(false);
  };

  const onClearItem = () => {
    setText("");
    setWaterCount(0);
    setCoffeeCount(0);
    setStepCount(0);
    setSleepCount(0);
    setSelectedMood("🫥");
    setList([]);
  };

  const onDeleteItem = (indexToRemove) => {
    const updatedList = list.filter((_, index) => index !== indexToRemove);
    setList(updatedList);
    localStorage.setItem("trackerList", JSON.stringify(updatedList));
  };

  return (
    <div>
      {isTrackerOpen && (
        <div className={styles.trackerForm}>
          <div className={styles.trackerTextContainer}>
            <MoodPicker
              selectedMood={selectedMood}
              setSelectedMood={setSelectedMood}
            />
            <textarea
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Click emoji and write a note"
              className={styles.textField}
            />
          </div>
          <div className={styles.trackerContainer}>
            <div>
              <RatingBar
                title="Daily Water Drinking"
                totalRatings={10}
                selectedRatings={waterCount}
                onSelect={setWaterCount}
                Icon={FaGlassWater}
                selectedColor="lightblue"
                defaultColor="gray"
              />
              <RatingBar
                title="Daily Caffeine Intake"
                totalRatings={10}
                selectedRatings={coffeeCount}
                onSelect={setCoffeeCount}
                Icon={PiCoffeeBeanFill}
                selectedColor="brown"
                defaultColor="gray"
              />
            </div>
            <div>
              <Slider
                title="Total Sleeping Hours"
                min={0}
                max={12}
                step={0.5}
                value={sleepCount}
                onChange={setSleepCount}
              />
              <Slider
                title="Walking Steps"
                min={0}
                max={10000}
                step={1}
                value={stepCount}
                onChange={setStepCount}
              />
            </div>
          </div>
          {error && <p className={styles.errorMessage}>{error}</p>}
          <div className={styles.buttonGroup}>
            <ActionButton
              onClick={() => setIsTrackerOpen(false)}
              action="erase"
            >
              Close
            </ActionButton>
            <ActionButton onClick={onClearItem} action="erase">
              Clear fields
            </ActionButton>
            <ActionButton onClick={onAddList} action="write">
              Post
            </ActionButton>
          </div>
        </div>
      )}

      <ul>
        {list.map(
          (
            {
              text,
              waterCount,
              coffeeCount,
              stepCount,
              sleepCount,
              selectedMood,
            },
            index
          ) => (
            <li key={index} className={styles.summaryList}>
              <section className={styles.summarySection}>
                <div className={styles.summaryHeader}>
                  <p className={styles.summaryTitle}>
                    Today I feel {selectedMood}
                  </p>
                  <p className={styles.summaryDateTime}>
                    {list[index].date} {list[index].time}
                  </p>
                </div>
                <div className={styles.summaryBottom}>
                  <p>{text}</p>
                  <div className={styles.summaryListFlex}>
                    <div className={styles.summaryItemFlex}>
                      <span>Water: </span>
                      <RatingBar
                        totalRatings={10}
                        selectedRatings={waterCount}
                        Icon={FaGlassWater}
                        selectedColor="lightblue"
                        defaultColor="gray"
                      />
                    </div>
                    <div className={styles.summaryItemFlex}>
                      <span>Coffee: </span>
                      <RatingBar
                        totalRatings={10}
                        selectedRatings={coffeeCount}
                        Icon={PiCoffeeBeanFill}
                        selectedColor="brown"
                        defaultColor="gray"
                      />
                    </div>
                    <div>Sleep: {sleepCount} hrs</div>
                    <div>Steps: {stepCount} steps</div>
                  </div>
                </div>
              </section>
              <RiDeleteBin5Line
                onClick={() => onDeleteItem(index)}
                size={32}
                color="lightgray"
              />
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Tracker;
