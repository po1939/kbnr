import React from 'react';
import background1 from './../../assets/images/homepage1.png';

const SecondHeader: React.FC = () => {
  return (
    <div className="secondheader">
        <img src= {background1} alt="Image" className="image" />
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