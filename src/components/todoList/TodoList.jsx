import React, { useState } from "react";

function TodoList() {
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);
  const handlerChange = (e) => {
    console.log(e.target.value);
    setActivity(e.target.value);
  };
  const addActivity = () => {
    // setListData([...listData, activity]);
    // console.log(listData);
    setListData((listData) => {
      const updatedList = [...listData, activity];
      console.log(updatedList);
      setActivity("");
      return updatedList;
    });
  };
  function removeActivity(i) {
    const updatedListData = listData.filter((element, index) => {
      return i !== index;
    });
    setListData(updatedListData);
  }
  return (
    <div className="container">
      <h1 className="heading">TODO-LIST</h1>
      <div className="input-area">
        <input
          type="text"
          className="text-area"
          placeholder="Enter your Activity"
          value={activity}
          onChange={handlerChange}
        />
        <button className="btn" onClick={addActivity}>
          ADD
        </button>
      </div>
      <div className="output-area">
        <h1 className="heading">Activity List </h1>
        {listData !== [] &&
          listData.map((item, id) => {
            return (
              <>
                <div className="items-list" key={item}>
                  <h2>{item}</h2>
                </div>
                <div className="btn-remove">
                  <button onClick={() => removeActivity()}>remove</button>{" "}
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
}

export default TodoList;
