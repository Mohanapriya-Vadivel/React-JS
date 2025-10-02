import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams(); // Access URL parameter

  return (
    <div>
      <h2>User Page</h2>
      <p>Displaying details for User ID: <strong>{id}</strong></p>
    </div>
  );
}

export default User;
