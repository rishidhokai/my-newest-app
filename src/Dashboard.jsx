// import React from 'react';
import React, { useState } from 'react';
import Scroll from './Scroll';
import App from "./App.jsx";
import Login from './Backgrounds/Login';
import LoginPopup from './Backgrounds/LoginPopup';


function Dashboard() {
    //code
    window.onscroll = function() {Scroll()};
    
    const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };
    
    return(
        <div>
            <header>
                <div id="navbar">
                    <img id="dashboard_logo" src = "https://static.wixstatic.com/media/cf9793_0443d486a15d487e819fe44eef51ce92~mv2.png/v1/crop/x_0,y_0,w_511,h_170/fill/w_426,h_142,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/small%20logo%20truxt.png" alt="dashboard logo"></img>
                    <div id="navbar-right">
                        <a class = "dashlinks" href="#home">Home</a>
                        <a class = "dashlinks" href="https://www.truxt.ai" target="_blank">Product</a>
                        <a class = "dashlinks" href="https://www.truxt.ai" target="_blank">About</a>
                        <a class = "dashlinks" href="https://www.truxt.ai" target="_blank">Contact</a>
                        <a class = "dashlinks" href="https://www.truxt.ai" target="_blank">Demo</a>
                        {/* <div className="login-form"> */}
                        <a class = "dashlinks" href="#" onClick={openPopup}>Client Login</a>
                        {/* <Login /> */}
                        {/* <Login onOpenPopup={openPopup} /> */}
                        {/* Show the popup when necessary */}
                        {showPopup && <LoginPopup onClose={closePopup} />}
                            
                        {/* </div> */}
                    </div>
                </div>
            </header>
        </div>
    )
};

export default Dashboard;