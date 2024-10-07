import React from 'react';
import heroBg from './../../assets/video/kimbapnara-hero-bg.mp4';

const SecondHeader: React.FC = () => {
  return (
    <div className="secondheader">
        <video autoPlay muted loop id="hero-video-bg">
        <source src={heroBg} type="video/mp4" />

        </video>
        <div className="text-overlay">
          <div className="text">
            <h3>Kimbap & Beyond:</h3>
            <h1> A Tapestry of Korean Flavors Await!</h1>
          </div> 
        </div> 
    </div>
  );
};

export default SecondHeader;