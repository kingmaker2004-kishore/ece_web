import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ cartItems }) => {
  return (
    <header>
      <h1>Flopkart</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cartItems.length})</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
};

export default Header;
