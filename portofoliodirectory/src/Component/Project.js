import React, { useEffect, useRef } from 'react';
import './Project.css'; // Ensure the correct CSS is imported
import { FaGithub, FaLink } from 'react-icons/fa';
import project1 from './project1.png'; 
import project2 from './project2.png'; 
import project3 from './project3.png'; 

const Project = () => {
  const projectRef = useRef(null);
  const projectCardsRef = useRef([]);

  useEffect(() => {
    const projectElement = projectRef.current;
    const projectCards = projectCardsRef.current;

    // Intersection Observer for project container
    const projectObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('pop-up'); // Trigger pop-up animation for the projects container
            projectObserver.unobserve(entry.target); // Stop observing once animation is triggered
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    );

    if (projectElement) {
      projectObserver.observe(projectElement); // Start observing project container
    }

    // Intersection Observer for individual project cards
    const cardsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('pop-up'); // Trigger pop-up animation for individual project cards
            cardsObserver.unobserve(entry.target); // Stop observing once animation is triggered
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the card is in view
    );

    // Observe each project card
    projectCards.forEach((card) => {
      cardsObserver.observe(card);
    });

    return () => {
      if (projectElement) {
        projectObserver.unobserve(projectElement); // Cleanup observer for project container
      }
      projectCards.forEach((card) => {
        cardsObserver.unobserve(card); // Cleanup observer for project cards
      });
    };
  }, []);

  return (
    <section ref={projectRef} id='projects' className="project-container">
      <h2>My Projects</h2>
      <div className="project-cards">
        {/* Project Card 1 */}
        <div ref={(el) => (projectCardsRef.current[0] = el)} className="project-card">
          <img 
            src={project1}
            alt="Project One Banner" 
            className="project-banner" 
          />
          <h3>QueuePro</h3>
          <p>QueuePro is a virtual queue management system designed to streamline appointment scheduling and reduce wait times for service-oriented businesses. It allows users to join queues remotely, view real-time status updates, and receive notifications. The system enhances convenience and efficiency by integrating features like QR code scanning and a user-friendly interface. QueuePro improves customer experience by organizing service flows seamlessly.</p>
          <div className="view-more">
            <a href="https://github.com/username/queuepro" target="_blank" rel="noopener noreferrer" className="view-more-link">
              <FaGithub /> GitHub
            </a>
            <a href="https://www.queuepro.lk/" target="_blank" rel="noopener noreferrer" className="view-more-link">
              <FaLink /> View Live
            </a>
          </div>
        </div>

        {/* Project Card 2 */}
        <div ref={(el) => (projectCardsRef.current[1] = el)} className="project-card">
          <img 
            src={project2}
            alt="Project Two Banner" 
            className="project-banner" 
          />
          <h3>INVENTO</h3>
          <p>Invento is a Java Swing-based inventory management system designed to simplify and automate the tracking and management of products. The application allows users to add, update, and delete product details, manage stock levels, and generate reports for inventory tracking. With a user-friendly interface, Invento provides real-time insights into inventory status, ensuring efficient management and minimizing errors. It is ideal for small to medium-sized businesses looking to streamline their inventory processes.</p>
          <div className="view-more">
            <a href="https://github.com/ShashimalMadhuwantha/INVENTO" target="_blank" rel="noopener noreferrer" className="view-more-link">
              <FaGithub /> GitHub
            </a>
            <a href="https://invento.com" target="_blank" rel="noopener noreferrer" className="view-more-link">
              <FaLink /> View Live
            </a>
          </div>
        </div>

        {/* Project Card 3 */}
        <div ref={(el) => (projectCardsRef.current[2] = el)} className="project-card">
          <img 
            src={project3}
            alt="Project Three Banner" 
            className="project-banner" 
          />
          <h3>Portfolio</h3>
          <p>This portfolio features projects developed using the React.js library, showcasing my skills in modern web development. The projects include a range of applications designed with a focus on functionality and user experience. I use technologies such as React.js, JavaScript, and CSS to create responsive and interactive web applications.</p>
          <div className="view-more">
            <a href="https://github.com/ShashimalMadhuwantha/Portofolio" target="_blank" rel="noopener noreferrer" className="view-more-link">
              <FaGithub /> GitHub
            </a>
            <a href="https://myportfolio.com" target="_blank" rel="noopener noreferrer" className="view-more-link">
              <FaLink /> View Live
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
