import React, { useState } from "react";

function InputBox({ newTask }) {
  const [valueOfInput, setValueOfInput] = useState("");

  const setInput = (e) => {
    setValueOfInput(e.target.value);
  };

  const addTask = () => {
    // console.log("added task");
    console.log("added in inputbox", valueOfInput);
    newTask(valueOfInput);
    setValueOfInput("");
  };

  return (
    <div className="input_container">
      <input type="text" value={valueOfInput} onChange={setInput}></input>
      <button onClick={addTask}>+</button>
    </div>
  );
}

export default InputBox;
