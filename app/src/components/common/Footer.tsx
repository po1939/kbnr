import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../assets/images/kimnafooter.svg';
import GoogleMapsEmbed from './GoogleMap';

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
              
              <div><Link to="/Our Story">OUR STORY</Link></div>
              
              <div><Link to="/Kimbap">KIMBAP</Link></div>
              <div />
              <div><Link to="/Our Promise">OUR PROMISE</Link></div>
              <div><Link to="/Entree">ENTREE</Link></div>
              <div />
              <div />
              <div><Link to="/Noodle">NOODLE</Link></div>
              <div />
              <div />
              <div><Link to="/Snack">SNACK</Link></div>
              <div />
              <div />
              <div><Link to="/Special Combo">SPECIAL COMBO</Link></div>
              <div />
            </div>

            <div className="map-container">
              <GoogleMapsEmbed/>
              <h3> 9339 Baltimore National Pike, Ellicott City, MD 21042</h3>
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
