import React from "react";

export default function Result(props) {
  const { start, setStart, score, setScore, finish, setFinish } = props;

  return (
    <div className="flex flex-col items-center justify-center h-[70vh] bg-white rounded-lg shadow-lg p-8 space-y-6">
      <h2 className="text-3xl font-bold text-green-600">Quiz Completed! 🎉</h2>

      <p className="text-xl text-gray-700">
        Your Score: <span className="font-bold text-blue-500">{score}</span>
      </p>

      <button
        onClick={() => {
          setStart(!start);
          setFinish(!finish);
          setScore(score);
        }}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Start Again
      </button>
    </div>
  );
}
