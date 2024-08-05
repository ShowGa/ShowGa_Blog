import React from "react";
// image
import { gao } from "../assets";

const Profile = () => {
  return (
    <main className="p-profile-page_wrapper">
      <div className="p-profile-head_container">
        <h1>Profile Information</h1>
        <img src={gao} alt="img" />
      </div>

      <form className="p-profile-body_container">
        <label>Name</label>
        <input id="username" type="text" />

        <label>Email</label>
        <input id="email" type="text" />

        <label>Password</label>
        <input id="password" type="text" />

        <button type="submit">Save</button>
      </form>
    </main>
  );
};

export default Profile;
