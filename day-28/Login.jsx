import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setAuth }) {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim()) {
      setAuth(true);
      navigate("/dashboard");
    } else {
      alert("Enter a username");
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
