import React, { useState } from "react";
import { useTranslation } from "react-i18next";
// React icons
import { CiCirclePlus } from "react-icons/ci";
import { AiOutlinePicture } from "react-icons/ai";
// React quill
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
// CSS
import "./pages.css";
import toast from "react-hot-toast";
// firebase
import {
  getDownloadURL,
  getStorage,
  uploadBytesResumable,
  ref,
} from "firebase/storage";
// firebase config
import { app } from "../firebase/firebase";

const Editor = () => {
  const { t } = useTranslation();

  const [editorContent, setEditorContent] = useState("");
  const [plusBtnShow, setPlusBtnShow] = useState(false);

  const handleImgBtnClick = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
    input.onchange = () => {
      const file = input.files[0];

      console.log(file);

      if (file) {
        console.log("uploading");
        uploadImg(file);
      }
    };
  };

  const uploadImg = (file) => {
    const storage = getStorage(app);
    // add random info to specialize the file name
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          genrateImgElement(downloadURL);
        });
      }
    );
  };

  const genrateImgElement = (downloadURL) => {
    let imgContent;
    imgContent = `<img src="${downloadURL}"/>`;

    setEditorContent(editorContent + imgContent);
  };

  return (
    <div className="max-w-[50%] min-h-[100vh] mx-auto max-md:max-w-[95%] pt-11">
      <input type="text" placeholder="Title" className="p-editor_title_input" />

      <ReactQuill
        theme="bubble"
        value={editorContent}
        onChange={setEditorContent}
        modules={modules}
        formats={formats}
        placeholder="Tell us your story"
      />

      <div className="p-function_container">
        <button
          onClick={() => {
            setPlusBtnShow(!plusBtnShow);
          }}
        >
          <CiCirclePlus
            className={`p-plus_button ${plusBtnShow ? "p-rotate-effect" : ""}`}
          />
        </button>
        {plusBtnShow && (
          <div onClick={handleImgBtnClick} className="p-btn_container">
            <button>
              <AiOutlinePicture className="p-function_btn" />
            </button>
          </div>
        )}
      </div>

      <div
        className="p-post"
        dangerouslySetInnerHTML={{ __html: editorContent }}
      ></div>
    </div>
  );
};

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, "image"],
    ["bold", "italic", "underline"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

export default Editor;
