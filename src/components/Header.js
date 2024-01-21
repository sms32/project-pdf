// Header.js
import './Header.css';
import React from 'react';
import logo from './assets/logo.png';

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo" className="logo" />

      
      {/* You can add more header content, navigation links, etc. here */}
    </header>
  );
}

export default Header;
