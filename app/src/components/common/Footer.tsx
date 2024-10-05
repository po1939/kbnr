import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../assets/icons/kimnafooter.svg';
import GoogleMapComponent from './GoogleMap';
import CTAButton from './CTAButton';
import instagramicon from './../../assets/icons/instagramicon.svg';
import yelpicon from './../../assets/icons/yelpicon.svg';


const Footer: React.FC = () => {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className='logo'>
            <a href='/'>
              <img src={logo} />
            </a>
          </div>
          <div className='footer-contents'>
            <div className="business-container">
              <h4>Business Hours</h4>
              <div className="hour-container">
                <footer>Wed - Mon: 10 AM - 6:30 PM</footer>
                <footer>Tue: CLOSED</footer>
              </div>
              <footer>Dine In Closes 30 Minutes Prior To Closing Time</footer>
              <footer>(410) 456-9166</footer>
              <footer> Copyright &copy; 2024 DAALL HOUSE LLC </footer>    
            </div>
            <div className="nav-container">
              <h4>About Us</h4>
              <h4>Menu</h4>
              <h4>Contact</h4>
              
              <footer><Link to="/our-story">OUR STORY</Link></footer>
              <footer><Link to="/kimbap">KIMBAP</Link></footer>
              <div />
              <footer><Link to="/our-promise">OUR PROMISE</Link></footer>
              <footer><Link to="/entree">ENTREE</Link></footer>
              <div />
              <div />
              <footer><Link to="/noodle">NOODLE</Link></footer>
              <div />
              <div />
              <footer><Link to="/snack">SNACK</Link></footer>
              <div />
              <div />
              <footer><Link to="/special-combo">SPECIAL COMBO</Link></footer>
              <div />
            </div>

            <div className="map-container">
              <GoogleMapComponent/>
              <footer> 9339 Baltimore National Pike, Ellicott City, MD 21042</footer>
              <div className="social-links">
                <CTAButton to="https://www.instagram.com/kimbapnaraec/" imgSrc={instagramicon} />
                <CTAButton to="https://www.yelp.com/biz/kim-bob-na-ra-ellicott-city-2" imgSrc={yelpicon} />                
              </div>

            </div>

          </div>
        </div>
      </footer>
      {/* <div className="second-box">
        Copyright &copy; 2024 DAALL HOUSE LLC
      </div> */}
    </>
  );
};

export default Footer;
