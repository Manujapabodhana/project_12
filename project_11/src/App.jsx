import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
      <Navbar />
      <div className="main-content">
        <HeroSection />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
