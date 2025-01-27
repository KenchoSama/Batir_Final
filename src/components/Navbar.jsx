import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
  ];

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {menuItems.map((item) => (
          <li key={item.name} className="navbar-item">
            <Link to={item.path} className="navbar-link">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
