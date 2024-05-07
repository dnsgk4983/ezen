import { useState } from "react";
import "./Body.css";

function Body44() {
    const [text, setText] = useState("");

  const handleOnChange = (e) => {
    setText(e.target.value)
  }


  return (
    <div className="body">
    <input onChange={handleOnChange} />
    <div>{text}</div>
    </div>
  );
}

export default Body44;
