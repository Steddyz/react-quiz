import "./index.css";
import React from "react";
import Game from "./components/Game";
import Result from "./components/Result";
import { useState } from "react";

const questions = [
  {
    title: "React - это ... ?",
    variants: ["библиотека", "фреймворк", "приложение"],
    correct: 0,
  },
  {
    title: "Компонент - это ... ",
    variants: [
      "приложение",
      "часть приложения или страницы",
      "то, что я не знаю что такое",
    ],
    correct: 1,
  },
  {
    title: "Что такое JSX?",
    variants: [
      "Это простой HTML",
      "Это функция",
      "Это тот же HTML, но с возможностью выполнять JS-код",
    ],
    correct: 2,
  },
];

function App() {
  const [step, setStep] = useState(0);
  const [answer, setAnswer] = useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    if (index === question.correct) {
      setAnswer(answer + 1);
    }
    setStep(step + 1);
  };

  return (
    <div className="App">
      {step !== questions.length ? (
        <Game
          step={step}
          questions={questions}
          question={question}
          onClickVariant={onClickVariant}
        />
      ) : (
        <Result answer={answer} questions={questions} />
      )}
    </div>
  );
}

export default App;
