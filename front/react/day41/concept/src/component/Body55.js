import { useState } from "react";
import "./Body.css";

function Body55() {
    const [text, setText] = useState("");

  const handleOnChange = (e) => {
    console.log(e.target.value)
    setText(e.target.value)
  }


  return (
    <div className="body">
<select value={text} onChange={handleOnChange}>
<option key={"1번"}>1번</option>
<option key={"2번"}>2번</option>
<option key={"3번"}>3번</option>
</select>
    </div>
  );
}

export default Body55;
