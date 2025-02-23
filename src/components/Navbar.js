import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="walou" ><h1>Chef's Guide <span className="icon">🍽️</span></h1></Link>
      </div>

      {/* Navbar Buttons */}
      <div className="navbar-buttons">
        <Link to="/favorites" className="favorites-link" onClick={toggleMenu}>
          ❤️<span className="span"> Favorites</span>
        </Link>
        <Link to="/grocery-list" className="grocery-link" onClick={toggleMenu}>
          🛒<span className="span"> Grocery List</span>
        </Link>
        <button onClick={toggleDarkMode} className="dark-mode-toggle">
          🌙<span className="span"> Dark Mode</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
