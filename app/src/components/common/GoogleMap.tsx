import React from 'react';

const GoogleMapsEmbed: React.FC = () => {
  return (
    <div>
      <iframe
        className = "google-map"
        loading="lazy"
        allowFullScreen
        title='google-map'
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12398.722307795834!2d-76.8346911!3d39.2771764!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c821d3d1845d09%3A0xb21515e29c235a7d!2sKim%20Bob%20Na%20Ra!5e0!3m2!1sen!2sus!4v1643951052824!5m2!1sen!2sus"
      />
    </div>
  );
};

export default GoogleMapsEmbed;
