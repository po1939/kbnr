import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../assets/images/kimna-icon.png';
import logoText from './../../assets/images/kimna-logo-text.png';
import CTAButton from './CTAButton';

const Header: React.FC = () => {
  return (
    <header className='header'>
      <nav>
        <div className='logo'>
            <a href='/'>
                <img src={logo} />
                <img src={logoText} />
            </a>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <CTAButton to="tel:+4104569166" label="(410)456-9166" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
