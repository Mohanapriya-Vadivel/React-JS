import React, { createContext, useState } from "react";

// Create Context
export const UserContext = createContext();

// Provider Component
export function UserProvider({ children }) {
  const [user, setUser] = useState({ name: "Priya", role: "Developer" });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
