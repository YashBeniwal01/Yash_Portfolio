import React from 'react';
import './Skills.css'; // Import the CSS file for styling
console.log(window.innerWidth);

function Skills() {
  return (
    
    <div className="skills-container">
      

      <h2 className = "skill-text">Skills</h2>
      <div className="skills-grid">
        <div className="skill">JAVA</div>
        <div className="skill">HTML</div>
        <div className="skill">CSS</div>
        <div className="skill">JavaScript</div>
        <div className="skill">MySQL</div>
        <div className="skill">MERN</div>
        <div className="skill">SQL</div>
        <div className="skill">Python</div>
      </div>
    </div>
  );
}

export default Skills;
