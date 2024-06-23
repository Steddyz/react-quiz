import React from "react";

export default function Result({ answer, questions }) {
  return (
    <div>
      <div className="result">
        <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
        <h2>
          Вы отгадали правильно {answer} из {questions.length}
        </h2>
        <a href="/">
          <button>Попробовать снова</button>
        </a>
      </div>
    </div>
  );
}
