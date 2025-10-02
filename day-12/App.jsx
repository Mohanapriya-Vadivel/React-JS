import React, { useState } from 'react';
import './App.css';
import InputComponent from './InputComponent';
import DisplayComponent from './DisplayComponent';

function App() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      <h1>Lifting State Up – Day 12</h1>
      <InputComponent inputValue={text} handleChange={handleChange} />
      <DisplayComponent inputValue={text} />
    </div>
  );
}

export default App;
