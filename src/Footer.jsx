import React from 'react';

// import Dashboard from './Dashboard';

function Footer() {
    //code
    const date = new Date().getFullYear();
    
    return(
        <div className="footer">
            <hr />
            <h2>Links</h2>
            <br />
            <br />
            <img src="https://static.wixstatic.com/media/cf9793_4648eec452c444eaa3604536c3562b66~mv2.png/v1/fill/w_642,h_662,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/center%20truxt.png" height={200} width={200}/>
            <div className="foot_links">
                <a href="https://www.truxt.ai" target="_blank">Home</a> <br />
                <a href="https://www.truxt.ai" target="_blank">About</a> <br />
                <a href="https://www.truxt.ai" target="_blank">Contact</a> <br />
                <a href="https://www.truxt.ai" target="_blank">Demo</a>
            </div>
            <footer className="foot">
                <p>Copyright© {date}</p>
            </footer>
        </div>
    )
};

export default Footer;

