import React from 'react';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import { Link } from 'react-router-dom'

function Nav(){

    const navStyle = {
        color: 'white'
    };

  return(
    <nav>
        <h3>Logo</h3>
        <ul className="nav-links">
        <Link style={navStyle} to="/About">
            <li>About</li>
        </Link>
        <Link to="/Shop" style={navStyle}>
            <li >Shop</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;