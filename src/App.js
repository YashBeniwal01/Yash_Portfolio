import React from 'react';
import { BrowserRouter as Router, Link, Routes } from 'react-router-dom';
import Skills from './portfolio/Skills';
import Introduction from './portfolio/Introduction';
import About from './portfolio/About';
import Header from './portfolio/Header';
import Services from './portfolio/Services';
import Contact from './portfolio/Contact';
import './App.css';


function App() {
  return (
   
    <div className="app">

    <div className="left-column">
      <div className='left-content'>
        <Header/>
      </div>       
    </div>

    <div className='right-column'>
     <section id = "introduction">
                <Introduction/>
              </section>
        

    <div className='right-content'>
        <section id= "about">
          <About />
        </section>

        <section id = "skills">
          <Skills/>
        </section>
        
        <section id = "services">
          <Services/>
          </section>

        <section id = "contact">
          <Contact/>
        </section>
      </div>
    </div>
    
    </div>
 
    
  );
}

export default App;
 