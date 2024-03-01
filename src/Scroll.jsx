import React from 'react';

function Scroll() {
    const scrollThreshold = 60; // Adjust this value as needed

    const navbar = document.getElementById("navbar");
    const logo = document.getElementById("dashboard_logo");
    const dashLinks = document.getElementsByClassName("dashlinks");

    if (document.body.scrollTop > scrollThreshold || document.documentElement.scrollTop > scrollThreshold) {
        // On scroll down
        navbar.classList.add("scrolled");
    } else {
        // On scroll up to top
        navbar.classList.remove("scrolled");
    }
}

export default Scroll;