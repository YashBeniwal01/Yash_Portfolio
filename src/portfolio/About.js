import React from 'react';
import './About.css'; // Import the CSS file for styling

function About() {
  return (
    <div className='about-head'>
      <h1>About me</h1>
      <p>As a seasoned Software Developer, I thrive on translating complex concepts into elegant solutions. With a profound passion for coding and problem-solving, I've embarked on a journey to craft software that not only meets but exceeds expectations.</p>

    <div className="about-container">
      {/* <div className="about-left">        
        <div className='user-image'></div>
      </div> */}
      <div className="about-right"> 
      <h2>Full-Stack Developer</h2>
        <div className="details-container">
          <div className='left-details'>
            <div className='detail'>
              <p><strong>Birthdate:</strong> 19 March 2001</p>
              <p><strong>Email:</strong> beniwalyash35@gmail.com</p>
              <p><strong>phone:</strong> 6378920482</p>
              <p><strong>City:</strong> Jaipur, Rajasthan</p>
            </div>
          </div>
          <div className='right-details'>
            <div className='detail'>
              <p><strong>Degree:</strong> Becholar</p>
              <p><strong>Freelance:</strong> Available</p>
              <p><strong>Language:</strong> Hindi, English</p>
              <p><strong>Email:</strong> beniwalyash35@gmail.com</p>
            </div>
          </div>
        </div>

      </div>
    </div>
    </div>
  );
}

export default About;
