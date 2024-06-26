import React from "react";

export default function Game({ question, onClickVariant, step, questions }) {
  const percentage = Math.round((step / questions.length) * 100);

  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${percentage}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((obj, index) => (
          <li onClick={() => onClickVariant(index)} key={obj}>
            {obj}
          </li>
        ))}
      </ul>
    </>
  );
}
