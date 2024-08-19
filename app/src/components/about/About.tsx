import React from 'react';
import SecondHeader from './../../components/common/SecondHeader';
import about1 from './../../assets/images/about1.png';
import about2 from './../../assets/images/about2.png';
const MyComponent: React.FC = () => {
  return (
    <div className='about'>
      <SecondHeader/>
    <div className ='section1'>
      <div className='section1text'>
          <h2>Our Story</h2>
          <body>Kim Bap Na Ra is a cherished mom and pop Korean eatery born from our family’s love for sharing the authentic flavors of home. Located in the heart of Maryland’s “Korean Way” in Ellicott City, our story is one of family recipes and a deep love for the comforting simplicity of “Boon-sik” , Korean street food. Along with a wide selection of “Kimbap” and other Korean dishes, our cozy restaurant invites you to experience the heart and soul of Korean home cooking. Thank you for being a part of our story. We look forward to serving you soon. </body>
      </div>
      <div className='section1image'>
        <img src={about1} />
      </div>
    </div>
    <div className ='section2'>
      <div className= 'section2image'>
        <img src={about2} />
      </div>
      <div className = 'section2text'>
        <h2>Our Promise</h2>
        <body>Here at Kim Bap Nara, our main priority is your satisfaction. We believe in a few key promises to ensure that every customer leaves our restaurant feeling fulfilled. First, we always strive to provide the quickest service while maintaining warm hospitality. Additionally, we are committed to preserving authentic flavor by using only quality ingredients. Finally, despite the limited dining and kitchen space, we always do our best to serve everyone who comes through our doors.</body>
      </div>
    </div>
   
    
    </div>
    );
};

export default MyComponent;
