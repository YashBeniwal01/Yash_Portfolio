import React, { useState, useEffect } from 'react';
import './introduction.css'; // Import the CSS file for styling
import { BrowserRouter as Router, Link } from 'react-router-dom';
import App from '../App';
import { animateScroll as scroll, scroller } from 'react-scroll';

function Introduction() {
  const [role, setRole] = useState('Freelancer');
  const username = 'Yash Beniwal'; // Replace with the actual user's name

  // Toggle between "Freelancer" and "Developer" every 2 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setRole(prevRole => prevRole === 'Freelancer' ? 'Developer' : 'Freelancer');
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  const scrollToSection = (sectionId) => {
    scroller.scrollTo(sectionId, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <div className="top-page-container">

      <div className="background-image">
      </div>

      <div className="content">
        <h1>{username}</h1>
        <p>I'm {role}</p>
      </div>
    </div>
  );
}

export default Introduction;
