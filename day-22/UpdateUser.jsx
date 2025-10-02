import React, { useContext } from "react";
import { UserContext } from "./UserContext";

function UpdateUser() {
  const { setUser } = useContext(UserContext);

  return (
    <div>
      <h2>Update User</h2>
      <button
        onClick={() =>
          setUser({ name: "Priya", role: "Full-Stack Developer 🚀" })
        }
      >
        Promote User
      </button>
    </div>
  );
}

export default UpdateUser;
