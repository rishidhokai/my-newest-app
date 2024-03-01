// BG3 Elements
import React from 'react';

const BG3Element = ({ heading, paragraph, image }) => (
  <div className="bg3_ihp">
    <img src={image} alt="BG3 Image" />
    <hr />
    <h2>{heading}</h2>
    <p>{paragraph}</p>
  </div>
);

export default BG3Element;
