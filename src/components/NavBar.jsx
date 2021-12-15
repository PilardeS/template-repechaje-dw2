import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
    <Link to="/Post">Post</Link>
    <Link to="/About">Home</Link>
    <Link to="/Login">Login</Link>
    <Link to="/Register">Register</Link>
  </div>
);

export default Navbar;
