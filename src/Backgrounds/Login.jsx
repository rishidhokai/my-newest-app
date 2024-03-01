// components of Login
import React from "react";
import LoginPopup from "./LoginPopup";

function Login({ onOpenPopup }) {
  return (
    <div className="login-form">
      <a className="dashlinks" href="#" onClick={onOpenPopup}>
        Client Login
      </a>
    </div>
  );
}

export default Login;
