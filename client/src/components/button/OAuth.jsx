import React from "react";
// image
import { google } from "../../assets";
// CSS
import "../components.css";
// firebase
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../../firebase/firebase";

const OAuth = () => {
  const auth = getAuth(app);

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    try {
      const resultsFromGoogle = await signInWithPopup(auth, provider);
      console.log(resultsFromGoogle);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button onClick={handleGoogleLogin}>
      <div className="login_button">
        <img src={google} />
        <p className="text-black">Login with Google</p>
      </div>
    </button>
  );
};

export default OAuth;
