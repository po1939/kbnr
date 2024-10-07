import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./../../assets/images/kimna-icon.png";
import logoText from "./../../assets/images/kimna-logo-text.png";
import CTAButton from "./CTAButton";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <nav>
        <div className="logo">
          <a href="/">
            <img src={logo} alt="kimbapnara-logo" />
            <img src={logoText} alt="kimbapnara-text-logo" />
          </a>
        </div>
        <div
          className={isMobileMenuOpen ? "mobile-menu-icon open" : "mobile-menu-icon"}
          onClick={toggleMobileMenu}
        >
          <span className="hamburger"></span>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
        </div>
        <ul className={isMobileMenuOpen ? "nav-links mobile-menu-open" : "nav-links"}>
          <li>
            <Link to="/" onClick={toggleMobileMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleMobileMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/menu" onClick={toggleMobileMenu}>
              Menu
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMobileMenu}>
              Contact
            </Link>
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
