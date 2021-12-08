import MainLogo from "../assets/logo.png"
import StartButton from "./StartButton"

export default function InitialPage() {
    return(
        <>
            <div className="initial-page">
                <img src={MainLogo} alt="main-logo"/>
                <StartButton />
            </div>
        </>
    )
}