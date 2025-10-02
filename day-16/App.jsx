import React from "react";
import "./App.css";
import CounterWithDependency from "./CounterWithDependency";

function App() {
  return (
    <div className="App">
      <h1>React Hooks - useEffect with Dependencies</h1>
      <CounterWithDependency />
    </div>
  );
}

export default App;
