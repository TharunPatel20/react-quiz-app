import React, { useState } from "react";
import Question from "./Question";
import Options from "./Options";
import Code from "./Code";
import { questions } from "../questions";

export default function Quiz(props) {
  const {  setFinish, setScore } = props;
  const [qNo, setQno] = useState(0);
  const [selected, setSelected] = useState([]);

  function calculateScore() {
    setFinish(true);
  }

  function checkAnswer() {
    const correctOptions = questions[qNo].options
      .filter((opt) => opt.isCorrect)
      .map((opt) => opt.text);

    if (questions[qNo].type === "multiple-selective") {
      if (
        selected.length === correctOptions.length &&
        selected.every((val) => correctOptions.includes(val))
      ) {
        setScore((prev) => prev + 1);
      }
    } else {
      if (selected.length === 1 && correctOptions.includes(selected[0])) {
        setScore((prev) => prev + 1);
      }
    }
  }

  const handlePrev = () => {
    if (qNo > 0) {
      setQno(qNo - 1);
      setSelected([]);
    }
  };

  const handleNext = () => {
    checkAnswer();
    setSelected([]);
    if (qNo < questions.length - 1) {
      setQno(qNo + 1);
    } else {
      calculateScore();
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-100 to-purple-200 p-8 rounded-lg shadow-lg">
      {/* Question Section */}
      <div className="mb-6">
        <Question
          id={questions[qNo].id}
          question={questions[qNo].question}
          current={qNo}
          total={questions.length}
        />

        {questions[qNo].type === "code-snippet" && (
          <div className="bg-gray-100 p-4 rounded-md mt-4">
            <Code code={questions[qNo].code} />
          </div>
        )}
      </div>

      {/* Options Section */}
      <div className="mb-6">
        <Options
          options={questions[qNo].options}
          type={questions[qNo].type}
          selected={selected}
          setSelected={setSelected}
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-6 justify-center">
        {qNo !== 0 && (
          <button
            onClick={handlePrev}
            className="px-6 py-3 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
          >
            Prev
          </button>
        )}

        <button
          onClick={handleNext}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          {qNo === questions.length - 1 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
}
