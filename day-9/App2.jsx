import React, { useState } from 'react';

function Child({ sendDataToParent }) {
  return (
    <div>
      <button onClick={() => sendDataToParent("Hello from Child! 🎉")}>
        Send Message to Parent
      </button>
    </div>
  );
}

function App2() {
  const [message, setMessage] = useState("");

  const handleChildMessage = (data) => {
    setMessage(data);
  };

  return (
    // Child → Parent (Using Callback Functions)
    <div className="App">
      <h1>Child → Parent Communication</h1>
      <Child sendDataToParent={handleChildMessage} />
      <p>Message received from child: {message}</p>
    </div>
  );
}

export default App2;
