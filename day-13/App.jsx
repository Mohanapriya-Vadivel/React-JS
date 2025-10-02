import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  // Dynamic event handler
  const handleClick = (type) => {
    if (type === "increment") setCount(count + 1);
    if (type === "decrement") setCount(count - 1);
    if (type === "reset") setCount(0);
    setMessage(`Last action: ${type}`);
  };

  return (
    <div className="App">
      <h1>Advanced Event Handling – Day 13</h1>
      <p>Count: {count}</p>
      <button onClick={() => handleClick("increment")}>Increment ➕</button>
      <button onClick={() => handleClick("decrement")}>Decrement ➖</button>
      <button onClick={() => handleClick("reset")}>Reset 🔄</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
