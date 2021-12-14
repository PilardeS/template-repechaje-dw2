import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
    <Link to="/Register">
      Register
    </Link>
    <Link to="/About">
      Home
    </Link>
    <Link to="/Login">
      Login
    </Link>
  </div>
);

export default Navbar;
