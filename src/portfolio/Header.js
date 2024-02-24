// src/portfolio/Header.js
import React, {useState} from 'react';
import { animateScroll as scroll, scroller } from 'react-scroll';
// import { BrowserRouter as Router, Link } from 'react-router-dom';
import './Header.css';
import { Link } from 'react-router-dom';
import App from '../App';



 
const Header = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };



  return (

     <div className={`profile ${sidebarOpen ? 'sidebar-open' : ''}`}>
      <div className='profile-img'>
         
      </div>
      <div className='profile-name'>
        <h3>Yash Beniwal</h3>
        <div className='socialLinks'>
          <a href="#" className='link'>fb</a>
          <a href='#' className='link'>ln</a>
          <a href='#' className='link'>in</a>
        </div>        
      </div>
   
        <div className='Navigation'>
        <p className='nav-link' onClick={()=>scrollToSection("introduction")}>Introduction</p>
        <p className='nav-link' onClick={()=>scrollToSection("about")}>About</p>
        <p className='nav-link' onClick={()=>scrollToSection("skills")}>Skills</p>
        <p className='nav-link'onClick={()=>scrollToSection("services")}>Services</p>
        <p className='nav-link'onClick={()=>scrollToSection("contact")}>Contact</p>
        </div>
  

        <footer>
          <p>Design by<strong> Yash Beniwal</strong></p>
        </footer>
     
     </div>
);
}

export default Header;
 