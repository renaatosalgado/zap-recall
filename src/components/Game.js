import Flashcards from "./Flashcards";
import TopBar from "./TopBar";

export default function Game({ questionId, setQuestionId }) {
  return (
    <>
      <TopBar />
      <Flashcards questionId={questionId} setQuestionId={setQuestionId} />
    </>
  );
}
