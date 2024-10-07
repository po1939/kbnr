import React from "react";
import SecondHeader from "./../../components/common/SecondHeader";
import about1 from "./../../assets/images/kimbapnara-about-01.png";
import about2 from "./../../assets/images/kimbapnara-about-02.png";
const MyComponent: React.FC = () => {
  return (
    <div className="about-page">
      <div className="container">
        <h1 className="mb-4">About Us</h1>
      </div>
      <div className="container">
        <div className="image-text-container my-4" id="our-story">
          <img alt="about-our-story" src={about1} />
          <div className="text-container">
            <h3>Our Story</h3>
            <p>
            Kim Bap Na Ra is a family-owned Korean eatery in Ellicott City, Maryland, inspired by our love for sharing authentic flavors. Located on "Korean Way," we serve a variety of dishes, including "Kimbap" and classic Korean street food ("Boon-sik"). Our cozy restaurant is all about the comfort and warmth of home cooking. Thank you for being part of our journey—we look forward to serving you soon!
            </p>
          </div>
        </div>
      </div>

      <div className="container " id="our-promise">
        <div className="image-text-container my-4 reverse">
          <img alt="about-our-promise" src={about2} />
          <div className="text-container">
            <h3>Our Promise</h3>
            <p>
            At Kim Bap Nara, your satisfaction is our top priority. We promise quick service with warm hospitality, authentic flavors made from quality ingredients, and our best effort to serve everyone despite our limited space.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
