import React, { useContext } from "react";
import { UserContext } from "./UserContext";

function UserProfile() {
  const { state } = useContext(UserContext);

  return (
    <div>
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {state.name}</p>
      <p><strong>Role:</strong> {state.role}</p>
    </div>
  );
}

export default UserProfile;
