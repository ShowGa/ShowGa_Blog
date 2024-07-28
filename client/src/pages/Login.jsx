import React from "react";
// Images
import { google, github, facebook } from "../assets";

const Login = () => {
  return (
    <main className="p-login-page_wrapper">
      <div className="p-login_button_wrapper">
        <div className="login_button bg-orange-600">
          <img src={google} />
          <p>Sign with Google</p>
        </div>

        <div className="login_button bg-gray-600">
          <img src={github} />
          <p>Sign with Github</p>
        </div>

        <div className="login_button bg-blue-800">
          <img src={facebook} />
          <p>Sign with Facebook</p>
        </div>
      </div>
    </main>
  );
};

export default Login;
