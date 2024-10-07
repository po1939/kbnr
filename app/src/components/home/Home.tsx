import React from "react";
import SecondHeader from "./../../components/common/SecondHeader";
import CTAButton from "./../../components/common/CTAButton";
import kimbap from "./../../assets/images/kimbap.png";
import specialcombo from "./../../assets/images/specialcombo.png";
import entree from "./../../assets/images/entree.png";
import noodle from "./../../assets/images/noodle.png";
import boonsik from "./../../assets/images/boonsik.png";
import GoogleReviewsWidget from "./GoogleCarousel";
import MyImageButton from "../common/ImageButton";
import GoogleMapsEmbed from "../common/GoogleMap";


const MyComponent: React.FC = () => {
  return (
    <div className="home">
      <SecondHeader />
      <div className="section">
        <div className="container">
          <h2>About Us</h2>
          <p>
            We take pride in delivering an authentic Korean culinary experience.<br/>
            Our promises to you are as carefully crafted as our delicious Korean
            food, ensuring a dining adventure that goes beyond your
            expectations!
          </p>
          <div>
            <CTAButton to="/about" label="Learn More" />
          </div>
        </div>
      </div>
      <div className="section white-bg">
        <div className="container">
          <h2>Menu</h2>
          <p>
            Kimbap (김밥) is a popular Korean dish, featuring seaweed rice rolls
            filled with diverse ingredients. <br/> Translating to "seaweed rice" in
            Korean, kimbap is often likened to Korean sushi, boasting unique
            flavors and ingredients.
          </p>

          <div className="menu-navigation">
            <div className="menu-list">
              <MyImageButton src={kimbap} to="/menu#kimbap" label="Kimbap" />
              <MyImageButton src={entree} to="/menu#entree" label="Entree" />
              <MyImageButton src={noodle} to="/menu#noodle" label="Noodle" />
              <MyImageButton src={boonsik} to="/menu#boonsik" label="Boonsik" />
              <MyImageButton
                src={specialcombo}
                to="/menu#special-combo"
                label="Special Combo"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="section contact">
        <div className="container">
          <GoogleMapsEmbed />

          <div className="text-container">
            <h2>Contact</h2>
            <p>9339 Baltimore National Pike, Ellicott City, MD 21042</p>
            <div className="hour-container">
              <div className="time">
                <p>Wed - Mon: 10 AM - 6:30 PM</p>
                <p>Tue: CLOSED</p>
              </div>
            </div>
            <div className="call-button">
              <CTAButton to="tel:+4104569166" label="(410)456-9166" />
            </div>
          </div>
        </div>
      </div>
      <div className="section white-bg">
        <div className="container">
          <h2>Review</h2>
          <GoogleReviewsWidget />
        </div>
        <div className="review-hide"></div>
      </div>
    </div>
  );
};

export default MyComponent;
