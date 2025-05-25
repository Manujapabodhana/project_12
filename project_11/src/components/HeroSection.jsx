import React from 'react';
import heroBg from '../assets/hero-bg.jpg'; // Use your cricket image

const HeroSection = () => (
  <section
    className="hero-section"
    style={{ backgroundImage: `url(${heroBg})` }}
  >
    <div className="hero-overlay"></div>
    <div className="hero-content">
      <h1>
        RETIRING 16 TEST TON ANGELO<br />
        MATHEWS A TRUE WARRIOR
      </h1>
      <button>READ MORE</button>
    </div>
  </section>
);

export default HeroSection;
