import React, { useState, useEffect } from "react";

function CounterWithDependency() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // Runs only when "count" changes
  useEffect(() => {
    console.log("useEffect called - count changed");
    document.title = `Count: ${count}`;
  }, [count]); // 👈 Dependency array

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Day 16 - useEffect Dependency Array</h2>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <br /><br />
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Name: {name}</p>
    </div>
  );
}

export default CounterWithDependency;
