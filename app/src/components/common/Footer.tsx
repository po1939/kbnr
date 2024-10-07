import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../assets/images/kimnafooter.png";
import GoogleMapComponent from "./GoogleMap";
import CTAButton from "./CTAButton";
import instagramicon from "./../../assets/icons/instagramicon.svg";
import yelpicon from "./../../assets/icons/yelpicon.svg";
import { HashLink } from "react-router-hash-link";
import { scrollWithOffset, scrollWithOffsetAboutPage } from "../../utils/scrollWithOffset";

const Footer: React.FC = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="logo">
            <a href="/">
              <img src={logo} />
            </a>
          </div>
          <div className="footer-contents">
            <div className="business-container">
              <h4>Business Hours</h4>
              <div className="hour-container">
                <div>Wed - Mon: 10 AM - 6:30 PM</div>
                <div>Tue: CLOSED</div>
              </div>
              <div>Dine In Closes 30 Minutes Prior To Closing Time</div>
              <div>(410) 456-9166</div>
              <div style={{ marginTop: "auto" }}>
                Copyright &copy; 2024 DAALL HOUSE LLC{" "}
              </div>
            </div>
            <div className="nav-container">
              <div className="footer-nav-group">
                <Link to="/about">
                  <h4>About Us</h4>
                </Link>
                <HashLink
                  smooth
                  scroll={scrollWithOffsetAboutPage}
                  to="/about#our-story"
                >
                  OUR STORY
                </HashLink>
                <HashLink
                  smooth
                  scroll={scrollWithOffsetAboutPage}
                  to="/about#our-promise"
                >
                  OUR PROMISE
                </HashLink>
              </div>
              <div className="footer-nav-group">
                <Link to="/menu">
                  <h4>Menu</h4>
                </Link>
                <HashLink smooth scroll={scrollWithOffset} to="/menu#kimbap">
                  KIMBAP
                </HashLink>
                <HashLink smooth scroll={scrollWithOffset} to="/menu#entree">
                  ENTREE
                </HashLink>
                <HashLink smooth scroll={scrollWithOffset} to="/menu#noodle">
                  NOODLE
                </HashLink>
                <HashLink smooth scroll={scrollWithOffset} to="/menu#snack">
                  SNACK
                </HashLink>
                <HashLink
                  smooth
                  scroll={scrollWithOffset}
                  to="/menu#special-combo"
                >
                  SPECIAL
                  <br />
                  COMBO
                </HashLink>
              </div>
              <div className="footer-nav-group">
                <Link to="/contact">
                  <h4>Contact</h4>
                </Link>
              </div>
            </div>

            <div className="map-container">
              <GoogleMapComponent />
              <div>9339 Baltimore National Pike, Ellicott City, MD 21042</div>
              <div className="social-links">
                <CTAButton
                  className="icon"
                  to="https://www.instagram.com/kimbapnaraec/"
                  imgSrc={instagramicon}
                />
                <CTAButton
                  className="icon"
                  to="https://www.yelp.com/biz/kim-bob-na-ra-ellicott-city-2"
                  imgSrc={yelpicon}
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
