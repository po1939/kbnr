import React from 'react';
import background1 from './../../assets/images/homepage1.png';
import CTAButton from './../../components/common/CTAButton';
import googlemap from './../../assets/images/googlemap.png';
import kimbap from './../../assets/images/kimbap.png';
import specialcombo from './../../assets/images/specialcombo.png';
import entree from './../../assets/images/entree.png';
import noodle from './../../assets/images/noodle.png';
import boonsik from './../../assets/images/boonsik.png';

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
          <div className="section-header">At Kim Bap Na Ra</div>
          <div className="section-text">We take pride in delivering an authentic Korean culinary experience. Our promises to you are as carefully crafted as our delicious Korean food, ensuring a dining adventure that goes beyond your expectations!</div>
          <div> <CTAButton to="/about" label="Learn More" /> </div>
        </div>
      </div>
      <div className="section3">
        <div className="section3text">
          <div className="section-header">Menu</div>
          <div className="section-text">Kimbap (김밥) is a popular Korean dish, featuring seaweed rice rolls filled with diverse ingredients. Translating to "seaweed rice" in Korean, kimbap is often likened to Korean sushi, boasting unique flavors and ingredients.</div>
        </div>
        <div className="menu-navigation">
          <div className="menu-list">
            <div className="menu-item">
              <CTAButton to="/menu/kimbap" imgSrc={kimbap} />
              <div className="menu-text-overlay"> Kimbap </div>
            </div>
            <div className="menu-item">
              <CTAButton to="/menu/special-combo" imgSrc={specialcombo} />
              <div className="menu-text-overlay"> Special Combo </div>
            </div>
            <div className="menu-item">
              <CTAButton to="/menu/entree" imgSrc={entree} />
              <div className="menu-text-overlay"> Entree </div>
            </div>
            <div className="menu-item">
              <CTAButton to="/menu/noodle" imgSrc={noodle} />
              <div className="menu-text-overlay"> Noodle </div>
            </div>
            <div className="menu-item">
              <CTAButton to="/menu/boonsik" imgSrc={boonsik} />
              <div className="menu-text-overlay"> Boonsik </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section4">
        <div className="section4image">
          <img src={googlemap}/> *
        </div>
        <div className="section4text">
          <div className="section-header">Contact</div>
          <div className="s4text1">9339 Baltimore National Pike, Ellicott City, MD 21042</div>
          <div>
          <div className="hour-container">
            <div>Wed - Mon: </div>
            <div className='time'>10 AM - 6:30 PM </div>
          </div>
          <div className="hour-container">
            <div>Tue: </div>
            <div className='time'>CLOSED</div>
          </div>
          <div className="call-button">
            <CTAButton to="tel:+4104569166" label="(410)456-9166" />                  
          </div>

        </div>  
      </div>
    </div>
  </div>
  );
};

export default MyComponent;
