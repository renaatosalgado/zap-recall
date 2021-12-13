import Flashcards from "./Flashcards";
import TopBar from "./TopBar";

export default function Game({ questionId, setQuestionId, zapQtt, setZapQtt }) {
  return (
    <>
      <TopBar />
      <Flashcards
        questionId={questionId}
        setQuestionId={setQuestionId}
        zapQtt={zapQtt}
        setZapQtt={setZapQtt}
      />
    </>
  );
}
