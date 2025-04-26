import { useState } from "react";
import Quiz from "./Quiz";
import Result from "./Result";

function App() {
  const [start, setStart] = useState(false);
  const [finish, setFinish] = useState(false);
  const [score, setScore] = useState(0);

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-center py-8 text-blue-600">
          Quiz App
        </h1>

        <div className="flex items-center justify-center h-[80vh] bg-red-400 rounded-lg shadow-lg mx-4">
          <div>
            {!start ? (
              <button
                onClick={() => setStart(true)}
                className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all"
              >
                Start Quiz
              </button>
            ) : !finish ? (
              <Quiz
                finish={finish}
                setFinish={setFinish}
                setScore={setScore}
              />
            ) : (
              <Result
                start={start}
                setStart={setStart}
                score={score}
                setScore={setScore}
                finish={finish}
                setFinish={setFinish}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
