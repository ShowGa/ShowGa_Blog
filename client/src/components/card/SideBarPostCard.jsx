import React from "react";
// Image
import { postTest } from "../../assets";

const SideBarPostCard = () => {
  return (
    <div className="c-sideBarPostCard_container">
      <div className="c-sideBarPostCard_img_container">
        <img src={postTest} alt="" className="c-img_hover-effect" />
      </div>

      <div className="c-sideBarPostCard_text_container">
        <span className="c-tag_text-color">Food</span>

        <h1 className="text-lg font-bold leading-5">
          How to eat shiiit without feeling to barf
        </h1>

        <p className="text-[10px]">23.07.2024</p>
      </div>
    </div>
  );
};

export default SideBarPostCard;
