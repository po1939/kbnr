import React from 'react';
import background1 from './../../assets/images/homepage1.png';

const MyComponent: React.FC = () => {
  return (
    <div className='home'>
      <div className="section1">
        <img src= {background1} alt="Image" className="image" />
        <div className="text-overlay">
          <div className="section1text">
            <div className="s1text1">Kimbap & Beyond:</div>
            <div className="s1text2"> A Tapestry of Korean Flavor Await!</div>
          </div> 
        </div>
      </div>
      <div className="section2">
        <div className="section2text">
          <div className="s2text1">At Kim Bap Na Ra</div>
          <div className="s2text2">We take pride in delivering an authentic Korean culinary experience. Our promises to you are as carefully crafted as our delicious Korean food, ensuring a dining adventure that goes beyond your expectations!</div>
        </div>
        

      </div>

      {/* Add your component content here */}
    </div>
  );
};

export default MyComponent;
