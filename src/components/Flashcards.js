import { useState } from "react";
import TurnPage from "../assets/turn.png";

export default function Flashcards() {
  const [showed, setShowed] = useState(false);
  const [answered, setAnswered] = useState(false);

  function showAnswer() {
    setShowed(true);
  }

  function showNextQuestion() {}

  return (
    <>
      {showed ? (
        <div className="flashcard">
          <div className="card-title">O que é JSX?</div>
          <div className="card-counter">
            <p>1/8</p>
          </div>
          <div className="card-text">
            Uma extensão de linguagem do JavaScript.
          </div>
          <div className="answer-buttons">
            <button type="button" className="single-button black">
              Agora aprendi
            </button>
            <button type="button" className="single-button red">
              Não lembrei
            </button>
            <button type="button" className="single-button green">
              Lembrei com esforço
            </button>
            <button type="button" className="single-button yellow">
              Zap!
            </button>
          </div>
        </div>
      ) : (
        <div className="flashcard">
          <div className="card-counter">
            <p>1/8</p>
          </div>
          <div className="card-text">O que é JSX?</div>
          <img
            src={TurnPage}
            alt="turn-page"
            className="turn-page"
            onClick={showAnswer}
          />
        </div>
      )}
    </>
  );
}
