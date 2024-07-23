import React from 'react';
import SecondHeader from './../../components/common/SecondHeader';
import CTAButton from './../../components/common/CTAButton';
import googlemap from './../../assets/images/googlemap.png';
import kimbap from './../../assets/images/kimbap.png';
import specialcombo from './../../assets/images/specialcombo.png';
import entree from './../../assets/images/entree.png';
import noodle from './../../assets/images/noodle.png';
import boonsik from './../../assets/images/boonsik.png';
import GoogleReviewsWidget from './GoogleCarousel';
import MyImageButton from '../common/ImageButton';
import GoogleMapComponent from './GoogleMap';

const MyComponent: React.FC = () => {
  return (
    <div className='home'>
        <SecondHeader/>
      <div className="section2">
        <div className="section2text">
          <h2>At Kim Bap Na Ra</h2>
          <body>We take pride in delivering an authentic Korean culinary experience. Our promises to you are as carefully crafted as our delicious Korean food, ensuring a dining adventure that goes beyond your expectations!</body>
          <div> <CTAButton to="/about" label="Learn More" /> </div>
        </div>
        
      </div>
      <div className="section3">
        <div className="section3text">
          <h2>Menu</h2>
          <body>Kimbap (김밥) is a popular Korean dish, featuring seaweed rice rolls filled with diverse ingredients. Translating to "seaweed rice" in Korean, kimbap is often likened to Korean sushi, boasting unique flavors and ingredients.</body>
        </div>
      
      <div className="menu-navigation">
        <div className="menu-list">
          <MyImageButton src={kimbap} to="/menu" label="Kimbap" />
          <MyImageButton src={specialcombo} to="/menu" label="Special Combo" />
          <MyImageButton src={entree} to="/menu" label="Entree" />
          <MyImageButton src={noodle} to="/menu" label="Noodle" />
          <MyImageButton src={boonsik} to="/menu" label="Boonsik" />
        </div>
      </div>
    </div>
      <div className="section4">
        <div className="section4image">
          <GoogleMapComponent/>
           
        </div>
        <div className="section4text">
          <h2>Contact</h2>
          <body>9339 Baltimore National Pike, Ellicott City, MD 21042</body>
          <div className="hour-container">
            <div className="time">
              <body>Wed - Mon: 10 AM - 6:30 PM</body>
              <body>Tue: CLOSED</body>
            </div>
          </div>
          <div className="call-button">
            <CTAButton to="tel:+4104569166" label="(410)456-9166" />                  
          </div>
        </div>  
      </div>
      <div className="section5">
        <div className="section5text">
          <h2>Review</h2>
          
        </div>
        <GoogleReviewsWidget/>
      </div>
  </div>
  
  );  
};

export default MyComponent;
