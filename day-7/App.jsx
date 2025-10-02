import React from 'react';
import './App.css';

function App() {
  const fruits = ["Mango", "Apple", "Banana", "Orange", "Grapes"];

  return (
    <div className="App">
      <h1>Lists & Keys – Day 7</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li> // Using key for each list item
        ))}
      </ul>
    </div>
  );
}

export default App;
