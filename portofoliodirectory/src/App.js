// App.js
import React from 'react';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import AboutMe from './Component/AboutMe';
import Skill from './Component/skill'; // Import the Skill component
import Project from './Component/Project';
import './App.css'; // Add global styles like smooth scrolling

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutMe />
      <Skill /> {/* Add Skill component here */}
      <Project />
    </div>
  );
}

export default App;
