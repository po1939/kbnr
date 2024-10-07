import React from "react";
import SecondHeader from "../common/SecondHeader";
import GoogleMapsEmbed from "../common/GoogleMap";
import location from "./../../assets/icons/location.svg";
import phone from "./../../assets/icons/phone.svg";
import mail from "./../../assets/icons/mail.svg";

export const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <div className="container">
        <h2>CONTACT US</h2>
        <p>
          We'd love to hear from you! Whether you have a question, want to make
          a reservation, or just want to say hi, feel free to reach out to us.
          <br />
          Your satisfaction is our priority, and we're here to make your
          experience at Kim Bap Na Ra enjoyable!
        </p>

        <div className="google-map">
          <GoogleMapsEmbed />
        </div>

        <div className="contact-info">
          <div className="contact-info-item">
            <img src={location} />
            9339 Baltimore National Pike, Ellicott City, MD 21042
          </div>
          <div className="contact-info-item">
            <img src={phone} />
            (410)-456-9166
          </div>
          <div className="contact-info-item">
            <img src={mail} />
            kimbapnara@gmail.com
          </div>
        </div>

        <div className="contact-form"></div>
      </div>
    </div>
  );
};
