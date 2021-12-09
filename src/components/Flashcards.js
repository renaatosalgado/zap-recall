import TurnPage from "../assets/turn.png";

export default function Flashcards() {
  return (
    <div className="flashcard">
      <div className="card-counter">
        <p>1/8</p>
      </div>
      <div className="card-question">O que é JSX?</div>
      <img src={TurnPage} alt="turn-page" className="turn-page" />
    </div>
  );
}
