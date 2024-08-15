import React from "react";
import { Link } from "react-router-dom";

const SideBarPostCard = ({ postData }) => {
  return (
    <div>
      <Link
        className="c-sideBarPostCard_container"
        to={`/post/${postData.slug}`}
      >
        <div className="c-sideBarPostCard_img_container">
          <img src={postData.banerImg} alt="" className="c-img_hover-effect" />
        </div>

        <div className="c-sideBarPostCard_text_container">
          <span className="c-tag_text-color">{postData.category}</span>

          <h1 className="text-lg font-bold leading-5">{postData.title}</h1>

          <p className="text-[10px]">{postData.createdAt}</p>
        </div>
      </Link>
    </div>
  );
};

export default SideBarPostCard;
