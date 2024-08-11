import React, { useEffect, useRef, useState } from "react";
// zustand
import useAuthUserStore from "../zustand/useAuthUser";
// Conponents
import Modal from "../components/modal/Modal";
// firebase
import {
  getDownloadURL,
  getStorage,
  uploadBytesResumable,
  ref,
} from "firebase/storage";
// firebase config
import { app } from "../firebase/firebase";
// toast
import toast from "react-hot-toast";
// progressbar
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Profile = () => {
  const filePickerRef = useRef();

  const { authUser } = useAuthUserStore();

  const [showModal, setShowModal] = useState(false);
  const [imgFile, setImgFile] = useState(null);
  const [imgUrl, setImgUrl] = useState("");
  const [imgUploadProgress, setImguploadProgress] = useState(null);

  const handleImgChange = (e) => {
    setImgFile(e.target.files[0]);
  };

  const uploadImg = () => {
    const storage = getStorage(app);
    // add random info to specialize the file name
    const fileName = new Date().getTime() + imgFile.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, imgFile);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImguploadProgress(progress.toFixed(0));
      },
      (error) => {
        toast.error(
          "Error occurred when uploading image ! \n File must less than 2MB ."
        );
        setImguploadProgress(null);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgUrl(downloadURL);
          setImguploadProgress(null);
        });
      }
    );
  };

  useEffect(() => {
    if (imgFile) {
      uploadImg();
    }
  }, [imgFile]);

  return (
    <main className="p-profile-page_wrapper">
      <h1 className="p-profile-title">Profile Information</h1>
      <div className="p-profile-head_container">
        <img
          src={imgUrl || authUser.avatar}
          alt="img"
          onClick={() => {
            filePickerRef.current.click();
          }}
        />
        {imgUploadProgress && (
          <CircularProgressbar
            value={imgUploadProgress || 0}
            strokeWidth={3}
            className="p-profileImg-progressbar"
            styles={{
              root: {
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0,
              },
              path: {
                stroke: `rgba(251, 180, 0, ${imgUploadProgress / 100})`,
              },
            }}
          />
        )}
      </div>

      <form className="p-profile-body_container">
        <input
          type="file"
          accept="image/*"
          onChange={handleImgChange}
          ref={filePickerRef}
          hidden
        />

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
