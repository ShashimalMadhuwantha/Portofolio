import React, { useEffect, useRef } from 'react';
import './skill.css'; // Ensure the correct CSS is imported

const Skills = () => {
  const skillsRef = useRef(null);
  const skillCardsRef = useRef([]);

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
    <section ref={skillsRef} id='skills' className="skills-container">
      <h2>My Skills</h2>
      <div className="skills-cards">
        {/* HTML Skill */}
        <div ref={(el) => (skillCardsRef.current[0] = el)} className="skill-card">
          <h3>HTML</h3>
          <div className="skill-bar">
            <svg className="circular-bar" viewBox="0 0 120 120">
              <circle className="circle-background" cx="60" cy="60" r="50" />
              <circle
                className="circle-progress"
                cx="60"
                cy="60"
                r="50"
                strokeDasharray="314.1592654"
                strokeDashoffset="62.83" // Adjust to the percentage you want (for example 20%)
              />
            </svg>
            <div className="skill-level">80%</div>
          </div>
        </div>

        {/* CSS Skill */}
        <div ref={(el) => (skillCardsRef.current[1] = el)} className="skill-card">
          <h3>CSS</h3>
          <div className="skill-bar">
            <svg className="circular-bar" viewBox="0 0 120 120">
              <circle className="circle-background" cx="60" cy="60" r="50" />
              <circle
                className="circle-progress"
                cx="60"
                cy="60"
                r="50"
                strokeDasharray="314.1592654"
                strokeDashoffset="62.83" // Adjust to the percentage you want
              />
            </svg>
            <div className="skill-level">75%</div>
          </div>
        </div>

        {/* JavaScript Skill */}
        <div ref={(el) => (skillCardsRef.current[2] = el)} className="skill-card">
          <h3>JavaScript</h3>
          <div className="skill-bar">
            <svg className="circular-bar" viewBox="0 0 120 120">
              <circle className="circle-background" cx="60" cy="60" r="50" />
              <circle
                className="circle-progress"
                cx="60"
                cy="60"
                r="50"
                strokeDasharray="314.1592654"
                strokeDashoffset="62.83" // Adjust to the percentage you want
              />
            </svg>
            <div className="skill-level">80%</div>
          </div>
        </div>

        {/* PHP Skill */}
        <div ref={(el) => (skillCardsRef.current[3] = el)} className="skill-card">
          <h3>PHP</h3>
          <div className="skill-bar">
            <svg className="circular-bar" viewBox="0 0 120 120">
              <circle className="circle-background" cx="60" cy="60" r="50" />
              <circle
                className="circle-progress"
                cx="60"
                cy="60"
                r="50"
                strokeDasharray="314.1592654"
                strokeDashoffset="125.66" // Adjust to the percentage you want
              />
            </svg>
            <div className="skill-level">70%</div>
          </div>
        </div>

        {/* C# Skill */}
        <div ref={(el) => (skillCardsRef.current[4] = el)} className="skill-card">
          <h3>C#</h3>
          <div className="skill-bar">
            <svg className="circular-bar" viewBox="0 0 120 120">
              <circle className="circle-background" cx="60" cy="60" r="50" />
              <circle
                className="circle-progress"
                cx="60"
                cy="60"
                r="50"
                strokeDasharray="314.1592654"
                strokeDashoffset="125.66" // Adjust to the percentage you want
              />
            </svg>
            <div className="skill-level">60%</div>
          </div>
        </div>

        {/* Java Skill */}
        <div ref={(el) => (skillCardsRef.current[5] = el)} className="skill-card">
          <h3>Java</h3>
          <div className="skill-bar">
            <svg className="circular-bar" viewBox="0 0 120 120">
              <circle className="circle-background" cx="60" cy="60" r="50" />
              <circle
                className="circle-progress"
                cx="60"
                cy="60"
                r="50"
                strokeDasharray="314.1592654"
                strokeDashoffset="188.5" // Adjust to the percentage you want
              />
            </svg>
            <div className="skill-level">50%</div>
          </div>
        </div>

        {/* MySQL Skill */}
        <div ref={(el) => (skillCardsRef.current[6] = el)} className="skill-card">
          <h3>MySQL</h3>
          <div className="skill-bar">
            <svg className="circular-bar" viewBox="0 0 120 120">
              <circle className="circle-background" cx="60" cy="60" r="50" />
              <circle
                className="circle-progress"
                cx="60"
                cy="60"
                r="50"
                strokeDasharray="314.1592654"
                strokeDashoffset="188.5" // Adjust to the percentage you want
              />
            </svg>
            <div className="skill-level">50%</div>
          </div>
        </div>

        {/* React.js Skill */}
        <div ref={(el) => (skillCardsRef.current[7] = el)} className="skill-card">
          <h3>React.js</h3>
          <div className="skill-bar">
            <svg className="circular-bar" viewBox="0 0 120 120">
              <circle className="circle-background" cx="60" cy="60" r="50" />
              <circle
                className="circle-progress"
                cx="60"
                cy="60"
                r="50"
                strokeDasharray="314.1592654"
                strokeDashoffset="125.66" // Adjust to the percentage you want
              />
            </svg>
            <div className="skill-level">60%</div>
          </div>
        </div>

        {/* Node.js Skill */}
        <div ref={(el) => (skillCardsRef.current[8] = el)} className="skill-card">
          <h3>Node.js</h3>
          <div className="skill-bar">
            <svg className="circular-bar" viewBox="0 0 120 120">
              <circle className="circle-background" cx="60" cy="60" r="50" />
              <circle
                className="circle-progress"
                cx="60"
                cy="60"
                r="50"
                strokeDasharray="314.1592654"
                strokeDashoffset="188.5" // Adjust to the percentage you want
              />
            </svg>
            <div className="skill-level">50%</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
