import React, { useContext } from "react";
import { UserContext } from "./UserContext";

function UpdateUser() {
  const { dispatch } = useContext(UserContext);

  return (
    <div>
      <h2>Update User</h2>
      <button onClick={() => dispatch({ type: "PROMOTE" })}>
        Promote User
      </button>
      <button onClick={() => dispatch({ type: "RENAME", payload: "Priya K" })}>
        Rename User
      </button>
    </div>
  );
}

export default UpdateUser;
