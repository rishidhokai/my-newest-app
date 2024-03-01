// components/BG5Form.jsx
import React from 'react';
import BG5Form from './Form';

const BG5 = () => (
  <div className="bg5">
    <div className="heading">
        <h1>REQUEST DEMO</h1>
        <p>Please fill your contact details below:</p>
    </div>
        <BG5Form />
        <button class="pushable">
            <span class="shadow"></span> 
            <span class="edge"></span> 
            <span class="front" >Submit</span> 
        </button>
        {/* Add form with textboxes (name, email, subject, phone, addy) */}
  </div>
);

export default BG5;
