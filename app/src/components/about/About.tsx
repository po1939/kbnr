import React from 'react';
import background1 from './../../assets/images/homepage1.png';
const MyComponent: React.FC = () => {
  return (
    <div className='about'>
      <div className="section1">
        <img src= {background1} alt="Image" className="image" />
        <div className="text-overlay">
          <div className="section1text">
            <div className="s1text1">Kimbap & Beyond:</div>
            <div className="s1text2"> A Tapestry of Korean Flavor Await!</div>
          </div> 
        </div>
      </div>
    </div>
    );
};

export default MyComponent;
