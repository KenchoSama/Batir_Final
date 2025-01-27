import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the associated CSS file

const defaultItems = ["about", "projects", "certificates"];

const Navbar = ({ items = defaultItems }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="navbar">
        <ul className="navbar-list">
          {items.map((item) => (
            <li key={item} className="navbar-item">
              <Link to={`/${item}`} className="navbar-link">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
};

export default Navbar;
