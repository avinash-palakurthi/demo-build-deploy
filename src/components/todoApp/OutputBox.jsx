import React from "react";

function OutputBox({ list }) {
  // let task = ["running", "walking", "watching", "reading"];
  return (
    <div className="output_container">
      <ul>
        {list.map((item, id) => {
          return (
            <li key={id} className="tasks">
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default OutputBox;
