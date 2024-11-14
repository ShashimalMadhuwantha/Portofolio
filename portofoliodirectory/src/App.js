import React from 'react';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import './App.css';

function App() {
  return (
    <div>
      <div className="animated-background"></div> {/* Background Animation */}
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
