import React from "react";
import list from "./lists.png";
function Lists() {
  const countries = ["India", "USA", "UK", "Germany", "France"];
  return (
    <>
      <div>
        <h1 className="title">Lists</h1>
        <div className="list">
          <div className="list-code">
            <h3>Countries-list</h3>
            {countries.map((item) => {
              return <li key={item}>{item} </li>;
            })}
          </div>
          <img src={list} alt="list" height={"500px"} />
        </div>
      </div>
    </>
  );
}

export default Lists;

//  <h2 className="about">Up to here we learned how to render lists</h2>;
