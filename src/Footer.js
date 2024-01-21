// Footer.js
import './footer.css';
import React from 'react';
import logo2 from './assets/logo2.jpeg';

const Footer = () => {
  return (
    <footer className='footer'>
      <div class="logo">
      <img src={logo2} alt="Logo2" className="logo" />
      </div>
      <p>&copy; 2024 <br></br>KARUNYA <br></br> INSTITUE OF TECHNOLOGY AND SCIENCES.<br></br> All rights reserved.</p>

    </footer>
  );
};

export default Footer;
