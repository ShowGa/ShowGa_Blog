import React, { useState } from "react";
// zustand
import useAuthUserStore from "../zustand/useAuthUser";
// Conponents
import Modal from "../components/modal/Modal";

const Profile = () => {
  const { authUser } = useAuthUserStore();

  const [showModal, setShowModal] = useState(false);

  return (
    <main className="p-profile-page_wrapper">
      <div className="p-profile-head_container">
        <h1>Profile Information</h1>
        <img src={authUser.avatar} alt="img" />
      </div>

      <form className="p-profile-body_container">
        <label>Name</label>
        <input id="username" type="text" defaultValue={authUser.username} />

        <label>Password</label>
        <input id="password" type="password" />

        <button type="submit">Update</button>
      </form>

      <div
        onClick={() => {
          setShowModal(true);
        }}
        className="p-profile-function_button_container"
      >
        <span>Delete account</span>
      </div>

      {showModal && (
        <Modal
          setShowModal={() => {
            setShowModal(false);
          }}
        />
      )}
    </main>
  );
};

export default Profile;
