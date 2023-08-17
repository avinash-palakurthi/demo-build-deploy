import React from "react";

function Greet({ countryName, propsName }) {
  return (
    <>
      <div>
        <h1>Welcome To {countryName}</h1>
      </div>
      <h2 className="about">
        Up to here we learned creating the Components , and using Props (sending
        values ){" "}
      </h2>
    </>
  );
}

export default Greet;
