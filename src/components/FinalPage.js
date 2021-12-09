import Party from "../assets/party.png";
import Sad from "../assets/sad.png";

export default function FinalPage() {
  return (
    <>
      <div className="final-page">
        <div className="message">
          <p>PARABÉNS!</p>
          <img src={Party} alt="party-emoji" />
        </div>
        <p>Você não esqueceu de nenhum flashcard!</p>
      </div>
    </>
  );
}
