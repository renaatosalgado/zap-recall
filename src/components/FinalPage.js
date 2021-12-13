import Party from "../assets/party.png";
import Sad from "../assets/sad.png";
import NextIcon from "../assets/next.png";
import { useState } from "react";
import RenderInitialPage from "./RenderInitialPage";

export default function FinalPage({ isSuccess }) {
  const [goBack, setGoBack] = useState(false);

  function backToHome() {
    setGoBack(true);
    window.location.reload();
  }

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
      {goBack ? (
        <RenderInitialPage />
      ) : isSuccess ? (
        <div className="final-page">
          <div className="message">
            <p>{finalPage[0].title}</p>
            <img src={finalPage[0].icon} alt="party-emoji" />
          </div>
          <p>{finalPage[0].message}</p>
          <button
            type="button"
            className="start-button"
            data-identifier="start-zap-recall"
            onClick={backToHome}
          >
            <span>Tentar novamente</span>
            <img src={NextIcon} alt="next" />
          </button>
        </div>
      ) : (
        <div className="final-page">
          <div className="message">
            <p>{finalPage[1].title}</p>
            <img src={finalPage[1].icon} alt="party-emoji" />
          </div>
          <p>{finalPage[1].message}</p>
          <button
            type="button"
            className="start-button"
            data-identifier="start-zap-recall"
            onClick={backToHome}
          >
            <span>Tentar novamente</span>
            <img src={NextIcon} alt="next" />
          </button>
        </div>
      )}
    </>
  );
}
