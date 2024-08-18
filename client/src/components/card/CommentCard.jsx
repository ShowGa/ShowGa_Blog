import React from "react";
// Images
import { gao } from "../../assets";
// react icons
import { PiHandsClapping } from "react-icons/pi";

const CommentCard = ({ comment }) => {
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
        <p className="text-sm">{comment.content}</p>
      </div>

      <div>
        <div className="c-comment-card_function">
          <PiHandsClapping className="text-lg" />
          <p>{comment.numOfLikes}</p>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
