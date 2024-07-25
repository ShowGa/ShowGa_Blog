import React from "react";
import { Link } from "react-router-dom";
// Images
import { postTest } from "../../assets";
// Components CSS

const PostCard = () => {
  return (
    <div className="c-postcard_container">
      <div className="c-postcard_img_container">
        <img src={postTest} className="c-img_hover-effect" />
      </div>

      <div className="c-postcard_text_container">
        <p className="text-sm">2024-07-23</p>
        <h1 className="text-2xl font-bold max-sm:text-xl">How to Write Code</h1>
        <p className="text-sm line-clamp-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
          tempora quam inventore sunt. Vero quam cum hic quis delectus est,
          doloremque tenetur similique accusamus impedit, perferendis aperiam
          labore eveniet voluptatum.
        </p>
        <span className="c-tag_text-color">Code</span>
      </div>
    </div>
  );
};

export default PostCard;
