import MainLogo from "../assets/logo.png";
import NextIcon from "../assets/next.png";

export default function InitialPage({ setQuestionId, setClicked }) {
  const chooseDeck = () => {
    setQuestionId(1);
    setClicked(true);
  };

  return (
    <>
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
    </>
  );
}
