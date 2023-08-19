import React, { useState } from "react";

function InputBox({ getNewTask }) {
  const [value, setValue] = useState("");
  console.log(value);
  const getTask = () => {
    // alert(value);
    getNewTask(value);
    setValue("");
  };
  return (
    <div className="input-box">
      <input
        type="text"
        placeholder="Enter Your Plan"
        className="me-2 p-2 ms-2"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="btn btn-primary" onClick={getTask}>
        Plan
      </button>
    </div>
  );
}

export default InputBox;
