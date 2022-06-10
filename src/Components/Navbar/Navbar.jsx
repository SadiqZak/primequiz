import React from "react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="container-nav">
      <div className="logo">
        <a href="../Index.html">AniQuiz</a>
      </div>
      <div className="nav-right">
        <div>
          <a className="action-icons" href="./rules.html">
            <i className="color-white fa-solid fa-circle-info"></i>
            <p className="color-white">Rules</p>
          </a>
        </div>
        <div>
          <a className="action-icons" href="./rules.html">
            <i className="color-white fa-solid fa-file-lines"></i>
            <p className="color-white">Results</p>
          </a>
        </div>
      </div>
    </nav>
  );
};
