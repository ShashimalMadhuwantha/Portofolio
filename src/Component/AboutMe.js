import React, { useEffect, useRef } from 'react';
import './AboutMe.css'; // Ensure the CSS file is imported for styling

const AboutMe = () => {
  const aboutRef = useRef(null);
  const educationRef = useRef(null);

  useEffect(() => {
    const currentAboutRef = aboutRef.current;
    const currentEducationRef = educationRef.current;

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (currentAboutRef) {
      observer.observe(currentAboutRef);
    }

    if (currentEducationRef) {
      observer.observe(currentEducationRef);
    }

    return () => {
      if (currentAboutRef) {
        observer.unobserve(currentAboutRef);
      }
      if (currentEducationRef) {
        observer.unobserve(currentEducationRef);
      }
    };
  }, []);

  return (
    <section id="about" ref={aboutRef} className="about-container">
      {/* About Me Section */}
      <div className="about-me">
        <h2 className="about-heading">ABOUT ME</h2>
        <div className="about-content">
          <div className="about-details">
            <ul>
              <li><strong>Full Name:</strong> Shashimal Madhuwantha Nanayakkara</li>
              <li><strong>Age:</strong> 22</li>
              <li><strong>Profession:</strong> Backend Developer, Software Engineering Undergraduate</li>
            </ul>
          </div>
          <div className="about-summary">
            <p>
              I am passionate about building efficient, modern applications, solving problems, and creating meaningful digital experiences. 
              I am always eager to learn new skills and grow in the tech world. Let's connect and create something amazing together!
            </p>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="education" ref={educationRef}>
        <h3 className="education-heading">EDUCATION</h3>
        <ul className="education-details">
          <li><strong>Diploma in Software Engineering</strong> National Institute of Business Management (2023 - 2024)</li>
          <li><strong>Higher Diploma in Software Engineering</strong> National Institute of Business Management (2024 - Present)</li>
        </ul>
      </div>

      {/* Download CV Button */}
      <div className="download-cv">
        <a href="cv1.pdf" download="Shashimal_Madhuwantha_CV" className="download-btn">
          Download CV
        </a>
      </div>
    </section>
  );
};

export default AboutMe;
