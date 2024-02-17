import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../assets/images/kimnafooter.svg';
import GoogleMapComponent from './GoogleMap';
import CTAButton from './CTAButton';
import instagramicon from './../../assets/images/instagramicon.svg';
import yelpicon from './../../assets/images/yelpicon.svg';


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
              <h3>Business Hours</h3>
              <div>
                <div className="hour-container">
                  <div>Wed - Mon: </div>
                  <div className='time'>10 AM - 6:30 PM </div>
                </div>
                <div className="hour-container">
                  <div>Tue: </div>
                  <div className='time'>CLOSED</div>
                </div>
              </div>
              <div>
                <div className="other-text">
                  <div>Dine In Closes 30 Minutes Prior To Closing Time</div>
                </div>
                <div className="other-text">
                  <h3>(410) 456-9166</h3>
                </div>
              </div>

            </div>
            <div className="nav-container">
              <h3>About Us</h3>
              <h3>Menu</h3>
              <h3>Contact</h3>
              
              <div><Link to="/our-story">OUR STORY</Link></div>
              
              <div><Link to="/kimbap">KIMBAP</Link></div>
              <div />
              <div><Link to="/our-promise">OUR PROMISE</Link></div>
              <div><Link to="/entree">ENTREE</Link></div>
              <div />
              <div />
              <div><Link to="/noodle">NOODLE</Link></div>
              <div />
              <div />
              <div><Link to="/snack">SNACK</Link></div>
              <div />
              <div />
              <div><Link to="/special Combo">SPECIAL COMBO</Link></div>
              <div />
            </div>

            <div className="map-container">
              <GoogleMapComponent/>
              <h3> 9339 Baltimore National Pike, Ellicott City, MD 21042</h3>
              <div className="social-links">
                <CTAButton to="https://www.instagram.com/kimbapnaraec/" imgSrc={instagramicon} />
                <CTAButton to="https://www.yelp.com/biz/kim-bob-na-ra-ellicott-city-2" imgSrc={yelpicon} />                
              </div>

            </div>

          </div>
        </div>
      </footer>
      <div className="second-box">
        Copyright &copy; 2024 DAALL HOUSE LLC
      </div>
    </>
  );
};

export default Footer;
