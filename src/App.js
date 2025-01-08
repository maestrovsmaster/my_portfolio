import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Home from './home/Home';
import AboutMe from './about/AboutMe';
import Technologies from './Technologies';
import Projects from './Projects';
import SocialLinks from './SocialLinks';
import ContactForm from './ContactForm';
import { app, analytics } from './firebase'; 

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark', !isDarkMode); 
    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      document.body.classList.add(savedTheme);
    }
  }, []);

  return (
    <div className="App">
      <div className="App">
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Home isDarkMode={isDarkMode}/>
      <AboutMe />
      <Technologies />
      <Projects />
      <SocialLinks />
      <ContactForm />
    </div>
    </div>
  );
}

export default App;
