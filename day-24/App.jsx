import React from "react";
import "./App.css";
import { UserProvider } from "./UserContext";
import UserProfile from "./UserProfile";
import UpdateUser from "./UpdateUser";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <h1>Day 24 - Context + useReducer</h1>
        <UserProfile />
        <UpdateUser />
      </div>
    </UserProvider>
  );
}

export default App;
