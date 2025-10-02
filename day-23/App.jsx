import React from "react";
import "./App.css";
import CounterReducer from "./CounterReducer";

function App() {
  return (
    <div className="App">
      <h1>React Hooks - useReducer Example</h1>
      <CounterReducer />
    </div>
  );
}

export default App;
