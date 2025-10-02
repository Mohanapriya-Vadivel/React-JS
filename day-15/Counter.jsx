import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // useEffect runs after every render (by default)
  useEffect(() => {
    console.log("Count updated:", count);
    document.title = `Count: ${count}`; // Updates page title
  });

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Day 15 - useEffect Hook</h2>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;
