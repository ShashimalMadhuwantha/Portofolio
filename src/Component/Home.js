import React from 'react';
import './Home.css'; // Import the CSS file for styling
import profileImage from './Landingimg.jpg'; // Profile image

const Home = () => {
  return (
    
    <div className="home-container">
      <div className="home-left">
        {/* Developer's Design Section */}
        <div className="developer-design">
          <div className="tech-design">
            <div className="code-box">
              <div className="code-line"></div>
              <div className="code-line"></div>
              <div className="code-line"></div>
            </div>
            <div className="circle"></div>
            <div className="circuit"></div>
          </div>
        </div>

        <div className="intro-text">
          <h1 className="intro-heading">Hi, I'm Shashimal</h1>
          <p className="intro-description">
            I'm a Software Engineering undergraduate with a passion for building clean, efficient, and modern web applications.
            Currently, I'm exploring the world of full-stack development, artificial intelligence, and problem-solving.
            Let's connect and create something amazing together!
          </p>
        </div>
      </div>

      {/* Right side - Profile image */}
      <div className="home-right">
        <div className="profile-image">
          <img src={profileImage} alt="Shashimal" />
        </div>
      </div>
    </div>
  );
};

export default Home;
