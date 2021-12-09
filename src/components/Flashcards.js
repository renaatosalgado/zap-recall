import { useState } from "react";
import TurnPage from "../assets/turn.png";

export default function Flashcards() {
  const [showed, setShowed] = useState(false);
  const [card, setCard] = useState("flashcard");
  const [buttons, setButtons] = useState("answer-buttons");
  const [turn, setTurn] = useState("turn-page hidden");

  function showAnswer() {
    setShowed(true);
  }

  function selectAnswer(color) {
    setButtons("hidden");
    setCard(`flashcard ${color}`);
    setTurn("turn-page");
  }

  return (
    <>
      {showed ? (
        <div className={card}>
          <div className="card-title">O que é JSX?</div>
          <div className="card-counter">
            <p>1/8</p>
          </div>
          <div className="card-text">
            Uma extensão de linguagem do JavaScript.
          </div>
          <div className={buttons}>
            <button type="button" className="single-button black" onClick={() => selectAnswer("black")}>
              Agora aprendi
            </button>
            <button type="button" className="single-button red" onClick={() => selectAnswer("red")}>
              Não lembrei
            </button>
            <button type="button" className="single-button green" onClick={() => selectAnswer("green")}>
              Lembrei com esforço
            </button>
            <button type="button" className="single-button yellow" onClick={() => selectAnswer("yellow")}>
              Zap!
            </button>
          </div>
          <img
            src={TurnPage}
            alt="turn-page"
            className={turn}
          />
        </div>
      ) : (
        <div className={card}>
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
