import React, { useState } from "react";
import counter from "./counter.png";
function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div>
        <h1 className="title">Counter-App</h1>
        <div className="count">
          <div className="count1">
            <button onClick={increment}>+</button>
            <h2>{count}</h2>
            <button onClick={decrement}>-</button>
          </div>
          <img src={counter} alt="" height={"550px"} />
        </div>
        <h2 className="about">
          Up to here we learned creating the States, and EventHandling
        </h2>
      </div>
    </>
  );
}

export default Counter;
