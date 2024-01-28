import React from 'react';
import logo from './../../assets/images/kimnafooter.svg';

const Footer: React.FC = () => {
  return (
    <div>
      <footer className='footer'>
        <div>
        <nav>
          <div className='logo'>
            <a href='/'>
              <img src={logo} />
            </a>
          </div>
        </nav>
      Business Hours <br></br>
      <p>Mon:{'\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0'}10AM - 6:30PM</p>
      </div>
      </footer>
      <div className="second-box">
        Copyright &copy; 2024 DAALL HOUSE LLC
      </div>
    </div>
    
  );
};

export default Footer;
