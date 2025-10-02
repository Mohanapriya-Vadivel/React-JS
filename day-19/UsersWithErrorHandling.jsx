import React, { useState, useEffect } from "react";
import axios from "axios";

function UsersWithErrorHandling() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Error:", err);
        setError("Failed to fetch users. Try again later.");
        setLoading(false);
      });
  }, []); // Runs once when mounted

  if (loading) {
    return <h3>Loading...</h3>;
  }

  if (error) {
    return <h3 style={{ color: "red" }}>{error}</h3>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Day 19 - API with Error Handling</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersWithE
