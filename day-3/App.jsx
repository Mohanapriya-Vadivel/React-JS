import React from 'react';
import './App.css';
import Greeting from './Greeting'; // Import the component

function App() {
  return (
    <div className="App">
      <h1>My React App – Day 3</h1>
      {/* Using the Greeting component and passing props */}
      <Greeting name="Priya" />
      <Greeting name="Sowmya" />
      <Greeting name="Bhuvana" />
    </div>
  );
}

export default App;
