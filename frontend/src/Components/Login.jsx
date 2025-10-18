import React from "react";
import "./login.css";

const Login = () => {
  const loginwithgoogle = () => {
    window.open("http://localhost:8000/auth/google", "_self");
  };

  return (
    <div className="login-page">
      <h1 style={{ textAlign: "center" }}>Login</h1>
      <div className="form">
        <form className="login-form">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="button">Login</button>
          <p className="message">
            Not registered? <a href="#">Create an account</a>
          </p>
        </form>

        <button className="login-with-google-btn" onClick={loginwithgoogle}>
          Sign In With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
