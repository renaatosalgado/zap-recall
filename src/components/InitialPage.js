import MainLogo from "../assets/logo.png";
import NextIcon from "../assets/next.png";
import { useState } from "react";
import Game from "./Game";

export default function InitialPage() {
  const [clicked, setClicked] = useState(false);

  const chooseDeck = () => {
    setClicked(true);
  };

  return (
    <>
      {clicked ? (
        <Game />
      ) : (
        <div className="initial-page">
          <img src={MainLogo} alt="main-logo" />
          <button
            type="button"
            className="start-button"
            data-identifier="start-zap-recall"
            onClick={chooseDeck}
          >
            <p>Praticar React</p>
            <img src={NextIcon} alt="next" />
          </button>
        </div>
      )}
    </>
  );
}
