import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <div className="nav-container">
        <input
          type="text"
          className="search-input"
          placeholder="Enter your search shoes."
        />
      </div>
    </nav>
  );
};

export default Nav;
