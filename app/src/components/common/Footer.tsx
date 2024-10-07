import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../assets/images/kimnafooter.png";
import GoogleMapComponent from "./GoogleMap";
import CTAButton from "./CTAButton";
import instagramicon from "./../../assets/icons/instagramicon.svg";
import yelpicon from "./../../assets/icons/yelpicon.svg";
import { HashLink } from "react-router-hash-link";
import {
  scrollWithOffset,
  scrollWithOffsetAboutPage,
} from "../../utils/scrollWithOffset";

const Footer: React.FC = () => {
  const navLinks = [
    {
      title: "About Us",
      link: "/about",
      subLinks: [
        {
          label: "OUR STORY",
          path: "/about#our-story",
          scrollWithOffset: scrollWithOffsetAboutPage,
        },
        {
          label: "OUR PROMISE",
          path: "/about#our-promise",
          scrollWithOffset: scrollWithOffsetAboutPage,
        },
      ],
    },
    {
      title: "Menu",
      link: "/menu",
      subLinks: [
        {
          label: "KIMBAP",
          path: "/menu#kimbap",
          scrollWithOffset: scrollWithOffset,
        },
        {
          label: "ENTREE",
          path: "/menu#entree",
          scrollWithOffset: scrollWithOffset,
        },
        {
          label: "NOODLE",
          path: "/menu#noodle",
          scrollWithOffset: scrollWithOffset,
        },
        {
          label: "SNACK",
          path: "/menu#snack",
          scrollWithOffset: scrollWithOffset,
        },
        {
          label: "SPECIAL COMBO",
          path: "/menu#special-combo",
          scrollWithOffset: scrollWithOffset,
        },
      ],
    },
    {
      title: "Contact",
      link: "/contact",
      subLinks: [],
    },
  ];

  return (
    <>
      <footer>
        <div className="container">
          <div className="logo">
            <a href="/">
              <img src={logo} alt='kimbapnara-logo'/>
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
                Copyright &copy; 2024 DAALL HOUSE LLC
              </div>
            </div>
            <div className="nav-container">
              {navLinks.map((section, index) => (
                <ul className="footer-nav-group" key={index}>
                  <li>
                    <Link to={section.link}>
                      <h4>{section.title}</h4>
                    </Link>
                  </li>
                  {section.subLinks.map((subLink, subIndex) => (
                    <li key={subIndex}>
                      <HashLink
                        smooth
                        scroll={subLink.scrollWithOffset}
                        to={subLink.path}
                      >
                        {subLink.label.split(" ").map((word, i) => (
                          <React.Fragment key={i}>
                            {word}
                            {i < subLink.label.split(" ").length - 1 && <br />}
                          </React.Fragment>
                        ))}
                      </HashLink>
                    </li>
                  ))}
                </ul>
              ))}
            </div>

            <div className="map-container">
              <GoogleMapComponent />
              <div>9339 Baltimore National Pike, Ellicott City, MD 21042</div>
              <div className="social-links">
                <CTAButton
                  className="icon"
                  alt="instagram"
                  to="https://www.instagram.com/kimbapnaraec/"
                  imgSrc={instagramicon}
                />
                <CTAButton
                  className="icon"
                  alt="yelp"
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
