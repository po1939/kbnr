import React, { useEffect } from 'react';

const GoogleReviewsWidget: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apps.elfsight.com/p/platform.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Replace 'YOUR_WIDGET_ID' with your actual Elfsight widget ID */}
      <div className="elfsight-app-2310e19a-030c-476d-8162-1b38a3468ced"data-elfsight-app-lazy></div>
    </div>
  );
};

export default GoogleReviewsWidget;
