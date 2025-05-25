import React from 'react';
import logo from '../assets/logo.png';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">
      <img src={logo} alt="Sri Lanka Cricket" />
      <span style={{ fontWeight: 700, fontSize: '1.3rem', color: '#0057b8' }}>
        Sri Lanka Cricket
      </span>
    </div>
    <div className="navbar-links">
      <a href="#">HOME</a>
      <a href="#">INTERNATIONAL</a>
      <a href="#">DOMESTIC</a>
      <a href="#">NEWS</a>
      <a href="#">MEDIA</a>
      <a href="#">COACHING</a>
      <a href="#">GALLERY</a>
      <a href="#">ABOUT US</a>
    </div>
    <div className="navbar-search">
      <input type="text" placeholder="Search" />
    </div>
    <div className="navbar-actions">
      <button className="buy-btn">Buy Tickets</button>
      <button className="live-btn">Live</button>
      <span className="lang-btn">සිංහල</span>
    </div>
  </nav>
);

export default Navbar;
