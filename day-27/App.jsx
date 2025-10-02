import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Team from "./Team";
import Company from "./Company";
import User from "./User";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Day 27 - Nested Routes</h1>
        <nav>
          <Link to="/" style={{ margin: "0 10px" }}>Home</Link>
          <Link to="/about" style={{ margin: "0 10px" }}>About</Link>
          <Link to="/contact" style={{ margin: "0 10px" }}>Contact</Link>
          <Link to="/user/1" style={{ margin: "0 10px" }}>User 1</Link>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="team" element={<Team />} /> {/* Nested */}
            <Route path="company" element={<Company />} /> {/* Nested */}
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:id" element={<User />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
