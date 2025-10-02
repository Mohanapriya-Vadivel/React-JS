import React, { useState } from 'react';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to toggle login state
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="App">
      <h1>Conditional Rendering – Day 6</h1>
      
      <button onClick={toggleLogin}>
        {isLoggedIn ? "Logout 🔓" : "Login 🔒"}
      </button>

      {isLoggedIn ? (
        <p>Welcome back, Priya! You are logged in. 🎉</p>
      ) : (
        <p>Please log in to continue. ❌</p>
      )}
    </div>
  );
}

export default App;
