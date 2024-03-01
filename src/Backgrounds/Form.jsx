// components/BG5Form.jsx
import React from 'react';

function BG5Form(props) {
    //code
    return(
        <div className="form">
            <form>
                {/* <label for="Name">Name</label> */}
                <input type="text" id="name" name="name" placeholder="NAME" />
                <br />
                <br />
                {/* <label for="Email">Email</label> */}
                <input type="email" id="email" name="email" placeholder="EMAIL" />
                <br />
                <br />
                {/* <label for="Subject">Subject</label> */}
                <input type="text" id="subject" name="subject" placeholder="SUBJECT" />
                <br />
                <br />
                {/* <label for="Phone">Phone</label> */}
                <input type="tel" id="phone" name="phone" placeholder="PHONE" />
                <br />
                <br />
                {/* <label for="Address">Address</label> */}
                <input type="text" id="address" name="address" placeholder="ADDRESS" />
            </form>
        </div>
    )
};

export default BG5Form;
