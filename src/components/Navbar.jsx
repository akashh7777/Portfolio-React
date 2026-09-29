import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  // The nav links data — easy to update
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/skills", label: "Skills" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="navbar">
        {/* Logo / Name */}
        <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
          Akash H
        </NavLink>

        {/* Desktop Navigation Links */}
        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.path}>
              {/* NavLink automatically adds an "active" class when the route matches */}
              <NavLink
                to={link.path}
                className={({ isActive }) => (isActive ? "active-link" : "")}
                end={link.path === "/"}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          className="hamburger-btn"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          id="hamburger-btn"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) => (isActive ? "active-link" : "")}
            onClick={closeMenu}
            end={link.path === "/"}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </>
  );
}

export default Navbar;
