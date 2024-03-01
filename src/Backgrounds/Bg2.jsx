// components of BG2
import React from 'react';
// import BG2Element from './BG2Element';
import BG2Element from './Bg2element';

///FIGURE OUT LOOPING SO IT LESS LINES



function BG2() {
  const scrollToSection = () => {
    //div to go to
    const targetElement = document.getElementsByClassName('bg5');

    if (targetElement.length > 0) {
      // Get the top position of the target element
      const targetPosition = targetElement[0].getBoundingClientRect().top + window.scrollY;

      // Scroll smoothly to target location, duration no work :/
      window.scrollTo({
        // top: targetPosition - 132,
        top: targetPosition - 128,
        behavior: 'smooth',
        duration: '50000',
      });
    }
  };
  return(
    <div className="bg2">
      <h1>OUR TECHNOLOGY</h1>
      <br />
      <div className="bg2elements">
          <BG2Element 
              heading="01 / ACCURACY"
              paragraph="Truxt combines its deep expertise in Customer Experience with advanced GenAI to deliver superior accuracy. Our Pre-trained GenAI Platform comprehensively analyzes various knowledge bases, providing precise understanding of customer inquiries for relevant and accurate responses. This enhances customer satisfaction and trust in our automated solutions."
          />
          
          <BG2Element 
              heading="02 / SECURITY"
              // paragraph="We are committed to data security. 'Your organization's data stays within your boundaries, ensuring absolute confidentiality and control.' We implement stringent data protection measures to securely manage organizational data, protecting sensitive customer and business information within the enterprise." 
              
              paragraph={(
              <>
                We are committed to data security. "Your organization's data stays within your boundaries, ensuring absolute confidentiality and control."
                {' '}
                We implement stringent data protection measures to securely manage organizational data, protecting sensitive customer and business information within the enterprise.
              </>
            )}
          />
      
          <BG2Element 
              heading="03 / SCALABILITY " 
              paragraph="Truxt's AI workforce operates 24/7, eliminating wait times and staffing issues. Our highly scalable platform efficiently manages growing support volumes, maintaining quality while being cost-effective. This makes it an ideal choice for growing businesses seeking dependable, scalable customer support solutions." 
          />
      </div>
      <div className="pics">
          <img className="outer_pic" src="https://static.wixstatic.com/media/cf9793_68b741c872744bdc91e0808bc67054c1~mv2.png/v1/fill/w_1310,h_1248,al_c,q_90,enc_auto/MAC_edited.png" alt="screen pic" />
          <img className= "internal_pic" src="https://static.wixstatic.com/media/cf9793_d915f42905a645ad825d98d7b0cd9979~mv2.png/v1/fill/w_1426,h_688,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Screenshot%202024-01-09%20at%201_edited_edited.png" alt="screen content pic" />
      </div>
      <button class="pushable" onClick={scrollToSection}> 
            <span class="shadow"></span>
            <span class="edge"></span>
            <span class="front" > View Demo</span>
      </button>
      
    </div>
  )
};

export default BG2;
