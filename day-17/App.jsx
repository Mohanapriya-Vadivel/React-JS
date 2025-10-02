import React, { useState } from "react";
import "./App.css";
import Timer from "./Timer";

function App() {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <div className="App">
      <h1>React Hooks - Cleanup with useEffect</h1>
      <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? "Stop Timer" : "Start Timer"}
      </button>
      {showTimer && <Timer />}
    </div>
  );
}

export default App;
