import React, { useState } from "react";
// Images
import { gao } from "../../assets";
// react icons
import { PiHandsClapping } from "react-icons/pi";
import { changeTimeZone } from "../../utils/timezone";
//react hot toast
import toast from "react-hot-toast";
// Comment-Service
import CommentService from "../../services/comment-service";

const CommentCard = ({ comment }) => {
  let timeoutID = 0;
  let waitingLike = 0;
  const [likeAmount, setLikeAmount] = useState(0);

  const handleClickClap = () => {
    setLikeAmount(likeAmount + 1);
    waitingLike++;

    if (timeoutID) {
      clearTimeout(timeoutID);
    }

    timeoutID = setTimeout(() => {
      const data = {
        addLike: waitingLike,
      };

      CommentService.commentClap(comment._id, data)
        .then((res) => {
          waitingLike = 0;
        })
        .catch((e) => {
          toast.error("Error occurred when clapping comment !");
          console.log(e);
        });
    }, 500);
  };

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
        <button onClick={handleClickClap} className="c-comment-card_function">
          <PiHandsClapping className="text-lg" />
          <p>{likeAmount !== 0 ? likeAmount : comment.numOfLikes}</p>
        </button>
      </div>
    </div>
  );
};

export default CommentCard;
