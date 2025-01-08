import React from "react";
import "./AboutMe.css"; 

const AboutMe = ({ isDarkMode }) => {
  return (
    <section id="about" className={`about-section ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="about-header">
        <h2>About Me</h2>
        <p>
          A bit about me
        </p>
      </div>

      <div className="about-content">
        <p>
          I'm a self-taught web developer and Mobile App Developer with experience in designing new features from ideation to production, implementation of wireframes and design flows into high-performance software applications. I take into consideration the user experience while writing reusable and efficient code. I passionately combine good design, technology, and innovation in all my projects, which I like to accompany from the first idea to release. Currently, I'm focused on the backend development.
        </p>
        <p>
          <strong>Technologies and Tools</strong>
        </p>
        <p>
          Using a combination of cutting-edge technologies and reliable open-source software I build user-focused, performant apps and websites for smartphones, tablets, and desktops.
        </p>
      </div>

      <div className="about-skills">
        <div className="skill-card">
          <i className="icon">🔧</i>
          <span>Backend</span>
        </div>
        <div className="skill-card">
          <i className="icon">📱</i>
          <span>Mobile App</span>
        </div>
        <div className="skill-card">
          <i className="icon">🌐</i>
          <span>Web Development</span>
        </div>
        <div className="skill-card">
          <i className="icon">🚀</i>
          <span>Design</span>
        </div>
        <div className="skill-card">
          <i className="icon">⚙️</i>
          <span>DevOps</span>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
