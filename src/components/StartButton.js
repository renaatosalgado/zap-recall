import NextIcon from "../assets/next.png"

export default function StartButton() {
    return(
        <>
            <div className="start-button">
                <p>Praticar React</p>
                <img src={NextIcon} alt="next" />
            </div>
        </>
    )
}