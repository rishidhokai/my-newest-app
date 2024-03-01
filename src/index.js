import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Scroll from './Scroll.jsx';

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {Scroll()};



// AIzaSyBV96s3PcKdahu4VpWs0tJx42lp1jKgVd4



ReactDOM.render(<App />, document.getElementById("root"));
