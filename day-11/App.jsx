import React, { useRef } from 'react';
import './App.css';

function App() {
  // Create a reference for the input element
  const nameInputRef = useRef();

  // Handle button click
  const handleClick = () => {
    alert(`Hello, ${nameInputRef.current.value}! 👋`);
    nameInputRef.current.value = ""; // Clear input after alert
  };

  return (
    <div className="App">
      <h1>Uncontrolled Component – Day 11</h1>
      <input 
        type="text" 
        placeholder="Enter your name" 
        ref={nameInputRef} 
      />
      <button onClick={handleClick}>Greet Me</button>
    </div>
  );
}

export default App;
