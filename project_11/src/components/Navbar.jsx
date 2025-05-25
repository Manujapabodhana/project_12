import React, { useState } from 'react';
import logo from '../assets/logo.jpg';
import '../App.css'; // Ensure CSS is imported

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState('');

  const handleDropdown = (name) => setDropdown(name);
  const closeDropdown = () => setDropdown('');

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Sri Lanka Cricket" />
        <span className="navbar-title">Sri Lanka Cricket</span>
      </div>
      <div className={`navbar-links${menuOpen ? ' open' : ''}`}>
        <a href="#">HOME</a>
        <div
          className="dropdown"
          onMouseEnter={() => handleDropdown('international')}
          onMouseLeave={closeDropdown}
        >
          <a href="#">INTERNATIONAL</a>
          {dropdown === 'international' && (
            <div className="dropdown-content">
              <a href="#">Men's</a>
              <a href="#">Women's</a>
              <a href="#">Fixtures</a>
            </div>
          )}
        </div>
        <div
          className="dropdown"
          onMouseEnter={() => handleDropdown('domestic')}
          onMouseLeave={closeDropdown}
        >
          <a href="#">DOMESTIC</a>
          {dropdown === 'domestic' && (
            <div className="dropdown-content">
              <a href="#">Clubs</a>
              <a href="#">Tournaments</a>
            </div>
          )}
        </div>
        <a href="#">NEWS</a>
        <div
          className="dropdown"
          onMouseEnter={() => handleDropdown('media')}
          onMouseLeave={closeDropdown}
        >
          <a href="#">MEDIA</a>
          {dropdown === 'media' && (
            <div className="dropdown-content">
              <a href="#">Photos</a>
              <a href="#">Videos</a>
              <a href="#">Press</a>
            </div>
          )}
        </div>
        <a href="#">COACHING</a>
        <a href="#">GALLERY</a>
        <div
          className="dropdown"
          onMouseEnter={() => handleDropdown('about')}
          onMouseLeave={closeDropdown}
        >
          <a href="#">ABOUT US</a>
          {dropdown === 'about' && (
            <div className="dropdown-content">
              <a href="#">History</a>
              <a href="#">Contact</a>
              <a href="#">Management</a>
            </div>
          )}
        </div>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search" />
      </div>
      <div className="navbar-actions">
        <button className="buy-btn">Buy Tickets</button>
        <button className="live-btn">Live</button>
        <span className="lang-btn">සිංහල</span>
      </div>
      <div className="navbar-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
