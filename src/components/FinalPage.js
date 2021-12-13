import Party from "../assets/party.png";
import Sad from "../assets/sad.png";

export default function FinalPage({ isSuccess }) {
  const finalPage = [
    {
      title: "PARABÉNS!",
      icon: Party,
      message: "Você não esqueceu de nenhum flashcard!",
    },
    {
      title: "Putz..",
      icon: Sad,
      message: `Você esqueceu alguns flashcards..
      Não desanime! Na próxima você consegue!`,
    },
  ];
  return (
    <>
      {isSuccess ? (
        <div className="final-page">
          <div className="message">
            <p>{finalPage[0].title}</p>
            <img src={finalPage[0].icon} alt="party-emoji" />
          </div>
          <p>{finalPage[0].message}</p>
        </div>
      ) : (
        <div className="final-page">
          <div className="message">
            <p>{finalPage[1].title}</p>
            <img src={finalPage[1].icon} alt="party-emoji" />
          </div>
          <p>{finalPage[1].message}</p>
        </div>
      )}
    </>
  );
}
