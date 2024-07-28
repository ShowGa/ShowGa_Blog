import React from "react";
// Images
import { gao } from "../../assets";
// react icons
import { PiHandsClapping } from "react-icons/pi";

const CommentCard = () => {
  return (
    <div className="c-comment-card_container">
      <div className="c-comment-card_author_container">
        <img src={gao} alt="" />

        <div>
          <p>ShowGa Hsiao</p>
          <span>27.07.2024</span>
        </div>
      </div>

      <div>
        <p className="text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis
          reiciendis, numquam odit fuga distinctio repellendus eos quibusdam
          ipsam minus possimus nobis accusantium autem aliquam vitae. Quae
          officiis rem voluptate impedit!
        </p>
      </div>

      <div>
        <div className="c-comment-card_function">
          <PiHandsClapping className="text-lg" />
          <p>100</p>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
