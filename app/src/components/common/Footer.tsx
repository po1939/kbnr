import React from 'react';
import logo from './../../assets/images/kimnafooter.svg';

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
              <div>Dine In Closes 30 Minutes Prior To Closing Time</div>
              <div>(410) 456-9166</div>
            </div>
            <div className="nav-container">
              <h3>About US</h3>
              <h3>MENu</h3>
              <h3>Contact</h3>
              <div>OUR STORY</div>
              <div>KIMBAP</div>
              <div />
              <div>OUR PROMISE</div>

            </div>
            <div className="map-container">
              map content here
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
