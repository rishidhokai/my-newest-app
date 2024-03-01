// components of BG4.jsx
import React from 'react';
import Map from './Map';

const BG4 = () => (
    
    <div className="bg4">
        <div className="header">
            <h1>GET IN TOUCH</h1>
            <hr />
            <h2>hello@truxt.ai</h2>
        </div>
        <div className="map">
            {/* <br /> */}
            <gmp-map center="40.71284103393555,-74.00601959228516" zoom="14" map-id="DEMO_MAP_ID">
                <gmp-advanced-marker position="40.71284103393555,-74.00601959228516" title="My location"></gmp-advanced-marker>
            </gmp-map>
            {/* <Map /> */}
            {/* Add Google Maps interactive element */}
        </div>
    </div>
);

export default BG4;
