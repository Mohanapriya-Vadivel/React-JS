import React from 'react';
import './App.css';

function App() {
  // JavaScript variables
  const name = "Priya";
  const age = 21;

  // Function
  const greet = () => "Good Morning! 🌞";

  return (
    <div className="App">
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old.</p>
      <p>{greet()}</p>
      <p>2 + 3 = {2 + 3}</p>
      <p>Today is {new Date().toDateString()}</p>
    </div>
  );
}

export default App;
