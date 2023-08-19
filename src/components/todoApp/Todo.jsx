import React, { useState } from "react";
import InputBox from "./InputBox";
import OutputBox from "./OutputBox";

const Todo = () => {
  const [task, setTask] = useState([]);

  const acceptNewTask = (tasks) => {
    let newTaskArray = [...task, tasks];
    setTask(newTaskArray);
  };
  return (
    <div className="todo">
      <h1 className="title">TODO APP</h1>
      <InputBox newTask={acceptNewTask} />
      <OutputBox list={task} />
    </div>
  );
};

export default Todo;
