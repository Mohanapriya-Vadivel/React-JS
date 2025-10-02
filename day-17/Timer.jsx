import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log("Timer started");

    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // Cleanup function (runs when component unmounts)
    return () => {
      clearInterval(interval);
      console.log("Timer stopped");
    };
  }, []); // Runs only once on mount

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Day 17 - useEffect Cleanup</h2>
      <h3>Seconds: {seconds}</h3>
    </div>
  );
}

export default Timer;
