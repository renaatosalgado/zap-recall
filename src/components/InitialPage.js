import MainLogo from "../assets/logo.png";
import NextIcon from "../assets/next.png";

export default function InitialPage({
  setQuestionId,
  setClicked,
  zapQtt,
  setZapQtt,
}) {
  const chooseDeck = () => {
    setQuestionId(1);
    setClicked(true);
  };

  return (
    <>
      <div className="initial-page">
        <img src={MainLogo} alt="main-logo" />
        <input
          type="text"
          placeholder="Sua meta de zaps"
          value={zapQtt}
          onChange={(e) => setZapQtt(e.target.value)}
          required
        ></input>
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
