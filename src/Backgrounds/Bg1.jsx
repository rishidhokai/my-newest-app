import React from 'react';

function BG1() {
  const scrollToSection = () => {
    // Replace 'your-section-id' with the ID of the element you want to scroll to
    const targetElement = document.getElementsByClassName('bg2');

    if (targetElement.length > 0) {
      // Get the top position of the target element
      const targetPosition = targetElement[0].getBoundingClientRect().top + window.scrollY;

      // Scroll smoothly to the target element with an offset of 400 pixels
      window.scrollTo({
        top: targetPosition - 132,
        behavior: 'smooth',
        duration: '-50000',
      });
    }
  };

  return (
    <div className="bg1">
      <div className="content">
        <h1 style={{ fontSize: 110 }}>EMPOWERING<br />CUSTOMER SUPPORT<br />WITH<br />GenAI</h1>
        <br />
        <button className="pushable" onClick={scrollToSection}>
          <span className="shadow"></span>
          <span className="edge"></span>
          <span className="front"><i className="fa fa-chevron-down" aria-hidden="true"></i></span>
        </button>
      </div>
    </div>
  );
}

export default BG1;
