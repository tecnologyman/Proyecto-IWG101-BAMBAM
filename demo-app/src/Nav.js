import React from "react";
import './App.css';
import { Link } from "react-router-dom"

function Nav() {
  const navStyle = {
    color: "white"
  };

  return (
    <nav>
        <h3>Logo</h3>
        <ul className="Nav-links">
          <Link style={navStyle} to= "/tiendas">
            <li>Tiendas</li>
          </Link>
          <Link style={navStyle} to= "/about">
            <li>About</li>
          </Link>
        </ul>
    </nav>
  );
}

export default Nav;