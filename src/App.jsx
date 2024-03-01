import React from 'react';
import ReactDOM from 'react-dom';

import Header from "./Header";
import Footer from "./Footer";
import BG1 from './Backgrounds/Bg1';
import BG2 from './Backgrounds/Bg2';
import BG3 from './Backgrounds/Bg3';
import BG4 from './Backgrounds/Bg4';
import BG5 from './Backgrounds/Bg5';


function App() {
    // scrollToSection = () => {
    //     // Replace 'your-section-id' with the ID of the element you want to scroll to
    //     const targetElement = document.getElementById('bg2');
      
    //     if (targetElement) {
    //       // Get the top position of the target element
    //       const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      
    //       // Scroll smoothly to the target element with an offset of 400 pixels
    //       window.scrollTo({
    //         top: targetPosition + 400,
    //         behavior: 'smooth',
    //       });
    //     }
    // };
    
    return(
        <div>
            <Header />
            <h1>i work!!!</h1>
            {/* <img className="bg10" src="https://png.pngtree.com/background/20230524/original/pngtree-futuristic-background-with-orange-lights-moving-across-the-frame-picture-image_2711578.jpg" alt="background1"></img> */}
            <BG1 />
            {/* <img className="bg10" src="https://png.pngtree.com/background/20230524/original/pngtree-futuristic-background-with-orange-lights-moving-across-the-frame-picture-image_2711578.jpg" alt="background1"></img> */}
            <BG2 />
            {/* <img className="bg10" src="https://png.pngtree.com/background/20230524/original/pngtree-futuristic-background-with-orange-lights-moving-across-the-frame-picture-image_2711578.jpg" alt="background1"></img> */}
            <BG3 />
            {/* <img className="bg10" src="https://png.pngtree.com/background/20230524/original/pngtree-futuristic-background-with-orange-lights-moving-across-the-frame-picture-image_2711578.jpg" alt="background1"></img> */}
            <BG4 />
            {/* <img className="bg10" src="https://png.pngtree.com/background/20230524/original/pngtree-futuristic-background-with-orange-lights-moving-across-the-frame-picture-image_2711578.jpg" alt="background1"></img> */}
            <BG5 />
            {/* <h1>YOU SUCKKKKKK</h1> */}
            <Footer />
        </div>
    )
};

export default App;