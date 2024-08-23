import React, { useRef, useState } from "react";
// Images
import { gao } from "../../assets";
// react icons
import { PiHandsClapping } from "react-icons/pi";
import { changeTimeZone } from "../../utils/timezone";
//react hot toast
import toast from "react-hot-toast";
// Comment-Service
import CommentService from "../../services/comment-service";
// utils conffeti
import { confettiAction } from "../../utils/conffeti";

const CommentCard = ({ comment }) => {
  const timeoutID = useRef(null);
  const waitingLike = useRef(0);
  const totalLikes = useRef(0);

  const [likeAmount, setLikeAmount] = useState(comment.numOfLikes);

  const handleClickClap = () => {
    if (totalLikes.current >= 20) {
      return;
    }

    setLikeAmount(likeAmount + 1);
    waitingLike.current++;
    totalLikes.current++;

    if (totalLikes.current % 5 === 1) {
      confettiAction({ y: 0.7, x: 0.7 });
    }

    if (timeoutID.current) {
      clearTimeout(timeoutID.current);
    }

    timeoutID.current = setTimeout(() => {
      const data = {
        commentID: comment._id,
        addLike: waitingLike.current,
      };

      CommentService.commentClap(data)
        .then((res) => {
          waitingLike.current = 0;
        })
        .catch((e) => {
          toast.error("Error occurred when clapping comment !");
          console.log(e);
        });
    }, 800);
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
          <p>{likeAmount}</p>
        </button>
      </div>
    </div>
  );
};

export default CommentCard;
