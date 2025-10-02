import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // Function to handle input change
  const handleChange = (e) => {
    setName(e.target.value);
  };

  // Function to handle button click
  const handleClick = () => {
    setMessage(`Hello, ${name}! Welcome to React learning! 🎉`);
  };

  return (
    <div className="App">
      <h1>Event Handling – Day 5</h1>
      
      <input 
        type="text" 
        placeholder="Enter your name" 
        value={name} 
        onChange={handleChange} 
      />
      <button onClick={handleClick}>Greet Me</button>

      <p>{message}</p>
    </div>
  );
}

export default App;
