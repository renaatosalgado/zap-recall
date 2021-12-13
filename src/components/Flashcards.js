import { useState } from "react";
import TurnPage from "../assets/turn.png";
import Deck from "./Deck";
import FinalPage from "./FinalPage";

export default function Flashcards({
  questionId,
  setQuestionId,
  zapQtt,
  setZapQtt,
}) {
  const [showed, setShowed] = useState(false);
  const [card, setCard] = useState("flashcard");
  const [buttons, setButtons] = useState("answer-buttons");
  const [turn, setTurn] = useState("turn-page hidden");
  const [endGame, setEndGame] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [typeAnswer, setTypeAnswer] = useState([]);
  const [isZap, setIsZap] = useState([]);

  let ZAPS = [];

  function showAnswer() {
    setShowed(true);
  }

  function selectAnswer(color, isCorrect, hasZap) {
    setButtons("hidden");
    setCard(`flashcard ${color}`);
    setTurn("turn-page");
    setTypeAnswer([...typeAnswer, isCorrect]);
    setIsZap([...isZap, hasZap]);
  }

  function nextQuestion() {
    if (Deck.length === typeAnswer.length) {
      setEndGame(true);

      const filteredZaps = isZap.filter((zap) => zap === true);

      ZAPS = filteredZaps;      

      if (!typeAnswer.includes(false) && ZAPS.length >= zapQtt) {
        setIsSuccess(true);
      }
    } else {
      setShowed(false);
      setCard("flashcard");
      setButtons("answer-buttons");
      setQuestionId(questionId + 1);
      setTurn("turn-page hidden");
    }
  }

  return (
    <>
      {endGame ? (
        isSuccess ? (
          <FinalPage isSuccess={true} />
        ) : (
          <FinalPage isSuccess={false} />
        )
      ) : showed ? (
        <div className={card} data-identifier="flashcard">
          <div className="card-title">{Deck[questionId - 1].question}</div>
          <div className="card-counter" data-identifier="counter">
            {questionId}/{Deck.length}
          </div>
          <div className="card-text">{Deck[questionId - 1].answer}</div>
          <div className={buttons}>
            <button
              type="button"
              className="single-button black"
              onClick={() => selectAnswer("black", true, false)}
            >
              Agora aprendi
            </button>
            <button
              type="button"
              className="single-button red"
              onClick={() => selectAnswer("red", false, false)}
            >
              Não lembrei
            </button>
            <button
              type="button"
              className="single-button green"
              onClick={() => selectAnswer("green", true, false)}
            >
              Lembrei com esforço
            </button>
            <button
              type="button"
              className="single-button yellow"
              onClick={() => selectAnswer("yellow", true, true)}
            >
              Zap!
            </button>
          </div>
          <img
            src={TurnPage}
            alt="turn-page"
            className={turn}
            onClick={nextQuestion}
            data-identifier="arrow"
          />
        </div>
      ) : (
        <div className={card} data-identifier="flashcard">
          <div className="card-counter" data-identifier="counter">
            {questionId}/{Deck.length}
          </div>
          <div className="card-text">{Deck[questionId - 1].question}</div>
          <img
            src={TurnPage}
            alt="turn-page"
            className="turn-page"
            onClick={showAnswer}
            data-identifier="arrow"
          />
        </div>
      )}
    </>
  );
}
