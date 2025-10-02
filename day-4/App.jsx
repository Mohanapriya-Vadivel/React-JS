import React, { useState } from 'react';
import './App.css';

function App() {
  // useState hook
  const [count, setCount] = useState(0);

  // Functions to update state
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="App">
      <h1>React Counter – Day 4</h1>
      <p>Current Count: {count}</p>
      <button onClick={increment}>Increment ➕</button>
      <button onClick={decrement}>Decrement ➖</button>
    </div>
  );
}

export default App;
