import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../assets/icons/kimnafooter.svg";
import GoogleMapComponent from "./GoogleMap";
import CTAButton from "./CTAButton";
import instagramicon from "./../../assets/icons/instagramicon.svg";
import yelpicon from "./../../assets/icons/yelpicon.svg";

const Footer: React.FC = () => {
  return (
    <>
      <footer>
        <div className="footer-container">
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
              <div> Copyright &copy; 2024 DAALL HOUSE LLC </div>
            </div>
            <div className="nav-container">
              <h4>About Us</h4>
              <h4>Menu</h4>
              <h4>Contact</h4>

              <div>
                <Link to="/our-story">OUR STORY</Link>
              </div>
              <div>
                <Link to="/kimbap">KIMBAP</Link>
              </div>
              <div />
              <div>
                <Link to="/our-promise">OUR PROMISE</Link>
              </div>
              <div>
                <Link to="/entree">ENTREE</Link>
              </div>
              <div />
              <div />
              <div>
                <Link to="/noodle">NOODLE</Link>
              </div>
              <div />
              <div />
              <div>
                <Link to="/snack">SNACK</Link>
              </div>
              <div />
              <div />
              <div>
                <Link to="/special-combo">SPECIAL COMBO</Link>
              </div>
              <div />
            </div>

            <div className="map-container">
              <GoogleMapComponent />
              <div>
                9339 Baltimore National Pike, Ellicott City, MD 21042
              </div>
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
      {/* <div className="second-box">
        Copyright &copy; 2024 DAALL HOUSE LLC
      </div> */}
    </>
  );
};

export default Footer;
