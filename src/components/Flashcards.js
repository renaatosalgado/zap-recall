import { useState } from "react";
import TurnPage from "../assets/turn.png";
import Deck from "./Deck";

export default function Flashcards({ questionId, setQuestionId }) {
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

  function nextQuestion() {
    setShowed(false);
    setCard("flashcard");
    setButtons("answer-buttons");
    setQuestionId(questionId + 1);
    setTurn("turn-page hidden");
  }

  console.log(Deck);
  console.log(questionId);

  return (
    <>
      {showed ? (
        <div className={card}>
          <div className="card-title">{Deck[questionId - 1].question}</div>
          <div className="card-counter">
            <p>
              {questionId}/{Deck.length}
            </p>
          </div>
          <div className="card-text">{Deck[questionId - 1].answer}</div>
          <div className={buttons}>
            <button
              type="button"
              className="single-button black"
              onClick={() => selectAnswer("black")}
            >
              Agora aprendi
            </button>
            <button
              type="button"
              className="single-button red"
              onClick={() => selectAnswer("red")}
            >
              Não lembrei
            </button>
            <button
              type="button"
              className="single-button green"
              onClick={() => selectAnswer("green")}
            >
              Lembrei com esforço
            </button>
            <button
              type="button"
              className="single-button yellow"
              onClick={() => selectAnswer("yellow")}
            >
              Zap!
            </button>
          </div>
          <img
            src={TurnPage}
            alt="turn-page"
            className={turn}
            onClick={nextQuestion}
          />
        </div>
      ) : (
        <div className={card}>
          <div className="card-counter">
            <p>
              {questionId}/{Deck.length}
            </p>
          </div>
          <div className="card-text">{Deck[questionId - 1].question}</div>
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
