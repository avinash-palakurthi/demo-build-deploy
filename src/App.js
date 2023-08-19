import "./App.css";
import Counter from "./components/Counter";
import Greet from "./components/Greet";
import Lists from "./components/Lists";
import Topics from "./components/Topics";
import PlanningTheDay from "./components/thinkingInReact/PlanningTheDay";
import Todo from "./components/todoApp/Todo";
// import TodoList from "./components/todoList/TodoList";

let description = (
  <>
    <p className="description">
      <strong> React: </strong>it's a library it is built for changing the UI
      Efficiently
    </p>
    <p className="description">
      <strong>ReactDOM:</strong> is specifically for Browser , so it takes
      instructions from react and do the required changes in the UI
    </p>
  </>
);

function App({ countryName }) {
  return (
    <>
      <div className="app">
        <Topics topicName={"Components & Props"} />
        <h1>Which {countryName} You Are Going To </h1>
        <Greet countryName={"Germany"} />
        <div className="about-topics">{description}</div>
        <Topics topicName={"State & EventHandling"} />
        <Counter />
        <Lists />
        <Topics topicName={"Validation, Routing & Fetching "} />
        <Todo />
        <PlanningTheDay />
      </div>
    </>
  );
}

export default App;
