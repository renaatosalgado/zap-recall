import { useState } from "react";
import Game from "./Game";
import InitialPage from "./InitialPage";

export default function RenderInitialPage() {
  const [clicked, setClicked] = useState(false);
  const [questionId, setQuestionId] = useState(1);
  const [zapQtt, setZapQtt] = useState("");

  return (
    <>
      {clicked ? (
        <Game
          questionId={questionId}
          setQuestionId={setQuestionId}
          zapQtt={zapQtt}
          setZapQtt={setZapQtt}
        />
      ) : (
        <InitialPage
          setQuestionId={setQuestionId}
          setClicked={setClicked}
          zapQtt={zapQtt}
          setZapQtt={setZapQtt}
        />
      )}
    </>
  );
}
