import React from 'react';

function Child(props) {
  return <p>Message from Parent: {props.message}</p>;
}

function App() {
  const parentMessage = "Hello from Parent Component! 🌟";

  return (
    // Parent → Child (Passing Data via Props)
    <div className="App">
      <h1>Parent → Child Communication</h1>
      <Child message={parentMessage} />
    </div>
  );
}

export default App;
