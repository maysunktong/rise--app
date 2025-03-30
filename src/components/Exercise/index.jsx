import { useEffect, useState } from "react";

const Exercise = () => {
  const [bodyPartList, setBodyPartList] = useState([]);
  const [exerciseList, setExerciseList] = useState([]);
  const [selectedBodyPart, setSelectedBodyPart] = useState("");

  useEffect(() => {
    fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPartList", {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        "X-RapidAPI-Key": import.meta.env.VITE_EXERCISEDB_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) =>
        Array.isArray(data)
          ? setBodyPartList(data)
          : console.error("Invalid body part list data", data)
      )
      .catch((error) => console.error("Error fetching body part list:", error));
  }, []);

  const fetchExercises = () => {
    let url = "https://exercisedb.p.rapidapi.com/exercises";
    if (selectedBodyPart) {
      url += `/bodyPart/${selectedBodyPart}`;
    }

    fetch(url, {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        "X-RapidAPI-Key": import.meta.env.VITE_EXERCISEDB_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) =>
        Array.isArray(data)
          ? setExerciseList(data)
          : console.error("Invalid exercises data", data)
      )
      .catch((error) => console.error("Error fetching exercises:", error));
  };

  return (
    <div>
      <select onChange={(e) => setSelectedBodyPart(e.target.value)}>
        <option value="">Select Body Part</option>
        {bodyPartList.map((bodyPart, index) => (
          <option key={index} value={bodyPart}>
            {bodyPart}
          </option>
        ))}
      </select>

      <button onClick={fetchExercises}>Filter Exercises</button>

      <ul>
        {exerciseList.length > 0 ? (
          exerciseList.map((exercise, index) => (
            <li key={index}>{exercise.name}</li>
          ))
        ) : (
          <li>No exercises found</li>
        )}
      </ul>
    </div>
  );
};

export default Exercise;
