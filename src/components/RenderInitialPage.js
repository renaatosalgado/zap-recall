import { useState } from "react";
import Game from "./Game";
import InitialPage from "./InitialPage";

export default function RenderInitialPage() {
  const [clicked, setClicked] = useState(false);
  const [questionId, setQuestionId] = useState(1);

  return (
    <>
      {clicked ? (
        <Game questionId={questionId} setQuestionId={setQuestionId} />
      ) : (
        <InitialPage setQuestionId={setQuestionId} setClicked={setClicked} />
      )}
    </>
  );
}
