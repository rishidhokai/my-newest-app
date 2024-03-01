// components of LoginPopup
import React from "react";

const LoginPopup = ({ onClose }) => {
  return (
    <div className="login-popup">
      <div className="popup-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <div className="login-form">
            <form>
                <h2>Login</h2>
                <input type="email" placeholder="Username or email id" name="username" required />
                <input type="password" placeholder="Enter password" name="psw" required />
                <button type="submit">Login</button>

                <label class="remember-me"> <input type="checkbox" name="remember"/>Remember me</label>
                <span class="forget-psw"><a href="#">Forgot password?</a></span>
                <div class="social-btn">
                    <button type="submit" class="facebook-btn"><i class="fa fa-facebook" aria-hidden="true"></i> Login with Facebook</button>
                    <button type="submit" class="google-btn"><i class="fa fa-google" aria-hidden="true"></i> Login with Google</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
