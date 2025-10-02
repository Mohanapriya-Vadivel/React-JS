import React, { createContext, useReducer } from "react";

// Initial state
const initialState = { name: "Priya", role: "Developer" };

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case "PROMOTE":
      return { ...state, role: "Full-Stack Developer 🚀" };
    case "RENAME":
      return { ...state, name: action.payload };
    default:
      return state;
  }
}

// Create Context
export const UserContext = createContext();

// Provider Component
export function UserProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}
