
import { useState } from "react";

export default function Options(props) {
  const { options, type, correctAnswer, score, setScore } = props;
  const [selected, setSelected] = useState(""); // For single select, use a string instead of an array

  const handleSelect = (e) => {
    const value = e.target.value;

    if (type === "multiple-selective") {
      // For multiple select (checkbox)
      if (selected.includes(value)) {
        setSelected(selected.filter((item) => item !== value));
      } else {
        setSelected([...selected, value]);
      }
    } else {
      // For single choice (radio button)
      setSelected(value);

      // Check if selected option is correct
      if (value === correctAnswer) {
        setScore(score + 1);
      }
    }
  };

  return (
    <ul className="space-y-2">
      {options.map((option, index) => (
        <li key={index} className="flex items-center gap-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type={type === "multiple-selective" ? "checkbox" : "radio"}
              name="option" // All radio buttons must have the same name
              value={option.text} // The value should be the text or the identifier for the option
              className="accent-blue-500"
              onChange={handleSelect}
              checked={selected === option.text} // For radio, check if the selected value matches
            />
            {option.text}
          </label>
        </li>
      ))}
    </ul>
  );
}
