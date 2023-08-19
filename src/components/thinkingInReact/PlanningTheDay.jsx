import React, { useState } from "react";
import InputBox from "./InputBox";
import OutputBox from "./OutputBox";

function PlanningTheDay() {
  const [tasks, setTasks] = useState(["reading", "walking", "running"]);
  const getNewTaskFromInput = (newTask) => {
    // alert(task);
    const allTheTasksArr = [...tasks, newTask];
    setTasks(allTheTasksArr);
  };
  return (
    <div className="mt-5 text-center title">
      <h1>PlanningTheDay...</h1>
      <InputBox getNewTask={getNewTaskFromInput} />
      <OutputBox tasks={tasks} />
    </div>
  );
}

export default PlanningTheDay;
