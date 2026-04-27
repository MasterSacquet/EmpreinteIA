import { useState } from "react";
import Home from "./ui/Home";
import Quiz from "./ui/Quiz";
import Result from "./ui/Result";
import "./App.css";

export default function App() {
  const [screen, setScreen] = useState("home");
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-lg">

        {screen === "home" && (
          <Home onStart={() => setScreen("quiz")} />
        )}

        {screen === "quiz" && (
          <Quiz
            onComplete={(data) => {
              setAnswers(data);
              setScreen("result");
            }}
          />
        )}

        {screen === "result" && (
          <Result
            data={answers}
            result={result}
            setResult={setResult}
            onRestart={() => {
              setScreen("home");
              setAnswers({});
              setResult(null);
            }}
          />
        )}

      </div>
    </div>
  );
}