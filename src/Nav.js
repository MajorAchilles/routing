import React from 'react';
import './App.css';
import {Link} from "react-router-dom";

const navStyle= {
  color: "white"
};

function Nav() {
  return (
    <nav >
      <Link to="/" style={navStyle}><h3>Logo</h3></Link>
      <ul className={"nav-links"}>
        <Link to="/about" style={navStyle}><li>About</li></Link>
        <Link to="/facts" style={navStyle}><li>Facts</li></Link>
      </ul>
    </nav>
  );
}

export default Nav;
