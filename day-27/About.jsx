import React from "react";
import { Link, Outlet } from "react-router-dom";

function About() {
  return (
    <div>
      <h2>About Page</h2>
      <nav>
        <Link to="team" style={{ margin: "0 10px" }}>Team</Link>
        <Link to="company" style={{ margin: "0 10px" }}>Company</Link>
      </nav>
      <hr />
      <Outlet /> {/* Renders nested routes */}
    </div>
  );
}

export default About;
