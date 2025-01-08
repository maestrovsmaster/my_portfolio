import React from 'react';
import './Home.css';

const Home = ({ isDarkMode }) => {
  return (
    <section
      id="home"
      className={`home ${isDarkMode ? 'dark' : ''}`}
    >
      <div className="home-content">
        <h1>Welcome to Maestro Creations</h1>
        <p>Crafting the digital future</p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            🌐 Facebook
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            🌐 LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            🌐 GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
