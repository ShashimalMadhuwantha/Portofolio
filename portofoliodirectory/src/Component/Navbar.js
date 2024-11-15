import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    if (id === 'home') {
      // Scroll to the top of the page for 'home' link
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Scroll to other sections on the page
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="brand-name">Shashimal Madhuwantha</div>
      <div className="nav-center">
        <nav className="nav">
          <ul className="nav-items">
            {/* 'Home' section scrolls to the top of the page */}
            <li>
              <a href="#home" onClick={() => scrollToSection('home')} className="nav-item">Home</a>
            </li>
            <li>
              <a href="#about" onClick={() => scrollToSection('about')} className="nav-item">About Me</a>
            </li>
            <li>
              <a href="#skill" onClick={() => scrollToSection('skills')} className="nav-item">Skills</a>
            </li>
            <li>
              <a href="#projects" onClick={() => scrollToSection('projects')} className="nav-item">Projects</a>
            </li>
            <li>
              <a href="#contact" onClick={() => scrollToSection('contact')} className="nav-item">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
