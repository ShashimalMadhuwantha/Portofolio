import React, { useEffect, useRef } from 'react';
import './skill.css'; // Ensure the correct CSS is imported

const Skills = () => {
  const skillsRef = useRef(null);
  const skillCardsRef = useRef([]);

  // Define the skill levels with PHP and Java being higher
  const skillLevels = [
    80, // HTML
    85, // CSS
    90, // JavaScript
    95, // PHP (higher)
    95, // C# (higher)
    92, // Java (higher)
    80, // MySQL
    88, // React.js
    85, // Node.js
  ];

  useEffect(() => {
    const skillsElement = skillsRef.current;
    const skillCards = skillCardsRef.current;

    // Intersection Observer for skills container
    const skillsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('pop-up'); // Trigger pop-up animation for the skills container
            skillsObserver.unobserve(entry.target); // Stop observing once animation is triggered
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    );

    if (skillsElement) {
      skillsObserver.observe(skillsElement); // Start observing skills container
    }

    // Intersection Observer for individual skill cards
    const cardsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('pop-up'); // Trigger pop-up animation for individual skill cards
            cardsObserver.unobserve(entry.target); // Stop observing once animation is triggered
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the card is in view
    );

    // Observe each skill card
    skillCards.forEach((card) => {
      cardsObserver.observe(card);
    });

    return () => {
      if (skillsElement) {
        skillsObserver.unobserve(skillsElement); // Cleanup observer for skills container
      }
      skillCards.forEach((card) => {
        cardsObserver.unobserve(card); // Cleanup observer for skill cards
      });
    };
  }, []);

  return (
    <section ref={skillsRef} id="skills" className="skills-container">
      <h2>My Skills</h2>
      <div className="skills-cards">
        {/* Skill Cards for HTML, CSS, JS, PHP, C#, Java, MySQL, React, Node */}
        {["HTML", "CSS", "JavaScript", "PHP", "C#", "Java", "MySQL", "React.js", "Node.js"].map((skill, index) => (
          <div key={index} ref={(el) => (skillCardsRef.current[index] = el)} className="skill-card">
            <h3>{skill}</h3>
            <div className="skill-bar">
              <svg className="circular-bar" viewBox="0 0 120 120">
                <circle className="circle-background" cx="60" cy="60" r="50" />
                <circle
                  className="circle-progress"
                  cx="60"
                  cy="60"
                  r="50"
                  strokeDasharray="314.1592654"
                  strokeDashoffset={(314.1592654 * (100 - skillLevels[index])) / 100} // Updated calculation based on skillLevels array
                />
              </svg>
              <div className="skill-level">{skillLevels[index]}%</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

