import React from 'react';
import './App.css';
import UserCard from './UserCard';

function App() {
  return (
    <div className="App">
      <h1>Props in Depth – Day 8</h1>
      <UserCard name="Priya" age={21} city="Tirupur" />
      <UserCard name="Sowmya" age={22} city="Coimbatore" />
      <UserCard name="Bhuvana" age={23} city="Chennai" />
    </div>
  );
}

export default App;
