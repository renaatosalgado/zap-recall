import { useState } from "react";
import MiniLogo from "../assets/logo-mini.png";
import InitialPage from "./InitialPage";

export default function TopBar() {
  const [goBack, setGoBack] = useState(false);

  function backToHome() {
    setGoBack(true);
    window.location.reload();
  }

  return (
    <>
      {goBack ? (
        <InitialPage />
      ) : (
        <div className="mini-logo" onClick={backToHome}>
          <img src={MiniLogo} alt="mini-logo" />
        </div>
      )}
    </>
  );
}
