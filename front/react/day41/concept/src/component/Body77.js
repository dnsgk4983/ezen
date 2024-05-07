import { useState } from "react";
import "./Body.css";

function Body77() {
    const [score, setScore] = useState(0);
    const onIncrease = () => {
        setScore(score + 1);
    }
    const onDecrease = () => {
        setScore(score - 1);
    }
    return(
        <div className="body">
            <h2>{score}</h2>
            <button onClick={onIncrease}>크게</button>
            <button onClick={onDecrease}>작게</button>
        </div>
    )
}
export default Body77;