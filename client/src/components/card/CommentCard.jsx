import React from "react";
// Images
import { gao } from "../../assets";
// react icons
import { PiHandsClapping } from "react-icons/pi";
import { changeTimeZone } from "../../utils/timezone";

const CommentCard = ({ comment }) => {
  return (
    <div className="c-comment-card_container">
      <div className="c-comment-card_author_container">
        <img src={comment.belongUserID.avatar} alt="" />

        <div>
          <p>{comment.belongUserID.username}</p>
          <span>{changeTimeZone(comment.createdAt)}</span>
        </div>
      </div>

      <div>
        <p className="text-sm">{comment.content}</p>
      </div>

      <div>
        <button className="c-comment-card_function">
          <PiHandsClapping className="text-lg" />
          <p>{comment.numOfLikes}</p>
        </button>
      </div>
    </div>
  );
};

export default CommentCard;
