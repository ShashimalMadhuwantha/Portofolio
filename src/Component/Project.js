import React, { useEffect, useRef, useState } from 'react';
import './Project.css'; // Ensure the correct CSS is imported
import { FaGithub, FaLink } from 'react-icons/fa';
import project1 from './project1.png'; 
import project2 from './project2.png'; 
import project3 from './project3.png'; 

const Project = () => {
  const projectRef = useRef(null);
  const projectCardsRef = useRef([]); // To keep track of individual project cards
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage, setProjectsPerPage] = useState(3); // Default to 3 for desktop

  // Array of all projects
  const projects = [
    {
      id: 1,
      title: "QueuePro",
      description: "QueuePro is a virtual queue management system designed to streamline appointment scheduling and reduce wait times for service-oriented businesses. It allows users to join queues remotely, view real-time status updates, and receive notifications. The system enhances convenience and efficiency by integrating features like QR code scanning and a user-friendly interface. QueuePro improves customer experience by organizing service flows seamlessly.",
      img: project1,
      github: "https://github.com/username/queuepro",
      live: "https://www.queuepro.lk/"
    },
    {
      id: 2,
      title: "INVENTO",
      description: "Invento is a Java Swing-based inventory management system designed to simplify and automate the tracking and management of products. The application allows users to add, update, and delete product details, manage stock levels, and generate reports for inventory tracking. With a user-friendly interface, Invento provides real-time insights into inventory status, ensuring efficient management and minimizing errors. It is ideal for small to medium-sized businesses looking to streamline their inventory processes.",
      img: project2,
      github: "https://github.com/ShashimalMadhuwantha/INVENTO",
      live: "https://invento.com"
    },
    {
      id: 3,
      title: "Portfolio",
      description: "This portfolio features projects developed using the React.js library, showcasing my skills in modern web development. The projects include a range of applications designed with a focus on functionality and user experience. I use technologies such as React.js, JavaScript, and CSS to create responsive and interactive web applications.",
      img: project3,
      github: "https://github.com/ShashimalMadhuwantha/Portofolio",
      live: "https://myportfolio.com"
    }
  ];

  // Pagination logic
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Adjust the number of projects per page based on screen size
  useEffect(() => {
    const updateProjectsPerPage = () => {
      if (window.innerWidth <= 768) {
        setProjectsPerPage(1); // For mobile (or small screens)
      } else {
        setProjectsPerPage(3); // For desktop (or larger screens)
      }
    };

    // Set initial value based on the current screen size
    updateProjectsPerPage();

    // Add event listener to handle window resizing
    window.addEventListener('resize', updateProjectsPerPage);

    // Cleanup event listener when component unmounts
    return () => {
      window.removeEventListener('resize', updateProjectsPerPage);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  useEffect(() => {
    const projectElement = projectRef.current;
    const projectCards = projectCardsRef.current;

    // Intersection Observer for project container
    const projectObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('pop-up'); // Trigger pop-up animation for the projects container
            if (projectElement) {
              projectObserver.unobserve(projectElement); // Stop observing once animation is triggered
            }
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
            if (entry.target) {
              cardsObserver.unobserve(entry.target); // Stop observing once animation is triggered
            }
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the card is in view
    );

    // Observe each project card
    projectCards.forEach((card) => {
      if (card) {
        cardsObserver.observe(card);
      }
    });

    return () => {
      // Cleanup observers when component unmounts
      if (projectElement) {
        projectObserver.unobserve(projectElement); // Cleanup observer for project container
      }
      projectCards.forEach((card) => {
        if (card) {
          cardsObserver.unobserve(card); // Cleanup observer for project cards
        }
      });
    };
  }, [currentPage]); // Re-run effect when the page changes

  return (
    <section ref={projectRef} id='projects' className="project-container">
      <h2>My Projects</h2>
      <div className="project-cards">
        {currentProjects.map((project) => (
          <div key={project.id} ref={(el) => (projectCardsRef.current[project.id - 1] = el)} className="project-card">
            <img 
              src={project.img}
              alt={`${project.title} Banner`} 
              className="project-banner" 
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="view-more">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="view-more-link">
                <FaGithub /> GitHub
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="view-more-link">
                <FaLink /> View Live
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button 
            key={index} 
            onClick={() => handlePageChange(index + 1)} 
            className={currentPage === index + 1 ? 'active' : ''}>
            {index + 1}
          </button>
        ))}
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </section>
  );
};

export default Project;
