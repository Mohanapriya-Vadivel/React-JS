import React, { useState, useEffect } from "react";
import axios from "axios";

// Install axios (optional, or use fetch):
// npm install axios

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetching API data
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []); // Empty array → runs only once (on mount)

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Day 18 - Fetching Data with useEffect</h2>
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

export default Users;
