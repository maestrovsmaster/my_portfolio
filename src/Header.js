// src/Header.js
import React, { useState, useEffect } from "react";
import './Header.css';

const Header = ({ toggleTheme, isDarkMode }) => {

  const [activeLink, setActiveLink] = useState('#home'); // За замовчанням активний "About Me"

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header className={`header ${isDarkMode ? 'dark' : ''}`}>
      <div className="logo">Maestro Creations</div>
      <nav>
      <ul className="nav-links">
        <li>
            <a
              href="#home"
              className={activeLink === '#home' ? 'active' : ''}
              onClick={() => handleLinkClick('#home')}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={activeLink === '#about' ? 'active' : ''}
              onClick={() => handleLinkClick('#about')}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#technologies"
              className={activeLink === '#technologies' ? 'active' : ''}
              onClick={() => handleLinkClick('#technologies')}
            >
              Technologies
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={activeLink === '#projects' ? 'active' : ''}
              onClick={() => handleLinkClick('#projects')}
            >
              My Projects
            </a>
          </li>
          <li>
            <a
              href="#social"
              className={activeLink === '#social' ? 'active' : ''}
              onClick={() => handleLinkClick('#social')}
            >
              My Social Pages
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeLink === '#contact' ? 'active' : ''}
              onClick={() => handleLinkClick('#contact')}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <button className="theme-toggle" onClick={toggleTheme}>
        {isDarkMode ? '🌙' : '🌞'}
      </button>
    </header>
  );
};
export default Header;
