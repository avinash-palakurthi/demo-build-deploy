import React from "react";

function OutputBox({ tasks }) {
  return (
    <div className="output-box">
      <ul className=" list-group ">
        {tasks.map((item, id) => {
          return <h2 key={id}>{item}</h2>;
        })}
      </ul>
    </div>
  );
}

export default OutputBox;
