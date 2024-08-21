import React, { useState } from "react";

const Modal = ({ handleAction, setShowModal, condition }) => {
  const [confirmInput, setConfirmInput] = useState("");

  const handleCondition = () => {
    if (condition === "delete profile") {
      return {
        word: "Sad to see you go. Once your account is deleted, all of your content will be permanently gone, including your profile and comments.",
      };
    }

    if (condition === "delete post") {
      return {
        word: "Are you sure delete post ?",
      };
    }
  };

  return (
    <div className="c-delete-modal_wrapper" onClick={setShowModal}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="c-delete-modal_container"
      >
        <span onClick={setShowModal}>X</span>
        <h3>{handleCondition().word}</h3>

        <div className="c-delete-confirmation">
          <p>Type "delete" for deletion</p>
          <input
            type="text"
            onChange={(e) => {
              setConfirmInput(e.target.value);
            }}
          />
        </div>

        <button disabled={confirmInput !== "delete"} onClick={handleAction}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Modal;
