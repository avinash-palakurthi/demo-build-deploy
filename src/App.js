import "./App.css";
import Counter from "./components/Counter";
import Greet from "./components/Greet";
import Lists from "./components/Lists";

function App({ countryName }) {
  return (
    <>
      <div className="app">
        <h2 className="topic">Components,Props</h2>
        <h1>Which {countryName} You Are Going To </h1>
        <Greet countryName={"Germany"} />
        <h2 className="topic">State,EventHandling</h2>
        <Counter />
        <Lists />
      </div>
    </>
  );
}

export default App;
