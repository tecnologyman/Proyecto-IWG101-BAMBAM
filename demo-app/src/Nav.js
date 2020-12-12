import React from "react";
import './App.css';
import { Link } from "react-router-dom";
import logo from "./bambamiconopng.png";

function Nav() {
  const navStyle = {
    color: "white"
  };

  return (
    <nav>
        <img src={logo} 
        width="100" 
        height="65">
        </img>
        <ul className="Nav-links">
          <Link style={navStyle} to= "/">
            <li>Home</li>
          </Link>
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